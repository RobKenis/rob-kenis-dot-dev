# Event-Driven Architecture

> Navigating the journey to serverless event-driven architecture

Event-driven arhitectures are becoming more accessible with fully managed services. AWS Lambda provides serverless
runtime for pretty much every language or custom runtime. This can be triggered by lots of services. AWS Step Functions
can orchestrate Lambda Functions. Amazon EventBridge allows you to subscribe to different types of events.

## What are EDA

A producer raises events, some channel passes the messages and the consumer reads the messages. Implementing event-driven architecture
is a journey of highs and lows. The hard parts include lack of standards, decloupling and thinking async.

Events tell a story of everything that has happened. State, a table, represents the current situation.

_Why do we care about events?_ We can build loosely coupled systems, scalability etc. while keeping eye on complexity.

## Where to start

1. Implementation first

Take some services of the shelf, this provides immediate value. And then reality hits, you get more producers, consumers and events,
and this value plateaus. In the beginning, complexity is low, but over time the complexity rises.

_How complexity grows_: The events has a `detail-type: <event-type>` field, the `source: <service.producer>` and the `detail: json<payload>` field.
The producer can start producing events on the channel and the consumers can do thing, _yay_! Now let's add a second event, new detail-type, new detail
format. Without paying attention, implementation details are leaked into the event payload. The barrier to entry is pretty low, so producers
can just start yeeting events on the channel without any boundaries.

When unclear, ubiquous language is used, no one speaks the same language leading to increasing confusion. Aaaand now we have the big ball of mud,
but with events.

> It's developers (mis)understanding, not domain experts' knowledge, that gets released into production.

2. Understand behavior first

Understand the system, collaborate with domain experts, find events in your system and define language to use. Event storming is
a fantastic way to model your architecture into events. We can talk about things before writing a single line of code.

A **Command** represents intent (CreateOrder), **Events** are immutable (OrderCreated), they are facts in your system that cannot be undone.

Service A (Order Service) publishes messages on a queueu. Service B (Fullfillment Service) consumes the messages on a rate that it can handle.
When a fullfillment fails, the error must be handled within the boundary of Service B. [Amazon SQS](https://aws.amazon.com/sqs/) is a serverless
solution for point-to-point messaging.

When the amount of consumers increases, we can use a pub-sub event broker. The producer sends a single event, and the broker is responsible
for sending the event downstream in a reliable way. Rather than pulling messages from a queue, we can now push them to consumers.
[Amazon EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html) is a fully managed pub-sub service. _Beyond
AWS_ with API destinations to integrate with legacy sytems.

## What goes into events

A pitfall is that the consumer needs to communicate back to the producer to request more information. To resolve this, you can
leverage the _Content Enricher Pattern_ to enrich events before they reach their destination. [EventBridge Pipes](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html)
can do transformations while handling events to do exactly that.

Most brokers have limits on the message size they can produce. The _claim check pattern_ will do the following: raise an event, store the payload in S3, and the
consumer can access the payload in S3.

By consuming events as they are, you are a conformist by default. This domain model will get into your own domain. When you're in the same
company, this isn't the end of the world..until you start integrating with third party services. To resolve this, you can use an _anti corruption layer_.
The other way around, you can agree on a schema with your producer so they send the events you expect, this is called _open host service_. When
working with conformist services, it's really really hard to change the structure of your events.

## Operation and Maintenance

Complexity over time: questions that get raised over time include "What events to we have". If you're lucky, you'll find a README somewhere. The next question
is "What is in the payload", followed by "Who is consuming this". Technically producers should not know about consumers, but this does not mean we can skip
governance. Think about standards first, then discoverability and communication.

[CloudEvents](https://cloudevents.io/) recently graduated at CNCF. Wether you're using it or not, you should define some metadata and standards.
Think about your standards, wrap them in an SDK and make it easy to use them.

Events are the same as APIs, but are not treated with the same amount of love. Treat your events as APIs, think about them upfront, not as
an afterthought.

When you raise an event in EventBridge, you can automatically document it in a Schema Registry.

[EventCatalog](https://www.eventcatalog.dev/) is a tool built by the speaker. It's a tool to document your async APIs and events.

## Links

- <https://s12d.com/api303-23>
- <https://aws.amazon.com/blogs/database/dynamodb-streams-use-cases-and-design-patterns/>
- <https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html>
- <https://github.com/ddd-crew/context-mapping>
- <https://www.asyncapi.com/>
