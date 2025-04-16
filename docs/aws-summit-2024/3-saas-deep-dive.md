# SaaS Deep Dive

> Inside a scalable, efficient multi-tenant architecture

SaaS customers will not wait for you when you can't scale. They'll leave for a competitor and it's hard to
get them back.

## Dilemma

1. Availability

Multiple tenants on the same application can go down at the same time. We need to be highly available.

2. Cost efficiency

We can overprovision a bit, but money isn't infinite. Business doesn't want to spend money, but wants all the
features.

3. Predictability

We don't know the behavior of customers all the time.

4. Deployment models

Do we have "premium" customers with their own stack or do all customers share underlying infrastructure?

5. Tier experiences

The business wants different experience based on the type of customer.

## Designing for scale

First thing to do, is broaden your view of scale. That's either using bigger instances or using more instances.
What makes SaaS, is owning your contol-plane, this also needs to scale. As your business scales, not only your
core application scales, but also the supporting applications.

On one side, we have a variety of workload profiles like "shared", "specialised" or "dedicated". On the other hand, we
need scaling options based on the profile.

The simplest view of scale is _just give each customer the entire stack and scale individually_. The reality of scale
is _each customer does not always need the entire stack_. Scale starts with understading workload profiles, start by
capturing some usage metrics to understand what the customer is doing.

Compute influences scaling strategies, starting a new EC2 takes some time, which results in a slower user experience.
You can solve this by overprovisioning a bit, if you run all your tenants on a single pool, this is not that bad.
Scaling on Lambda is easier, you don't have to think about a scaling policy, because Lambda will handle it for you.
For scaling containers, AWS has a [reference architecture](https://docs.aws.amazon.com/eks/latest/userguide/eks-architecture.html).

Combining horizontal scaling and _sharding_, you can achieve the scenario of **tenant pods**. Each pod contains a collection
of tenants, this optimizes usage and predictability. The downside is that this brings more complexity. _What happens when
you need to move a tenant to another pod?_

You can use a general instance type for all workloads, or you can choose the right instance type based on workloads.
This also introduces complexity. So is this complexity worth it? Tools like [Karpenter](https://karpenter.sh/) help you
achieve this.

## Links

- <https://karpenter.sh/>
