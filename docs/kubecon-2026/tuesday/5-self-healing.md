# Alert Fatigue to Self Healing

## The Promise

Signals -> (Reason) -> Decide -> Reconcile

Today, something happens and a process acts upon it. Now we will add some other step in the middle
that reasons about it. In a bank, we have to think about people's money on one side and AI on the
other side. We have to worry about EU regulators, long story short banking isn't simple.

Manual operations come with a cost, incident response scales poorly and becomes even worse with
third party dependencies. Developers should work on important things and not worry about yet
another incident. Some years ago we had an observability problem, where it was missing. Now we
have too much signals, information about everything that is happening everywhere.

Crossplane 2.0 enabled day 2 operations by default. _I have no clue how Crossplane entered the chat._
Some of the observe and react components go directly in the control plane so people can worry
about more important stuff. With Crossplane you can implement the operation patterns in
an approach that is best fit for the workload.

## Crossplane

[Watch Operations](https://docs.crossplane.io/latest/operations/watchoperation/) can watch Kubernetes resources
with a selector, so you can limit the resources based on labels. The documentation on this is quite clear
that it's an alpha feature and the speaker is throwing some AI at it, so this :sparkles: sparks joy :sparkles:.

## Local Models

Use local LLMs to avoid interaction with third party dependencies and support sovereignty.

## Takeaways

- Start deterministic
- Schema boundaries
- Prefer watch triggers
- Local models
- Prove changes
