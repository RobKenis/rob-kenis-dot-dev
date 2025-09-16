# AWS Security Changes Project

> Lurking in the (documentation) shadows: Why We Built the AWS Security Changes Project

A little over a year ago, a vulnerability in ALB was exposed to bypass authentication on
AWS Application Load Balancers. ALB offers an authentication feature to offload the authentication
process. You choose your own IDP, the ALB will redirect you to an authentication page with your IDP.
After this happens, the ALB exchanges tokens and the ALB will set an encrypted cookie for the user.

Any ALB instance can sign a token that can be validated by another ALB. Read more on the vulnerability
in the hackernews blogpost.

## AWS Security Changes

The project scrapes the documentation pages every once in a while. Then it normalized the pages into
markdown and compares it to the last known version. After a change is detected, a reasoning LLM turns
this into a change that is published to the project.

## Links

- <https://awssecuritychanges.com/>
- <https://thehackernews.com/2024/08/new-albeast-vulnerability-exposes.html>
- <https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html>
