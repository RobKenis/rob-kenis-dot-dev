# Didn't know AppSync could do that

[AWS AppSync](https://docs.aws.amazon.com/appsync/latest/devguide/what-is-appsync.html) has the classic GraphQL
API, but since last year we also have the [Event API](https://docs.aws.amazon.com/appsync/latest/eventapi/event-api-welcome.html).

## Challenges with REST

The frontend can access the backend through a differnt set of APIs. When using REST APIs, there's no strong standard.
When using APIs from different applications, you have to deal with decentralized data management.

## GraphQL

A GraphQL [Schema](https://graphql.org/learn/schema/) defines the data types and relations. By design, this
acts as a contract and documentation.

```graphql
type Book {
    id: ID! # This is required
    title: String!
    author: String # This is optional
}
```

Use [Subscriptions](https://graphql.org/learn/subscriptions/) to receive a notification when an item in the backend changes.

## AppSync

AWS AppSync is the managed GraphQL and pub/sub service. For datasources, it supports most of the relations and non-relational databases,
a bunch of managed AWS services, HTTP endpoints and more.

### Authentication

Authentication to AppSync can be done through API keys or, even better, through a [Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html) integration.

```graphql
type Mutation {
    @aws_auth(cognito_groups: ["group-1", "group-2"])
    createSomething()
}
```

## AppSync Events

This is used for real-time communication and updates over websockets. Handling websockets yourself is a complex endeavour since it
includes connection management, message fanout and the managing of channels. Maintaining this does not bring value, so ideally
you want to use a managed service.

## Links

- <https://aws.amazon.com/blogs/mobile/connect-aws-bedrock-large-language-models-to-enterprise-knowledge-databases-and-apis/>
