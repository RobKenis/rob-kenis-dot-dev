# API Gateway

> API Gateway: Beyond GA

First off, read this: <https://gateway-api.sigs.k8s.io/>

## Gateway API Updates

[1.0](https://kubernetes.io/blog/2023/10/31/gateway-api-ga/) was released a couple months ago. 1.1 will contain some
QoL improvements. Overview of GEPs can be found [here](https://gateway-api.sigs.k8s.io/geps/overview/).

Mutual TLS is being worked on, but the maintainers are stuck on _naming things_.

## Conformance Profiles

The problem is that it's hard to track implementations because there's no tracking mechanism to begin with. Feedback is really
important, so [Conformance Profiles](https://gateway-api.sigs.k8s.io/concepts/conformance/) were introduced.

Each part of the API has extensive test coverage and all implementations are meant to pass all tests in the suite. A profile
is like a group of test suites.

## Links

- <https://docs.cilium.io/en/latest/network/servicemesh/gateway-api/gateway-api/>
- <https://kubernetes.io/blog/2023/11/28/gateway-api-ga/#gwctl-our-new-gateway-api-command-line-tool>
