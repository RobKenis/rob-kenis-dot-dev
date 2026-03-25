# The Pull Request Awakens

> The more you tighten your grip on CICD pipelines, the more developer experience slips through your fingers.

Pipelines are hard to maintain across teams, shared staging environments are not fun. Application
teams want self service, but platform teams need governance. AI makes it easy to open a PR,
but generates a lot of slop.

We need a declarative, PR-driven, GitOps native way of collaborating.

The idea behind <https://github.com/pull-request-wars-fluxcd/flux-appx> is that I can instruct
Flux to deploy it to Kubernetes ephemeral environments without any kind of Kubernetes configuration.
The point of ephemeral environments is that Pull Requests are also ephemeral.

## Workflow

1. Make a PR. GitHub Actions run the standard linters and unit tests
2. GitHub Actions build and push a Docker image
3. Add a label to the PR, e.g. `deploy/flux-preview`
4. Flux `ResourceSetInputProvider` listens for Pull Requests with the desired labels

## Links

- <https://github.com/pull-request-wars-fluxcd/flux-appx>
