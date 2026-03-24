# Keynote

## CNCF Growth

The community is almost at 20M developers, Europe makes up the largest group of contributors.
Read more in this report: <https://www.cncf.io/reports/state-of-cloud-native-development-q1-2026/>.

NVIDIA joins the CNCF as a platinum member. [Agones](https://agones.dev/site/docs/) looks like a fun new
incubating project.

## Reference Architectures

<https://architecture.cncf.io/> is a place to build and share reference architectures.

## NVIDIA

_The future of AI is open and community driven._ Kubernetes started small, as a scheduler for containers. The community
didn't just adopt it, they standardized upon it. Cloud vendors built their platform on top of it. Over time,
Kubernetes became the defacto standard for running mission critical workloads. That's why it keeps invoving
from apps to databases and from schedulers to platforms.

Nvidia has been part of open source, over the last years they have been contributing directly to CNCF projects,
like the [KAI scheduler](https://github.com/kai-scheduler/KAI-Scheduler). Nvidia is contributing the GPU driver
directory to the SIG Node organisation. As part of their commitment, Nvidia is pledging 4M dollars to CNCF projects
over the next 3 years.

## Inference

_How do we scale inference?_ Two thirds of AI compute in 2026 is dedicated to inference, only one third is AI training.
The projection is that inference consumes as much energy as **all** other workloads combined. _This isn't the flex
they think it is._ Agents are superusers of inference, the power consumption in the agentic worlds grows exponentionally.

According to the CNCF survey, over 80 percent of organizations run Kubernetes already. Organizations running AI workloads
do this on top of Kubernetes. The Cloud Native era has to expand into the AI native era by extending their toolstack.

The open model ecosystem is growing rapidly, but this comes with some challenges. <https://docs.vllm.ai/en/latest/> optimizes
a single host, [llm-d](https://llm-d.ai/) optimizes a cluster of vLLMs. LLM serving breaks the model of traditional load
balancers because they were built for stateless workloads. llm-d's inference gateway inspects incoming prompts and sends
them to the GPU that already has a populated KV cache.

## The Evolution of AI

Sepcialized models will post train foundation models on privatized data. They models _can_ be cheaper and more
performant to run than the generalized models.

### ML at Uber

AI and ML have been part of the Uber experience long before they we buzzwords. Dispatch, pricing, matching and
personalization have been in the application since the beginning. What's the challenge? Scale. Uber is live in
10K cities, doing 33M trips per day. The platform has to support over 30M predictions per second. _Michelangelo_
is the ML platform by Uber that drives all of this (_haha_). The first iteration was classic AI, newer generations
use the more recent flavors of Agentic AI.

Ubers has a Kubernetes based control plane, managing a data plane consisting of Spark, PyTorch, TensorFlow and others.
So the only thing the ML developers have to worry about is the machine learning.

## Links

- <https://insights.linuxfoundation.org/>
- <https://github.com/cncf/k8s-ai-conformance>
- <https://gateway-api-inference-extension.sigs.k8s.io/>
