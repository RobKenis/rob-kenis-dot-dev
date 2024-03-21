# Crossplane Observability and Traceability

> Crossplane observabilty and traceabilty for effective multi-cloud management

## What are we solving

Since the cloud, you can order resources on AWS: networking, storage, servers. You get individual components, and you assemble them
all together into something meaningful. _Developers have the expectation to get a ready-to-go solution instead of individual parts._

## Crossplane

[Crossplane](https://www.crossplane.io/) can assemble individual components into something meaningful called _composition_.

###  Setup

1. Create a Kubernetes cluster
2. `helm install crossplane` I guess (?)

### Create resources

- Apply a manifest based on a _composition_: <https://docs.crossplane.io/latest/concepts/claims/>
  - In this example, we are using a `ClusterClaim` which sets up a EKS cluster
- `crossplane trace <resource>` shows whatever is happening to the resources in the composition
- `kubectl apply -f sql-claim.yaml`, which is based on a `SQLClaim` CRD. _That's a lot of abstraction yo_
- `kubectl apply -f app-claim.yaml`, which is based on `Appclaim`
  - _What is the benefit of this instead of managing the application with Argo directly?_

#### The problem

During the deployment, the developers are blind. People need to be able to create resources **and** observe resources.

## Trust the platform

Be fully transparant to developers on what is happening on the platform. Give developers insights in the platform and do the same
for their applications, so they are confident in their application.

Long story short, the complexity of applications is going up and only a small fraction is properly instrumented.

### Observability

Around 40% of companies have identified observabilty as key focus for their applications.

What is observability? Goes beyond classic monitoring, in the past (and present) we can expect known uknowns really well with alerts and dashboards.
Observability builds on this to identity unknown unknowns.

_Here comes the sponsored bit on big-brand-observability-saas-provider_

How does Crossplane help with observability? When defining a composition, include a block to configure options for your observability platform.
In this case, this is _saas-provider_, but can be whatever you have or selfhost.

Seems like Crossplane also exports metrics, so you can visualize these as well. Metrics seem familiar to ArgoCD metrics.

## Questions

- Why does Crossplane use Terraform under the hood?
  - A: It does not use Terraform by default, but you can use the [terraform-provider](https://github.com/upbound/provider-terraform)
- Is the takeaway to add observability in the compositions so the developers don't have to do it?

## Links 

- <https://github.com/ddosify/ddosify>
