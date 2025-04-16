# Spot Nodes and CRIU

> The party must go on: Resume pods after spot instance shutdown

## Spot instances

Spot instances give a 40-60% cost reduction in Google Cloud. Downside of this is that the nodes can
just get yeeted out of the cluster and your workload fails. This is especially bad for long running jobs.

An option to reduce this issue, is to run the test in VMs, for example in [Firecracker](https://firecracker-microvm.github.io/),
but this requires nested virtualization, which is not available in GKE.

Anther option is _Checkpoint/Restore in Userspace (CRIU)_ to migrate the process tree. _runc_ can checkpoint and restore
containers already today, _containerd_ can do the same. A checkpoint can be triggered on NodeShutdown events. The checkpoint
is stored on the local filesystem of _kubelet_, so a hostpath on the node, which is not ideal. Ideally this is stored
on a Persistent Volume.

## CRIU

It infects the process using _ptrace_, this is why CRIU needs extra capabilities. Parasite code dumps all required information such
as resources, file descriptors etc. During restore, CRIU loads memory pages, files, sockets and prepare namespaces. Then it
creates the processes in the tree and maps the memory of the processes.

## Containers

Problem: When you start a process in a container, it takes pid 1. CRIU takes a pid > 1. During the restore, CRIU takes pid 1, which is not allowed
since pid needs to be the same.

Another problem: TTY in containers. stdin, stdout and stderr are 0 1 and 2. In containers, stdin is bound to /dev/null, stdout and stderr are bound to
pipes with an id. When you start a new container, the pipes have different ids, which isn ot allowed.

Solution: QA Wolf developed [crik](https://github.com/qawolf/crik), a tool that works as a wrapper around CRIU and solves the pid problems by starting
`crik` as pid 1, and the appplication as pid 9001, so criu can take a pid somewhere in between. Crik also saves the pipe IDs and configures CRIU
to write the restored process logs to those pipes.

The container starts using `crik run -- process.sh`, you can mount the directory where the processes get dumped, this allows you to write
this to a Persistent Volume if you want. On startup, `crik` will check if the checkpoint directory contains a checkpoint, if something is found,
it will start a restore, otherwise it will just start the process.

Another problem: The restore process does not know that is being restored. There are runtime files, e.g. _/root/.cache/_. To solve this, _crik_ copies
the generated files into the image dir to the exact directory where they need to be restored. In-tree resources, like sockets, cannot be restored when the
directory already exists, so _crik_ has a wrapper for this.

## Links

- <https://www.qawolf.com/>
- <https://kubernetes.io/blog/2022/12/05/forensic-container-checkpointing-alpha/>
- <https://criu.org/Main_Page>
