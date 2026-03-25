# Detect Decide Defend

The issue with Kubernetes security is that it's layered. You have a WAF that flags SQL injections,
an eBPF probe that detects an unexpected process, Kuberentes audit logs show an SA token was used
and AWS CloudTrail is also in the loop.

All these signals on their own could be just noise, but if you connect the dots, you can see the attack.

## What is "Normal"

Every workload has a predictable behaviour. This is not ML magic, but just declarative behavioural detection.
A simple deviation from the normal is not an incident, it's just not normal.

## Cloud Application Detect & Response

CADR is a cross-layer correlation between existing open signals. Don't invent new signals, connect the
ones you already have. Insteaf of having 4 events where you don't really know what happened, you have
one event that explains an attack.

### ApplicationProfile

The `ApplicationProfile` is the behavioural contract, it captures the baseline behaviour of the application,
which processes it uses, which network calls it performs, which files it touches.

### RemOps

Declarative Remediation has been on the horizon for years, but SREs have been scared of false positives. RemOps
uses Kubernetes native constructs like automatic rollbacks of a Deployment, a rollback of a NetworkPolicy, restrict
a Pod using a SeccompProfile.

First isolate the Pod, then rotate credentials, then rollback the application to the last known good state.

## Links

- <https://kubescape.io/>
- <https://kubernetes.io/docs/tutorials/security/seccomp/>
- <https://inspektor-gadget.io/>
