# I'll let myself in 

> Kubernetes privilege escalation tactics

## What are we solving

The problem: Kubernetes is complicated, it has a lot of moving parts and a lot of people don't know what half the parts are doing.
The release cycle is kinda wild, so it's not uncommon to be a couple versions behind. Then there's operational requirements like
separation of applications across clusters. So not easy.

## What is offensive security

Try to break into the cluster like a bad actor would. This is a collaborative effort, so preferably not Friday 17h before go live on Monday.
Offensive security and thread modeling are different things. Thread modeling should be part of system design, think about "What's the worst
thing that could happen".

### Penetration testing

Validate the assumption that you think you're secure. It's another form of QA, can be open box with access, or closed box with less access.
This is finding the trade off between finding issues with open access or less issues like the bad actor has in production.

### Purple teaming

Tester does nasty things in the cluster and works together with developers and admins going through the logs. Evaluate team's responses:
 do you notify the attack? what's the plan of attack?

 In a modern cluster, there's not much accessible to the outside.

 ### Common findings

 Mostly a misconfiguration instead of a zero-day (e.g. Kubernetes RBAC). Look into [good practices](https://kubernetes.io/docs/concepts/security/rbac-good-practices/), 
 a common misconfiguration is `secret:Get` vs `secret:List`. If you know the name of a secret, you can mount it in to a Pod and retrieve the value.

 Pro tip: Don't hand out `RBAC *` permissions, it's a shortcut to getting cluster admin permissions.

 TIL: You can create a RoleBinding on a ClusterRole. The Subject will get all the ClusterRole permissions, but only in the current namespace.

 Assigning `*:*` to a policy gives the workload permissions to update labels on the namespace. This is horrible because security tooling relies on
 labels on a namespace.

 ## Post-Compromise Activities

 Hide my tracks: disable auditing, monitoring and logging. When logs are streamed to an external source (by hostname), change the value for that host in `/etc/hosts` to
 something else so the logs go nowhere. Some admin endpoints are not audited by default, for example talking directly to kubelet.

 ## Attacker Eviction

 Can you get rid of an attacker? No, not with any degree of certainty. Unless you can lock down the cluster and everything it touches. Once someone has cluster
 access, they can mend user certificates, access nodes directly, talk directly to etcd. You can create workloads in `/etc/manifests`, or create processes directly
 on the node.

 ### Linux

 <https://attack.mitro.org/tactics/TA0003/> is a good start for fun stuff you can do directly on Linux. _Let's ingore serverless and Windows nodes for a second_.
 Once an attacker has root access to a node, they can put stuff in shared storage and then it's really fun!

 ## What to do

 What would you do once you know an attacker has gained access?

 - You can rebuild all infra. But what if the attacker does the exact same thing?
 - You need to worry about all credentials in the cluster: clouds, databases, external parties..
   - You need to thread model this thing. What if an admin leaves and can still access these credentials?
