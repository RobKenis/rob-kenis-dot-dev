# Cloud Governance

Cloud governance provides guard rails so your developers can innovate safely. It's a set of rules, practices and
reports to help align your process. It's not just technical.

## Best practices

1. Cloud environment: Use accounts as building blocks. AWS accounts are like rooms with specific purposes. It will help
you with not reaching account limits and quotas. It's a natural separation and reduces blast radius in the event of disaster.
A recommended structure is a _security_ OU for logs and security tooling, a _infrastrucuture_ OU for shared infrastrucuture,
and a set of extra OUs for specific use cases like workloads.

2. Enable visibility to track users and risk: Enable centralized logging to a separate environment.

3. Automate account provisioning: Standardize creation of account with for example [Control Tower](https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html).
Make the process self-service, based on for example Jira. [AWS Control Tower Architecture](https://docs.aws.amazon.com/controltower/latest/userguide/architecture.html).

4. Apply principe of least privilege: Restrict access and make sure no workloads are running in the management account, for security reasons.
[This topic is summarized on the IAM best practices page](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html).

5. Use policy-as-code: PaC should be managed in the same way as any other code. This process goes through pull requests and can be validated
by for example [OPA](https://www.openpolicyagent.org/).

Control types:

- _Detective controls_ are important for resources that you already have. Makes sure if they are compliant or not, for some rules there's automatic
remediation.

- _Preventive controls_ disallow actions that violate policies. The status is always compliant.

- _Proactive controls_ block provisioning non-compliant resources. This can be achieved using CloudFormation hooks

6. Align control objectives to security framework: this helps you measure potential gaps in your security. This can be done
through [Security Hub](https://aws.amazon.com/security-hub/). This helps you measure the effectiveness of your controls.

7. Protect security baselines and stop risks: Preventive controls stops your from creating security risks in the first place. This can be done
through Service Control Policices. [Proactive Controls](https://docs.aws.amazon.com/controltower/latest/userguide/proactive-controls.html) stop
security misconfigurations before they happen.

8. Monitor and test control effectiveness: it's a continuous process to validate that security standards and controls are being enforced.
Create unit and integrations tests to validate the behavior of your controls and validate that the tests can try to provision non-compliant resources.

9. Infrastructure as Code: creates a single source of truth for the entire stack. The stack is reproducible.

10. Detect vulnerabilities in code: shifts security to the left and gives earlier feedback to developers. [Amazon CodeWhisperer](https://aws.amazon.com/codewhisperer/)
can scan code.

## Rabobank

Before using an account, some things need to happen first including _vendor risk assessment_ adn integrating the new tool with the existing Rabobank ecosystem.
Security monitoring happens mostly on a platform level using GuardDuty, CloudTrail and Security Hub. Automation is created to provision AWS accounts and
verifies that guard rails are in place.

Application teams want to use a service, so the platform team does the risk assessment and provides a list of allowed service in order
of preference. For allowed services, preventive and recommended controls are put in place.

The platform team provides teams with simple examples for complex scenarios.

### Service Control Policies

Make sure that users only get access to services that are SOC2 compliant and are available in eu-west-1. Every service is denied by default, only
the compliant services are whitelisted.

### Permissions Boundary

This is a policy like any other in IAM, but it makes sure that all your actions stay within the boundary that the platform team defines. This makes
sure that some resources are protected from tampering by the application teams. To make sure that the Permission Boundary is always applied, 
a Permission Boundary must be set on all `iam:CreateRole` actions.

### Corrective Controls

When an EC2 is created in a public subnet, an EventBridge Rule is triggered to invoke a Lambda to terminate the violating EC2 instance.

### Lessons Learned

- Preventive and corrective controls are very effective
- EventBridge and Lambda allow for flexibility

## Links

- <https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake.html>
- <https://aws.amazon.com/blogs/mt/aws-cloudformation-guardrails-protecting-your-stacks-and-ensuring-safer-updates/>
- <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html>
