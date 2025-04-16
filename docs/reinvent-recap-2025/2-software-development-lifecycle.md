# Software Development Lifecycle

Resource Control Policies can also control what users from outside your AWS accounts can access.
[Declarative Policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html) help
set guardrails to set policies on an organizational level. Last thing on security, we finally get root access protection to reduce
the burden of managing a user and password and 2FA for member accounts.

When you need root access to member accounts, you can do that using a session from the root managent account. Otherwise, don't use
the root user lol.

## Cognito

The service go reworked, some new pricing and feature tiers. Before reinvent, we had standard and _advanced security_ which was
a tier with some features that you might not need. [New plans](https://aws.amazon.com/cognito/pricing/) include **light, essentials and plus**.
_Let's see if this makes the service more fun to use, but it has passkeys, so looks like it!_

## Security

[Security Incident Response](https://aws.amazon.com/security-incident-response/) gives you a direct line to AWS experts in security assistance.
It will look at the events in Security Hub and run some automation to help you investigate your findings. **You're going to pay
for it, but it's going to be worth it.** [GuardDuty Extended Thread Detection](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html)
gives you some of the features, but for less of the price.

[CloudFront VPC Origins](https://aws.amazon.com/blogs/aws/introducing-amazon-cloudfront-vpc-origins-enhanced-security-and-streamlined-operations-for-your-applications/)
remove the need for public load balancers when hosting behind CloudFront.

### More on CloudFront

- We get gRPC over HTTP/2. gRPC is not really cacheable, but you get on the AWS backbone faster, so lightning speed network is a benefit
- CloudFront Fuctions are have origin support now (we only had client support last year)

## Transfer Family

I just learned that [Tranfer Family Web Apps](https://aws.amazon.com/aws-transfer-family/web-apps/) exist. Not sure why I would want this,
we'll find a use case for this later. But if you want a web app to let your users browse an SFTP server, here you go.

## GitHub Copilot Alternatives

[AWS App Studio](https://aws.amazon.com/appstudio/) does some AI voodoo to help you build applications. _Will this thing finally replace me?
I hope so, but I think not._

[AWS Q Developer](https://aws.amazon.com/q/developer/) used to be called _CodeWhisperer_. It has some new features, it has a free tier and a
pro tier. Let's see how this stacks up compared to the OG Copilot. Q Developer also has the capability to transform between Java versions, like
from 8 to 21.

## More on security

[S3 Data Integrity Protection]([https://aws.amazon.com/blogs/aws/introducing-default-data-integrity-protections-for-new-objects-in-amazon-s3/) does some
things out of the box to verify checksums when using the SDK.

## Deploy

[CloudFormation Timeline View](https://aws.amazon.com/blogs/devops/peek-inside-your-aws-cloudformation-deployments-with-timeline-view/) gives you more insights
on what's taking a long time when deploying resources. It doesn't make CloudFormation faster, but you have a nice thing to look at.

[EKS Auto Mode](https://docs.aws.amazon.com/eks/latest/userguide/automode.html) allows you to turn off your brain and let AWS manage the basic cluster setup.
It ships cluster-autoscaler by default, EKS Auto Mode will take Karpenter a step further. It manages some core add-ons and networking and cycle instances
from time to time. Because it replaces Nodes frequently, you only have to upgrade the control plane to do EKS upgrades since the nodes will follow in a couple days.
_Does this come with CloudFormation support? 20 euros on 'no'._

CloudWatch is still a good default platform. [Database Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Database-Insights.html) looks pretty
sick. [Better Container Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-upgrade-enhanced.html) as well, it will now look at
both a service-level and container-level insights. We also get a zero ETL integration between OpenSearch and CloudWatch Logs, so you could start using OpenSearch Query
Language to find your CloudWatch logs.

## Cost savings

- DynamoDB got cheaper, both for on-demand and global tables
- Graviton4 is the new way to go
- FSx for OpenZFS now has intelligent tiering
- Aurora Serverless scale-to-zero got cheaper
- Free tier in CloudFront has better pricing for WAF-blocked requests

## Cost increases (lol)

- Extended support for ElasticSearch and OpenSearch. I mean...this shit's on you if you run into this..

## Links

- <https://docs.aws.amazon.com/datatransferterminal/latest/userguide/what-is-dtt.html>
- <https://www.oracle.com/cloud/aws/> _click this at your own risk_
