# What's new in Serverless

## Why Serverless

The event-driven aspect drives you to only executing code when it's required instead of constantly running.
This architecture also moves the shared resonsibility a little more to AWS since you only have to manage your code.

## Serverless Databases

Refer to [Databases](./1-introduction.md#databases) in the introduction, it's more things on [Aurora DSQL](https://aws.amazon.com/rds/aurora/dsql/).

[Multi-region Strong Consistency](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/multi-region-strong-consistency-gt.html) is new for
DynamoDB Global Tables. It's uses a _consistency after heartbeat confirmation_ mechanism to make sure that all regions wait for a write action to complete.
This mechanism depends on the time service, so I hope that thing is high available. _haha Werner probably figured that out as well._

## Events

We have [Event Source Mapping for Kafka](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka-configure.html) now. Event Source Mapping is a backend
Lambda service that polls the source and invokes Lambda Functions. And we have [CloudWatch integration](https://aws.amazon.com/blogs/compute/introducing-new-event-source-mapping-esm-metrics-for-aws-lambda/)
as well, let's go boys!

## Platforms

NodeJS 22 is out on Lambda, this brings some ESM x CJS crossover, love it or hate it, but you get the option again to do require based imports. You can also
use TypeScript directly in Lambda, outside the handler. Python 3.13 is also out, whatever features that brings. [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html)
is now available for Python and .NET, _big win but you're still stuck with C#._

**EventBridge** and **StepFunctions** have the opportunity to use private endpoints using VPC Lattice. 18 months ago, the P50 of EventBridge used to be a little over 2
seconds. This has been improved to a P99 of 120ms, so the service is worth considering again for implementations that require fast delivery of messages.

## Links

- <https://aws.amazon.com/vpc/lattice/>
- <https://aws.amazon.com/about-aws/whats-new/2024/11/amazon-cloudwatch-application-signals-runtime-metrics/>
- <https://serverlessland.com/>
