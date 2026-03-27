# Advanced Kyverno Patterns

[Kyverno](https://kyverno.github.io/kyverno-json/latest/) used declarative YAML with CEL expressions
to validate reousrces. It offers integration with [OpenReports](https://openreports.io/) and runs
natively on Kubernetes, but can be used for more resource types outside of a cluster.

## RBAC

When a team at T Mobile wants to develop a new feature, they spin up a new ephemeral environment.
They have a bunch of shared infra, so how do you onboard ephemeral namespaces? Based on labels on a Namespace,
teams can decide who can access the namespace.

Kyverno will check the labels on the Namespace and create the relevant RoleBindings. Teams can decide **which**
roles are assigned to **who** and GitOps handles the compliance. As an administrator, you have control over the
ClusterRoles that exist in the cluster.

## Closing Infrastructure Gaps

Crossplane offers most of the automation, but not all resources play nicely together. Kyverno can leverage
MutationPolicy resources to mutate Crossplane resources.

## Guardrails and Compliance

Kyverno has the ability to do extensive cloud native reporting. It creates PolicyReports for all resources.
PolicyReporter can expose these metrics to your observabliity stack.

## Links

- <https://kyverno.github.io/policy-reporter/>
- <https://kyverno.io/docs/subprojects/authz/>
- <https://kyverno.github.io/kyverno-json/latest/quick-start/#scan-the-payload>
- <https://www.pulumi.com/docs/iac/guides/continuous-delivery/pulumi-kubernetes-operator/>
