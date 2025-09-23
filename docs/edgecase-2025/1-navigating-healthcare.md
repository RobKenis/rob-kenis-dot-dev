# Navigating the Healthcare Multiverse

> How Roche United Cloud and Edge with a Platform Engineering Saga

## What is a lab?

When you give a blood sample or anything to analyze, the sample is sent through a pipeline
of machines. The reality in the lab is fragmented, it's not an orchestrated pipeline. Machines have
different form factors, cables are dangling, it doesn't nicely fit together.

### The problem

How can we fix the chaos at the edge? How do we provide reliable computing?

> Diversivied assets are great for your portfolio, not for your finances.

The stack must be easy enough for field service representatives to install them and flexible enough
for developers to make their lives easier.

## The idea

Roche instruments are installed in a lab, Roche ships edge compute infrastructure that can talk to the
lab machines.

### Phase 1 - Assembling the toolkit

You want to manage applications around the world consistently. Back in the days, there was really only a single
solution, Rancher. Here's the challenge: you don't get inbound connectivity to hospitals, you're lucky if you
get decent outbound connectivity.

As an operating system, Roche picked Debian based flavors. It's easy and security, no need to make it more complex.

How do you scale GitOps in this scenario? They used a templating engine based on jinja2 to render configuration per
distribution. They have an entire KubeCon talk about this, but I'm not going deeper into this.

The next challenge is data resilience. How do you make sure you operate while keeping patient data local?

Here comes their 3 tier architecture. Global infrastructure manages regional control planes, regional control
planes manage edge infrastructure.

### The evolution

The first evolution was building a fleet manager. Rancher was not really handling edge behaviour where laptops
are being closed and cables are being disconnected. So Roche started building out an in-house fleet management console.

The single IP address was becoming a bottleneck. To solve this, they leveraged Cilium mTLS tunnel to connect
their edge compute to compute in the cloud. From the location in the cloud, they can connect to anywhere.

As an operating system, they moved to Talos to reduce the bundle size they were shipping to the customers.

## Links

- <https://github.com/danacr/kubernetes-the-fun-way>
- <https://developers.cloudflare.com/reference-architecture/diagrams/network/bring-your-own-ip-space-to-cloudflare/>
- <https://docs.cilium.io/en/latest/network/servicemesh/mutual-authentication/mutual-authentication/>
- <https://github.com/Roche/foxops>
