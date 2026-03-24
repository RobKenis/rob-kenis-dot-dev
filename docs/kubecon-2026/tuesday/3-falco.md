# In Falco's Nest

## A Decade of Detection

In 2016, [Falco](https://falco.org/) was donated from Sysdig to CNCF. In 2026, we're celebrating one of
the industry standards of container runtime security. Falco acts like the security camera in a building
to detect security threats in real time. It provides kernel level visibility through either a kernel module
or eBPF, these probes generate events that are sent to the Falco detection engine.

## What's New

Capture recording enables forensic analysis with Falco. You can record your rules, generating an SCAP file,
which can be analyzed with [Stratoshark](https://stratoshark.org/).

The `enter` initiative has been dropped by consolidating all metadata into the `exit` instruction. This reduces
the amount of events process and reduces latency in the kernel instrumentation.

## Falco Operator

The [Falco Operator](https://falco.org/docs/setup/operator/) is production ready since the 0.2.0 releases.
The operator is based on two components: the artifact operator and the main Falco operator. The artifact operator
manages artifacts in a sidecar container and share config files to the main falco containers using emptyDir volumes.

## What's Next

### BPF Iterators

Falco gathers inforamtion on running processes, meaning Falco has to read a bunch of small files. In newer versions
of the Linux kernel, BPF Iterators can be used.

### Multi-thread Support

Currently, Falco has a single-threaded event loop architecture which is simple and fast. The downside is that this
is not optimal for high-core machines. High cores could lead to saturating the single thread loop and lead to missing
events.

### Developer Experience

*Falco LSP* will be available in the VS Code Marketplace to provide syntax highlighting and completion. The language
server is generic, so you can use it in Vim!
