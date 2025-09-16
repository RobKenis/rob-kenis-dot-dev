# IAM Hero to Console Zero

> How to dispose of your users and get away with it

## The problem

Over half of cloud breaches start with the leak of static credentials.

## The solution

Don't have static credentials.

## The other problem

How do you solve the problem of the security trifecta? `ec:RunInstances`, `iam:PassRole` and `iam:CreatePolicy`, no amount
of right sizing solves this, but it's a legitimate use case.

Be reasonable, this is a progress over permission journey. The journey starts with JIT access, by default you have nothing,
you only request it when you need it. Before even thinking, start with implementing SSO and hardware 2FA everywhere.

A model like this already exists, and it's called `sudo`. Here comes the _sudo for cloud_ story. You can have lots of access,
sometimes. You can start by giving users both _ReadOnly_ and _Admin_ access, but make admin less friendly. Require approvals,
closed Jira tickets, whatever to push users to ReadOnly. Make the duration of the admin role shorter, expire the credentials
after a couple hours. In this flow, there's potential failures, like a broken Jira system.

When implementing this, you will impact everyone on how they do their daily job. When your system is bad, this creates friction
and eliminates trust. Users don't hate you, but they hate when things are done to them. Lead by example, use your own restricted role.
When users find out that your job is easier because you have more permissive roles, this creates friction.

Make friends by helping with the pain. When you create `Deny` policies on certain actions, also alert on it. When a user tries
to create an IAM User in the console, this impacts user experience, so alerting on it, helps you in guiding them.

Build a way out! In the account that hosts the JIT system, you'll need an IAM user to troubleshoot. Create an IAM User with MFA.
Only after that, deploy the `DenyUser` SCP in all accounts.

## Lessons learned

- Don't get in the way of people's jobs
- Helpt them, hurt them, help them
- Use GitOps and OIDC

## Links

- <https://aws.amazon.com/iam/roles-anywhere/>
- <https://cloud.google.com/iam/docs/workload-identity-federation>
- <https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html>
