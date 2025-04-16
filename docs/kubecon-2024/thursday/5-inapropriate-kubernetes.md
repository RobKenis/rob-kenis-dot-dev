# Kubernetes for Platforms

> Why Kuberentes is inappropriate for platforms and how to make it better

When you want to build a platform, you need to provide your developers with Objects, which live
in namespaces.

We now have this Object, the next thing we need is Operators that act on this.

Are namespaces really multi-tenant? Your developers interact with the cluster and pass the namespaces.
The real issue starts when you start creating CRDs like cert-manager and you create cluster-wide resources.

The challenge in 2024 is multi-region and multi-cloud, namespaces aren't enough. This brings complexity,
you need to think about consistent config, volumes and so on. You can use ArgoCD and Crossplane to create
more clusters and connect them, and keep some overview using [OpenClusterManager](https://open-cluster-management.io/).

_Technology isn't the problem. In platforms, we have different personas._ The typical ones are platform owner, service
provider and the user. Everyone has partial responsibilty. This gets even more interesting when you want to start
using third party providers, because not all platforms are built the same.

In reality, complexity explodes, it's hard to support, integrate and extend.

Hot take: _Kubernetes was built to run containers. It was never built for platforms._

## Towards a Kubernetes for Platforms

We know our final target, but this time: ambitions are differnt, personas changed. We need a shift in the mindset,
a more grown up approach where we build a town where everyone lives in.

1. The platform owner: Give the user a well defined, flexible platform that is easy to use. It needs to scale horizontally.
2. The Service Provider: You want to offer a service (as controllers). You need to handle requests from users in a consistent,
efficient and safe manner. The set of tools has to work in a single region and in a multi-region setup. What about compute?
Compute is just another API, it can be created with Crossplane, vcluster, KubeVirt or anything that provides compute.
3. The user: As I user, I want to decide where my workloads can run, in which "workspace". It has to be easy to navigate, I
don't want to manage 100 kubeconfigs.

This is not default Kubernetes, we cannot build this platform by just creating more clusters.

## Links

- <https://github.com/kcp-dev/kcp>
