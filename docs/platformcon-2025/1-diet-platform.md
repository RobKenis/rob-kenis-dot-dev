# Putting your platform on a diet

## What's the problem

Platforms start out well, giving the necessary things, called **thinnest viable platform**. Over time,
they evolve with more tools and become problematic. Every new addition can move the platform from helpful
to hindrance.

Where does bloat occur? This can happen in tools, but in processes as well. Both the tools for the developers
and the tools for the platform engineers.

### What are signs of bloat

- Constant support requests to platform team. When the same type of support questions come back, this might be a sign of bloat.
It is either not clear enough, poorly documented or the platform has a large amount of cognitive overhead. This is a sign
that the platform has too many choices and no clear default for your users.

- Slow onboarding fr new engineers. This is a sign that the golden path is not clear or brittle. Maybe the documentation
has grown, but not in a coherent manner. _Is the platform adding more friction or reducing it?_ If you have to clone 3
repositories and install 4 CLI's before committing, this is your sign.

- Teams are bypassing or working around the platform. This is a sign that the platform is seen as slow or outdated. Some
of these reasons may come from a sign of distrust.

- Multiple tools are trying to solve the same problem. The lack of governance and an opinionated default lead to choice
paralysis. The users have too many options and this leads to confusion.

- New feature are not being adopted by teams. This is an indication that the roadmap is not what the teams need. The
dead weight you are accumulating is not worth the effort.

> Platform bloat is not about the amount of code and tooling you accumulate. It's also the amount of friction you create for users.

### Where does it come from

There's a natural evolution of platforms. This is a chain of decisions by different teams across different eras. Ownership
gets lost of time. A good system for recording decisions is important, ADRs can be very helpful.
Another source of bloat is good intentions that never are revisited, consisting of one-off fixes or specific solutions.
Everybody has a desire to make an available and reliable platform, _but do you really need five nines??_ When you build
for things you do not actually need, you end up with over architecting and engineering.
The dilemma of building it yourself or picking something off the shelf still exists. If you set up your own Kubernetes cluster,
there is the option of using cloud provider options or rolling it yourself. This choice adds bloat, _if you pick the wrong
one lol._  You want to focus on the core 80% of the requirements, you don't have to cater for everybody. Unproper roadmap
planning and lack of feedback leads to bloat. A key thing in this is end of life and sunsetting decisions, you don't have
to keep providing extra options forever.

## Tips for keeping the platform lean

- Mindset and vision: learn the platform as a product mindset, know the target audience and boundaries. When requirements come in,
do they align with the vision?
- Planning is important: make sure you have a clear roadmap. Which features are coming up and which features are going away? Don't
build for everybody, maybe 20% of the audience can build their own thing.
- Archictect for evolution: build in a modular fashion, this allows you to swap out components.
- Track your decisions!

## Tips for making the platform clean

- Reduce the support surface: be clear which features you want to support.
- Shift away from DIY solutions to some commodity services: you don't have to write custom logging solutions.

## Links

- <https://en.wikipedia.org/wiki/Wardley_map>
- <https://endoflife.date/>
