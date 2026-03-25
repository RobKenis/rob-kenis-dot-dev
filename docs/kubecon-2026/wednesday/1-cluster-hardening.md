# Hardening Your First Cluster

This talk is by some SecOps guy from Palo Alto and some Kubernetes guy from Nutanix, seems interesting.

## Step 1: It works

Junior developer, Dave, builds some internal support tool by Friday. Lil' Dave has a problem, because he has
no clue on how to deploy on Kubernetes and even less of an idea on how to make it secure. `kubectl expose deployment/poc`
is happy and the application is running.

## Step 2: Next Monday Morning

Lil' Dave is happy to go into work and get back to Kubernetes. Except he finds an email from finance on exploding
bills and some security colleague. So what happened over the weekend?

- First rule of network security: don't open ports that you don't need

Note to Dave: Don't expose applications with a service of type `LoadBalancer`.

But how will an attacker move from a single compromised container to taking over the cluster?

- Frist rule of credentials: use least privilege credentials

Secrets in Kubernetes are not encrypted, they're just encoded. Any attacker that can retrieve a service
token to list secret, can read your secrets.

The "make it work" often wins the race against "make it secure" in Kubernetes, because most defaults
aren't very secure.

### Security Fundamentals

Security is a spectrum. You're never going to be 100% secure, you can only make it harder for attackers so they
move on to the next target.

Don't rely on a single strategy, do defense in depth. Layer your defenses so you can stop an attacker once they're in.

1. Limit your attack surface
2. Use least privilege and RBAC
3. Contain workloads and limit impact

## Security Tricks

Set `--anonymous-auth=false` on your api server, otherwise anyone can talk to your control plane. Build your cluster
as private as you can. Use IP allow lists, use a VPN. Patrol the perimeter and scan for vulnerabilities before
components get into your environments.

Set `automountServiceAccountToken: false` to avoid the auto-mounting of service account tokens into Pods.

Don't ever ever ever bind Service Accounts to the ClusterAdmin Role, it just doesn't make sense. Create specific
Service Accounts and Roles for your use case. In the Role, limit the scope to only what the application needs.

Role number 1, never run as `root`:

```yaml
securityContext:
  runAsNonRoot: true
  runAsUser: 1000
  readOnlyRootFilesystem: true
  allowPrivilegeEscalation: false
  capabilities:
    drop: ['ALL']
```

### Daves Security Toolkit

- Build before you ship: <https://trivy.dev/>
- Gate what gets deployed: <https://kyverno.io/> and <https://www.openpolicyagent.org/ecosystem/entry/gatekeeper>
- Watch what happens: <https://falco.org/> and <https://grafana.com/docs/loki/latest/>
- Check the rules: <https://github.com/aquasecurity/kube-bench> and <https://github.com/aquasecurity/kubectl-who-can>

## Takeaways

- Wall 1: defend the perimeter
- Wall 2: defend the endpoint
- Wall 3: defend outbound traffic
- Wall-E
