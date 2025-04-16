# Edgecase 2024

## Reflecting on 3 years of change

Hey ho let's go, Gerrit survived the stairs. I promise there's some context to that, but it doesn't matter.
In the last couple years, Kubernetes has moved more to the Edge, to the not so trivial locations. What has improved
over the years? [k3s](https://k3s.io/) made your life a little easier in the hands of Rancher. Next to Sidero catching
up with [Talos](https://www.talos.dev/). But without some extra layers, Kubernetes is not production worthy.

Three years ago, the biggest hurdle with Kubernetes was "why would you bring such complex technology to the edge?".
The technology is already complex, but then the environment is unpredictable. And that feedback is exactly the same today.

Why does it take so long for change? Well, everybody is afraid of change. "Where can I find the logs? How do I restart my application?
Why is my application using the old configuration?" are pretty common questions. And it's not only Kubernetes, this was
years ago with systemd. But now, everybody know how systemd works, it's the standard.

Why does Kubernetes feel complex? I have 3 control plane nodes, 3 worker nodes, simple enough. Aaaand then there's Loki and
Thanos and Prometheus and Grafana and tracing and security and Argo and backups and Velero and storage and aaaaaaaah there's my
platform. Haha jokes, there's no workload yet, so I finally deploy my application. But as you can see, the complexity is in the
platform. Kubernetes is simple, it just deploys containers.

> Kubernetes is not complex, the landscape makes it complex.

### The Edge Case

Let's make Kubernetes on the edge easy, so here's a demo. Running 3 nodes on [OnLogic](https://www.onlogic.com/store/computers/) nodes,
a network switch and a 5G router. It's connected to the internet, because it's connecting to the Omni control plane. Someone can plug
this case into power, it will show up in the control plane and you can start with your `kubectl` commands.

The plan with this thing is to show how easy it is to deploy Kubernetes. Plug it in and you're ready to go.
