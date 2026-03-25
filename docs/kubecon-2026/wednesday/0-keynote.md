# Keynote

The theme of the day is digital soveriegnty, so looking forward to no AI today.

## Digital Sovereignty

We must separate the code itself and the deployment of it. Code can be sovereign, but can remain
global commons. Keep global commans, but do sovereign deployments of it.

Teams are looking more into suply chains, understading dependencies, as the date of the
Cyber Resilience Act is approaching.

We need to be careful not to fragment the open source landscape that powers so many companies.
Sovereignty should not mean fragmented code, but shared code commnons in a sovereign deployment.

## CRA Expert Group

The CRA will affect us all, especially in the EU. How will it impact us as developers?

The CRA is a list of ingredients, devices need to list all the software that's on it. They provider
of devices have to report on this and on vulnerabilities of the components. As software developers,
we will learn more on where our software is being used.

_When your hobby project gets added to a product, you have to report for CRA lol._

As a steward, a foundation not a person, you have to do 2 things:

- provide a contact to report security problems
- report security fixes to _something_
- report infrastructure security failures

Use <https://www.bestpractices.dev/en>, if you follow this, you are covered for CRA. Use [reuse](https://reuse.software/)
for all the legal stuff for your tooling. Use automation for making SBOMs.

## Digital Sovereignty by Design

Kubernetes automated containers, not the world around them. Everything from databases, networking, events and identity,
are not managed by Kubernetes. Saxo Bank automated the cluster, not the boundaries. For things outside the cluster,
they introduced blueprints. The developer defines "I speak to this Kafka topic", no specific brokers, no identitief. A single
PR abstracts away all the hard parts.

Sovereignty in practice: you can change your mind about infrastructure without changing your application. It's not where you run,
it's the freedom to change where you run, what you run and how it's connected.

## Keeping Sovereignty on Track

SNCF, the railway provider in France, built their onprem clusters on top of Talos Linux, OpenStack and a bunch of other tools.
For them, sovereignty is the ability to build autonomous solutions.

## Inference and Sovereign AI

How do we scale up AI without surrendering control of the data? The majority of companies sees sovereign AI as a top strategic
priority. How do we bring the scale of Kubernetes to run our AI models?

Scaling AI is not like scaling web applications. Web is small and fast, AI is not. The traditional way of traffic routing
and load balancing is broken for AI. To run gen AI at scale, we cannot rely on yesterday's plumbing, we need a platform
that is fully AI aware.

True sovereignty avoids vendor lock-in. To make the AI factory on Kubernetes a reality, Red Hat has been contributing to vLLM,
llm-d and [KServe](https://kserve.github.io/website/). For AI aware load balancing, they contributed to the Gateway API extension for inference.

_I should read more on [KV Cache](https://huggingface.co/blog/not-lain/kv-caching) to understand how the routing works._ We're moving far beyond
round robin to context aware routing. Sovereignty is about: your AI, your infrastructure, your rules.

[More on AI by Red Hat](https://www.redhat.com/en/blog/sovereign-ai-architecture-scaling-distributed-training-kubeflow-trainer-and-feast-red-hat-openshift-ai)

## European Space Agency

By 2023, [esa](https://www.esa.int/) wants to scale up the number of space missions. They partnered with Canonical to make their deployment
to space hardware flexible. For runtime, their systems rely on Kubernetes, for storage they use Ceph. Onto the clusters, ESA is running Postgres,
Spark, Kubeflow and Kafka to provide insides on the running mission. For ESA, running mature software was critical.

## Links

- <https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act>
- <https://openssf.org/cra/>
- <https://neonephos.org/>
- <https://aregistry.ai/>
- <https://github.com/langchain-ai/agentevals>
