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

### Open Source

Customers are using Open Source models and are distributing them to their own customers. How do we license models so
you don't have to break them open to see how it works? Tools like PyTorch and compilers are Open Source and should stay
that way, would we a shame if we have to switch hardware because a part in the toolchain become closed source.

Hot take from Google: We should make the models and compilers open source. The only way to understand what some models can do, is 
to see people push the models to its boundaries.

What can the open source community do? The models don't run in a vaccuum, so we need to find a way to bring observability, scaling, security
and more into the ML space. The community needs to find patterns that they get with paid services and how to replicate them using
open source tooling. While we're at it, we need to abstract the hardware. Health checking machines and hardware needs to be handled
by cloud native community tooling, I don't want my GPU to magically die in production.

## NVIDIA

Accelerating AI Workloads with GPUs in Kubernetes.

### GPUs on Kubernetes

We still have challenges on resource management and topology-aware scheduling.

Host level components: `nvidia-container-toolkit` and `nvidia-gpu-driver` and K8s components like `k8s-device-plugin`. With these features enabled,
we can assign GPUs to workloads. To ease the deployment, NVIDIA provides a GPU-operator.

There's some techniques to share GPUs between workloads, most of these have been available in Kubernetes for a while, with the exception being Multi-Process Streaming (MPS).
time-slicing allows running multiple workloads on the same GPU, they alternate in time. MPS  works on partitioning, each workloads gets a fraction of the memory and
compute of the GPU. Multi-GPU Instance (MIG) does somewhat the same, but partitioning is hardware-based instead of software-based. Virtual GPU (vGPU) vitualizes the GPU
for sharing, I didn't really get this. CUDA streams is the final option and is the programming option to run multiple workloads on a single GPU from within
the same application.

<https://developer.nvidia.com/blog/improving-gpu-utilization-in-kubernetes>

Dynamic Resource Allocation is an alpha feature since k8s 1.26, it's a way to claim resources in Pods. <https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/>

#### NVIDIA Picasso

Seems like a dope model for computer vision.

To reliably run shared workloads across a shared-GPU cluster, we need to do some things in Kubernetes. There's some open source tooling to 
enhance scheduling, but these don't support GPUs yet.

Scale out clusters need to interconnect thousands of GPUs. To schedule multi-node jobs, you need to be aware of 2 things:

- Optimal placement
- Bin packing nodes

GPU clusters constantly run at peak performance, so component failures are expected. Failures can lead to throttling or failing. We need to detect faulty components.
Enable inband and out-of-band GPU monitoring, combined with [kubernetes/node-problem-detector](https://github.com/kubernetes/node-problem-detector) helps detect GPU failures.

