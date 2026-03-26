# Keynote

## The Cloud Native Feedback Loop

It's the feedback loop of an end user to a project that can be the breakthrough of a new project.
Use [Reference Architectures](https://architecture.cncf.io/) to see what other companies have built.
Projects go from Sandbox, to Incubating to Graduated. Graduated projects are here to stay. The fourth stage,
that we don't really talk about, is Archival. It's important that projects take their lessons learned and
start something new sometimes.

Use [LFX Insights](https://insights.linuxfoundation.org/) to find out more on a project's health score.

## HAProxy

We all assumed that our infrastructure would be simple and easy to manage. The business evolves, so the IT
has to grow with it. You have to innovate to grow within your market.

The proven solutions to connect systems like routers, firewalls and VPNs are not very flexible. On the other hand,
we have the service mesh. The point is to make the application traffic more observable, but only works a bit
in a fractured environment. As an industry, we need to come up with some universal solution to connect anything
together. [Universal Mesh](https://www.haproxy.com/solutions/universal-mesh) wants to connect all existing
solutions in your datacenters.

## Orchestrating Games

Ubisoft wants to use open software to avoid cloud vendor proprietary features. CNCF projects can also evolve
faster than any software anywhere developed in-house. Instead of playing the catchup game with providers,
Ubisoft leverages CNCF.

If players are plaing a game, you cannot shut down the server. [Agones](https://agones.dev/site/) aims to resolve
the issue that this does not really scale well. One of the recent examples, is Rainbow Six Mobile. Diffent
regions, but the infrastructure can adapt to whatever cloud provider is best at the given moment.

## Cloud Native Platforms

There is always one bottleneck that is holding back your platform. That bottleneck should be your most important
issue to solve. But there will always be a bottleneck in the platform.

The biggest bottleneck in platform engineering is growing capabilities. One of the benefits of microservices
is that we unblocked developers to work in parallel. _AI has changed the bottleneck._ There's a bunch
of new features, and we can produce _garbage_ code at a record speed.

Event when using AI, Agents can only move as fast as their platform. Don't bottleneck the AI, give it access
to the cloud. **That's not innovation, that's shadow IT. Platform capabilities are for life.** We need to build
capabilities with long term support in mind.

Vertical scaling in platform engineering would mean adding developers to the team. Great for job security,
bad for everything else. What does horizontal scaling look like? Allow users to work indepedently.
We need a self-service capability creation API so users can both supply and consume capabilities of
the platform.

A decade ago, Heroku defined the <https://12factor.net/>. This framework gives guardrails on how a platform
can define good consumer citizens. The platform still needs to define a good producer citizen.
<https://github.com/Cloud-Native-Platform-Engineering/cnpe-community> is the first iteration of defining
good platform producers.
