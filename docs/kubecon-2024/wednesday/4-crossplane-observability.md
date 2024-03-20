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
