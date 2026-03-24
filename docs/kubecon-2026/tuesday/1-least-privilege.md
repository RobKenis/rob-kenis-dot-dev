# Least Privilege for AI

## A New Challenge

Everyone deploys agents into production and constantly exposes critical data. MCP and A2A standardize
the communcation between agents. How do we apply the usual IAM standards to MCP?

MCP is based upun JSON RPC 2.0 with some key differences. It's a sstateful protocol and has capaibilty
negotiation between the agent and the server. If you want authorization, it's baked into the MCP protocol,
the catch is that you have to implement it yourself. This is also lovely if you have to use third party
MCP servers.

This is where [Kyverno-authz](https://kyverno.io/) comes in. It allows for declarative policies. The new
idea is to make the existing ValidatingPolicy work with agents.

[Agentgateway](https://agentgateway.dev/) is a high performance data-plane written in Rust _lol_. It routes
all traffic like a traditional gateway, it's also an inference gateway. You can use a single API for all LLM
consumption, so it can translate your API calls to Anthropic calls. For this talk, it supports external authorization
like Kyverno.

_Why AI gateway?_ AI communication is close to traditional, but not the same. You're rate limiting on tokens,
not amount of calls for example. _Why can we not use an existing proxy for MCP?_ Traditional proxies are stateless,
and are optimized for short-lived request/response communication.

_I'm skipping a bunch of slop on how to apply manifests using an agent, just use kubectl apply._

Instead of directly letting your Agent (e.g. OpenCode) talk to your MCP server, it must go through
agent gateway. The gateway will authenticate you using and existing IdP. Before executing an action in
the MCP server, agent gateway will validate with Kyverno if the user is actually allowed to do the action.

## Secure MCP Servers

Agentgateway only solves the authorization from client to server, but the agent can still do what it wants.
Kyverno's ValidatingPolicy can be used to validate the calls from the user to the MCP server. Kyverno has
an MCP CEL library to for example validate `ToolCall.name`.

## Links

- <https://kagent.dev/>
- <https://modelcontextprotocol.io/docs/tools/inspector>
