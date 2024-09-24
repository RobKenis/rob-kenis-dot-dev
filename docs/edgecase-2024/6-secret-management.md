# Secrets Management the soft way

_Ever heard of the singing computer? It's a Dell_ This is going to be great.

Kelsey Hightower wants to do everything the hard way, but to end the day, let's do it the soft way.

## Desire paths

It's a path caused by errosion by humans or animals. These paths are taken because a problem with
the path that is designed. Possible reasons are bad maintenance of the preferred path or just
plain bad design.

## Secrets on k8s

On Kubernetes, everybody knows your secrets. The crucial part of a Kubernetes Secret is that the data
is not encrypted, but base64 encoded. Protip: Don't base64 your password for security. In the
GitOps world, we want to deliver all resources in a single place (the Git repository). You'll have built-in
access control and a history for audit logging.

What you want: consume secrets in a consistent way, keep secrets out of hands of developers, improve dev experience
with those secrets. If the preferred path is difficult, one dev will find an ugly workaround for it.

Possible options: encrypt secrets before delivery with something like [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) or
deliver a reference to the secrets with [External Secrets](https://external-secrets.io/latest/).

_Did you see where the hackers went? Me neither, but they ransomwere._ haha

Protip: you can install Sealed Secrets with existing certificates for encryption. Sooo you don't have to worry about
recreating the cluster, you can still use the existing certificates. Buuut this removes the private key from the cluster,
which can in some opinions be seen as a bad practice.

## Links

- <https://tag-app-delivery.cncf.io/>
- <https://github.com/lianmakesthings/secrets-management-talk>
