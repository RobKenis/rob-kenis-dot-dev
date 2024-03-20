# Keynote

Okay let's go, welcome to Kubecon 2024!

## Kubernetes is turning 10

For the past 10 years, a lot of big guns like Mercedes-Benz and Disney have been powered by Kubernetes.

## The AI Era

[Slurm](https://slurm.schedmd.com/documentation.html) seems to be the tool of choice to manage AI workloads.
Prototyping generative AI is easy, going to production is a little harder..or maybe a lot harder.

Proprietary solutions are easy to prototype, and a nice walled garden to be stuck in.
The state of FinOps found that 60% of organisations are having a large influx of costs
since the adoption of AI and ML workloads. We try to ship as fast as possible and we do this without
standardization. In the cloudnative field, we saw standardization with the introduction of Open Containers.

In ML we need the same standard to ship workloads and Cloud Native is here to help (?)

## Open Source

[HugginSpace](https://huggingface.co/spaces) is the sandbox environment for HugginFace development.
[LLava](https://llava-vl.github.io/) is a visual learning model, it sees what's in a picture and tells
me what's in it. [Ollama](https://ollama.com/) is a registry for LLMs, look at it as an equivalent to an OCI
registry.

Platform teams push approved models into Ollama and make them available for other teams.

```shell
# Show stored models
ollama list
```
### Demo

Go to <https://github.com/cncf/llm-in-action>

## The landscape

[CNCF AI Whitepaper](http://cncf.io/reports/cloud-native-artificial-intelligence-whitepaper)

## The conversation

Ollama was designed in a way that we already know coming from Kubernetes and Docker. They've worked
to build tooling that works for both developers and ops. 
15 years ago, developing in ML worked, but the landscape for deploying was completely different, no one
was thinking about containers or Docker.

During training of models, contstraints for the workloads differ from resource requirements to latency requirements
and it poses a hard challenge to make this work.

There's 3 workloads: training (with shared resources between developers), inference (which looks like training, but on
smaller resources, and then a workload I missed (finetuning apparently).

What are the scaling constraints? Demand for all sizes will grow, going from edge to multiple nodes. Developers are still
discovering workloads and picking the right sizing and pricing. Meanwhile, chip makers are building hardware which is better
suited for the workload. Contraints are built by use cases: code completion models have to be small and fast, but some larger models
can be slower. This causes the challenge to decide between scaling and efficiency.
