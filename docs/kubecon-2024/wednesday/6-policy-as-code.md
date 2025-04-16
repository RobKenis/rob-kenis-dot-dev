# Policy as Code

> A Game-changer for Stack Security

## What are we solving

Deploying to production is easy. And then the security fixes start to take place.

## Authentication and Authorization

Pick an OIDC provider of the shelf and that's taken care of. After that, the issue about authorization must be solved. OWASP top 10
still contains _Broken Access Control_. Broken authentication has gone down the list, but access control has gained a couple places sadly.

TLDR: Lots of big companies leak data because broken access controls.

## Role Based Access Control

1. User gets role
2. Endpoints checks token if token is present
3. if role then 200 else 403

The issue with RBAC is that is does not provide flexible access management based on resources. This is why we need _attributes_,
now we can provide access based on the role in the token, and properties of the resource that will be accessed. This is known
as Attribute Based Access Control.

## Attribute Based Access Control

Gives more control when handing out permissions based on user or resource attributes. The limitation of this option is that it
does not handle relations. Relationship Based Access Control works based on the relationship that I have to a resource, for example
_owner_ or _viewer_ of a resource, which impacts the actions I can execute on it. GitHub does this with Organizations as owner of a repository.

## Relationship Based Access Control

Best way to interpret this, is using a graph. You have the entity (the user as a node), the resouce (a file as a node) and the relationship (the action on the edge).

## Authorization best practices

- Agnostic to the permission model: RBAC or ABAC or relationships, doesn't matter
- Decouple policy from code
- Support the whole stack: the frontend, backend, database..
- Performance and monitoring features

## Decoupling

- <https://www.openpolicyagent.org/>
- <https://aws.amazon.com/fr/about-aws/whats-new/2023/05/cedar-open-source-language-access-control/>
- <https://openfga.dev/>

The hard thing is that policies need to be versioned. The good thing about this, is that the policy is reviewed and tested.

## Links

- <https://www.permit.io/>
- <https://research.google/pubs/zanzibar-googles-consistent-global-authorization-system/>
- <https://github.com/permitio/opal>
