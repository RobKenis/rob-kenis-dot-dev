# Workshop - Chainguard

Traditional open source is an insecure foundation for software development. The current
status of CVE management is deeply broken. You pull an upstream image, scan it, and then
filter through 100 CVEs.

> Shift left? More like shift the blame!

## Building Docker images

Don't use single stage docker builds. Multi-stage is better because no build dependencies are
present in the final image. APKO + Melange is the ideal way according to Chainguard.

## Best practices

- Pin by digest, for immutability
- Sign with Sigstore, for provenance and trust
- Build SBOMs, for visibility and compliance
- Enforce in CICD, for shift-left ~blaming~ security
- Use admission policies, for guardrails at runtime (with Gatekeeper/Kyverno)

## Links

- <https://github.com/chainguard-dev/apko>
- <https://images.chainguard.dev/directory/image/wolfi-base/versions>
