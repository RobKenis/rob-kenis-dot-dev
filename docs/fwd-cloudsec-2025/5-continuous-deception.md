# Continuous Integration / Continuous Deception

> Continuous Integration / Continuous Deception: Trying my luck as a malicious maintainer

## The problem

Supply chain attacks are a problem. As a consumer, we care about dependencies that we pull into our product.
We do not care about how the dependency came to be, how the source looks like, how it was built.

## How to protect on GitHub

- Enable release immutability
- Publish immutable actions [Public Preview]

## Learnings

- Attackers leave traces
- You need to automate detection, do SAS checking, monitor what's running in your pipelines
- Help the maintainers, point out security features
- GitHub is helping you, they're pushing for immutable releases, tags, etc..
- Be prepared, you will have a breach one day. Think about how you rotate your secrets and have an action plan

## Links

- <https://github.com/boostsecurityio/poutine>
