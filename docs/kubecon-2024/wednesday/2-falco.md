# Falco

> A Grand Promade Through Cloud Native Runtime Security

## New in Falco

Since 2024, Falco is a CNCF graduated project.

- Rules Maturity
- Plugins and Integrations
- Performance and Security: Let's say we want to monitor 26M system calls per second. There are 3 Kernel Driver Options: Kernel Module, eBPF and Moder eBPF (CO-RE). The Kernel
Module is the most performant option, but is harder to manage. The eBPF modules work for every kernel and distribution and are easier to manage. Sending events from kernel space to user
space happens through buffers. If any of these buffers is full, the new events are lost forever. For newer drivers, you can share buffers across CPUs. In newer versions of Falco,
there's more precise control over monitored syscalls. Whenever a non-interesting call triggers, the process is immediately ignored. The events are ordered when entering the buffer,
this is currently the most overhead. 
- Detections:
  - Symlink resolution: Falco no longer follows symlinks, but shows the name of the process instead of the symlinked process
  - Improvements on 32-bit compiled programs on 64-bit systems
  - Override: Apply modifications of existing rules. Use same name of existing rule and use `override: {}` options.

### Performance


### Benchmarking

_Search for CNCF sustainabiliity TAG_

### Plugins

New detection for syslog, so you can send logs to Falco and do detection on them. Anomaly detection plugin makes Falco adaptive based on normal activity on the host.
New plugin that provides Kubernetes cluster metadata. Falco talks to the API-server and collects as much metadata as possible like host and container image.

Old fields from Core Falco, like `k8s.pod.name` is still there, new ones are added under `k8smeta.pod.name`.

## Links

- <https://falco.org/>
- <https://github.com/falcosecurity/k8s-metacollector>
