# Keynote

CNCF has launched [Zero to Merge](https://project.linuxfoundation.org/cncf-zero-to-merge-application) to help you on your path
to your first PR in open source tooling.

## WebAssembly

Virtual Machines are the OG of cloud computing, kinda slow, kinda powerful. Containers take a couple seconds to start, consume
fewer resources and are the middleweight of cloud computing. WebAssembly is even more lightweight, a WebAssembly application can
be started in half a millisecond. So how do we run [WASM](https://webassembly.org/) in Kubernetes?

Introducing [Spin Operator](https://github.com/spinkube/spin-operator) to run WebAssembly applications in a WASM runtime
instead of a container runtime.

### ZEISS

_They leveraged Spin operator with WASM to reduce costs_. Seems like the opeator does some autoscaling. Advantage of WASM is sick startup times,
so ideal for aggressive scaling.

### Ecosystem

- <https://github.com/containerd/runwasi>
- <https://github.com/KWasm/kwasm-operator>

Instead of picking and configuring separate components to make WebAssembly work on Kubernetes, you can leverage tooling like
[SpinKube](https://www.spinkube.dev/) for an out of the box ecosystem. SpinKube has been submitted to the CNCF. 

## Top End Users

### CERN

They started looking at cloud native a couple years ago. Their challenge has been finding computing resources. They've gone
from building in-house solutions to leveraging more open source tooling. This has led to less infrastructure maintenance, so they
can focus more in scientific computing.

## Sponsored Keynotes

Virtual Machines have existed for a long time, and will exist for much longer. Kubernetes has been running containers for a while
and with [KubeVirt](https://kubevirt.io/), it can run VMs as well.

What makes this work on Kubernetes? ArgoCD for deployments, other operators to keep software up-to-date. The beauty of Kubernetes
is that you can pick your own components. This create flexibility to pick your storage solution, like [Rook](https://rook.io/).

_Deutsche Bahn is making waves yo_

Enough with the jokes, they're making waves to imporove sustainable transport using trains. This is requires technology,
but this comes with an impact. Deutsche Bahn started the green initiative in 2012 to reduce the energy consumption.
They've taken out the guess work regarding resource usage by leveraging [Vertical Pod Autoscaler](https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler).
You can also use _kube-downscaler_, but the project has been abandoned on GitHub and has been moved to a non-standard upstream.
For monitoring energy usage, there's a [Kepler](https://github.com/sustainable-computing-io/kepler).

How does _Scaleway_ optimize their power usage efficiency and water usage efficiency? Basically how do you use the least amount of power
to operate a data center.

Hot take on power usage: `0 server == 0 watt`, so stop running servers that you don't need. Also think about what you actually need regarding
actual base consumption, variable load, extra reseverations "just to be safe", premature growth reservations and redundancy.

## Links

- <https://kubeedge.io/>
- <https://www.scaleway.com/fr/>
