# eBPF's Data Deluge

> Dealing with eBPF's Observability Data Deluge

## eBPF's Promises

No instrumentation, and magically get complete visibility on all applications. Lower overhead for the visibility.
And the underappreciated feature is _reliabilty_, eBPF programs are checked before they run, so that's an extra layer
of validation against bugs.

Once a program is running in kernel space, they _generally_ cause less issues than programs running in userspace.

#### Verification

The _eBPF Verifier_ approves a program before it is compiled to run in the kernel. More on the [eBPF Verifier](https://docs.kernel.org/bpf/verifier.html).

## Hook Points

When defining a [Tetragon](https://tetragon.io/) `TracingPolicy`, you must define _hook points_, which defines on which actions the 
eBPF program executes. 

## Observability

**Context** and **correlation** help the user understand what the kernel is doing in the context of whatever the application is doing.
We have so many events, so we need to correlate a collection of events so they make sense.

_BPF Maps_ pass high-level contex to the kernel and read data back from the kernel. This information helps correlate between different
events. Different BPF programs can share the same map, this enables us to correlate between networking events and file events.

## The Data Problem

_Shows graph from GrafanaLabs about concerns about observability_, which shows the biggest concern is cost, followed by complexity. The core
characteristics of eBPF contribute to the growing cost.

### Tetragon

The tool was initially built as a security tool, but in its core, it is a logger of kernel probes. Tracing Policies are pretty low-level,
more documentation can be found [here](https://tetragon.io/docs/concepts/tracing-policy/) and examples on use cases can be found
[here](https://tetragon.io/docs/use-cases/).

#### Now what?

First, we need to understand why we are using eBPF for observability. Stages of observability:

1. Nothing. Instrumentation is overhead, and it slows us down. This is low maintenance, but causes painful incidents.
2. Auto-instrumentation. Enables some visibility with one command, this allows us to troubleshoot incidents, but is still a low maintenance solution.
3. Maturity. More business-specific instrumentation.

#### Solutions

eBPF can be a drop-in for _cadvisor_ in combination with _kube-prometheus_, which removes the overhead of maintaining those tools. The next step is
to apply some filtering, you can achieve this by adding `selectors.matchArgs` configuration to the _TracingPolicy_ spec. Tetragon can
collect the _userStackTrace_ when a program is segfaulting, so it is possible to filter on only events that include the stack trace.

Very often, traffic is observed by using a Service Mesh. External traffic needs more attention, since this is leaving the cluster (or server whatever), and
this is important for security and cost reasons, especially on SaaS environments. This can be achieved by using the `NotDAddr` operator on the `tcp_sendmsg` kprobe.

And finally, we can reduce the amount of data by aggregation. First, collect the metrics in the instrumentation (e.g. eBPF) and aggregate them before collecting them,
the aggragation can be done based on Kubernetes metadata, for example container id or pod name or namespace.

## Links

- <https://px.dev/>
- <https://grafana.com/oss/beyla-ebpf/>
- <https://tetragon.io/>

