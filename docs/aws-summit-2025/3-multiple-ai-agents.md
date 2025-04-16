# Using multiple agents

## What is a Gen AI Agent?

An agent is an intelligent, independent agent that can achieve a goal. It does so by using LLMs to be
able to reason about the aproach and take action on that.
In order to take those actions, it's often connected to various datasources.

## What are customers asking for?

Customers want to automate high complex workflows. These are hard to automate, since it requires thinking.
The second thing customers want, is to move faster. Everyone is working on AI, _sadly_, but developing
agents takes some amount of time. There's a lot of frameworks available, but they don't really scale well
in production.

That's why Amazon built [Bedrock Agents](https://aws.amazon.com/bedrock/agents/).

## The process

AI agents start small and focused, like "build an agent for HR tasks where employees can ask questions". Then
the knowledge base expands and more capabilities are added to the agent. The challenge with this is that the
code is complicated and the possibility of hallucinations increases. Another problem is that the agent gets confused,
the more tasks you give to an agent, the harder it is to choose the correct tasks. There may be overlap beteen tasks.

Heeeeere comes the microservices train. It's the same thing all over again, split the agent into multiple agents
specifically built for a task.

## Amazon Bedrock Agents

Conversations across agents are built with intent classification to direct a question to the correct "micro" agent.

### Router Pattern

Let's say we have 3 applications in the backend. Put a single agent in front of those. When a question is received,
the prompt is redirected to the dedicated expert agent. The only thing the supervisor does is routing prompts
to dedicated agents. More on <https://aws.amazon.com/bedrock/intelligent-prompt-routing/>. The specialized agents
are doing the heavy lifting, so the supervisor can be handled by a smaller model.

### Supervisor Pattern

When the prompts get too complicated, because of overlap, we need the second pattern. The supervisor is smarter than
a simple router, so this can handle complex questions that span over multiple sub-agents.

## Links

- <https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html>
- <https://docs.aws.amazon.com/bedrock/latest/userguide/agents-how.html>
- <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html>
- <https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/bedrock-agent-runtime.html>
- <https://aws.amazon.com/blogs/machine-learning/creating-asynchronous-ai-agents-with-amazon-bedrock/>
