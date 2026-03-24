# Kueue for ML Training

## The Problem

[Kueue](https://kueue.sigs.k8s.io/) is a batch job scheduler. Compute is expensive and clusters
need to be at a constant 100% utilization. Large organizations have budgets and financial models to
distribute GPUs to teams. This complex setup leads to engineers asking "Why isn't my job scheduling?".

Scheduling is the assignment of Jobs to Nodes. If resources were unlimited and free, this would be easy.
But accelerators are expensive, so scheduling is hard. The goal is to minimize completion time.

Why is Kueue's problem so hard? Because we have tens of thousands of machines, the machines may change
over time and we don't know when the jobs will finish. To manage this complexity, Kueue leverages a
quota management system. Kueue enforces that admitted jobs use less resources than the total cluster capacity.

Kueue has a queueing system that decides which job should run next when resources are available. When a job
has been waiting for longer, this will get scheduled first.

### Basics

`ResourceFlavor` abstracts hardware differences, for example GPU types. `ClusterQueue` defines quotas and
queues workloads. `Cohorts` represent organizations.

### Guarantee Violation

Doesn't matter which scheduler you're using, engineers will ask why their workload is not scheduling. A guarantee
violation means that a tenant cannot use their guaranteed quota.

Fragmentation is when the total amount of free resources is available to run the workload, but they are
spread across multiple hosts, so the job is not able to run.

## Links

- <https://github.com/kubernetes-sigs/jobset>
