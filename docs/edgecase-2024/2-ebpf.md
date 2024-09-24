# eBPF, The superpowers for Kubernetes

Brought to you by [Sysdig](https://sysdig.com/)

## What is eBPF

[eBPF](https://ebpf.io/) can be used to solve networking, security and observability problems without
recompiling the kernel. Simply put, eBPF is a virtual machine running inside the Linux kernel. It allows
us to execute tiny programs safely inside the kernel in response to events. The kernel reacts to system
operations, like opening a file. Before eBPF, the kernel was static and changes required recompilation to take
effect. With eBPF, we can interact with these events without chaning the kernel itself. It also eliminates
the need to write kernel modules, thank god! Because eBPF programs run inside a safe sandbox, it's harder
to cause a kernel panic.

## How does eBPF work

In essence, you write a program in a restricted version to C. There are no global variables and you cannot
write inifite loops. The programs are compiled into bytecode. Before the programs can be executed, they are
passed through a verifier that controls execution time. If the process passes the verifier, it gets loaded
into the kernel. Once loaded, the program reacts to kernel events, it lets you load logic into the kernel
triggered by events.

## eBPF at the edge

I'm sure it can be useful, but the given examples like composing music from system events sound more like
a meme to me, so I'm not going in depth.

## Observability and tracing

You don't need to change code or redeploy your application and using eBPF does not have performance impact
(doubt, but ok). Applications don't know that they're being monitored, this is useful when monitoring
potentially malicious programs.

## Networking

eBPF can implement load balancing and traffic filtering directly into the appication without loading
extra kernel modules. Less intermediate steps means more performance, which means more better.

For Kubernetes, this means that you can replace a sidecar-based service mesh with an eBPF based
service mesh. Less side cars means more performance and less resources.

## Security

Basically [Falco](https://falco.org/), [Tetragon](https://tetragon.io/) and alike.

## Questions

- Do I need to learn C to use eBPF?
    - No. Plenty of CLI application use eBPF underneath

## Links

- <https://github.com/eunomia-bpf/bpf-developer-tutorial>
- <https://github.com/iovisor/bcc>
- <https://ebpf.io/applications/>
