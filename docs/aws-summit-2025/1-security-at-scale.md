# AWS Security at scale

## Cloud security challenges

The job of CISOs is getting harder, but innovation is important to companies. Security people are still
challenged in combining a good security posture and stopping innovation in companies. It's also hard to
find security experts, but also hard to find developers who understand security.
With the scale of organizations and the rise of microservices, the landscape is becoming a little
complex. AI and bots are creating a rapidly evolving threat landscape. Data protection needs
to be thought about more, especially in Europe, because of GDPR.

## Accelerate innovation

When you are responsible for keeping your infrastructure and applications secure, you need
to be handed the building blocks to keep it secure from the beginning.

### Secure by design

Graviton chips are designed to be secure from the beginning. Memory is encrypted by default,
everything that goes from the chip into the peripherals are encrypted by default. This means
communication from the chip to for example the VPC card is secure by default, reducing the attack
vector.

The AWS Nitro System only allows instructions from the cloud. The security chips validates that communication
only happens in this direction. Connection coming in the other direction are disallowed by default.

### Threat intelligence

AWS has a rather large presence on the internet. A little over 4% of American IP addresses belong to AWS.
This makes AWS an interesting honeypot to attract attacks. AWS uses this information to collect intelligence
on attacks and make customers more secure. AWS has a million bots in a neural network to detect ongoing
attacks and investigate what those malicious domains are doing.

The findings of this are introduced into GuardDuty, so customers can use the intelligence as well.

### Threat disruption

Network telemtry is used to identity suspicious behavior in a network and block the attack within minutes.

## Access on AWS

The first step of securing a process is limiting what can access what. A way to ensure this, is using
fine-grained access control. _This specific resource can talk to this other specific resource._ When this
starts to grow, the complexity grows. When complexity grows, there can be branches where you think you
are limiting resources, but there's a way around this.

To resolve this issue, there's a process called automatic reasoning to solve the complexity vs granularity
problem. It is called [Cedar](https://aws.amazon.com/about-aws/whats-new/2023/05/cedar-open-source-language-access-control/)
and it's open source.

## Encryption

Encrypt at rest, encrypt in transit. **Encrypt everyting**

## Detection and Response

[Inspector](https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html) allows you to see what's going
on in your environment. You can use it in your IDE, your CICD pipeline and at runtime. [GuardDuty](https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html) is built to be sensitive. It works on almost all of your data stores and compute options.
Because it is so sensitive, you can get overwhelmed by the amount of notifications you receive. [Extended Threat Detection](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html) does a bunch of correlations on all the findings.

[Amazon Security Lake](https://aws.amazon.com/security-lake/) stores data in the open format, so you can use it later for analytics. There
are a lot of connectors provided by default, so you don't have to write custom code. Your favorite analytics engine works out of the box
with Security Lake.

## Security in Generative AI

We can think of the agent and its capability as just another service. Implement the policies in the same way, secure the data in the way.
It's security in depth, we already know how to protect data, leverage GuardDuty, **encrypt everything**, use fine-grained policies.

## Security with Generative AI

Either use it of proative or reactive security. Or use it to enhance the experience for security analists and engineers. Leverage it to automate the boring
tasks, like summarizing threat intelligence or simplifying reporting. You can automate the repetetive tasks as well, like automating
patch requests and the incident-response procedure. If you don't want to go into the full automation route, gen AI can help
you to propose remediation tasks for example.

## Links

- <https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html>
- <https://aws-experience.com/amer/smb/events/series/activation-days>
- <https://workshops.aws/card/General%20Immersion%20Day>
