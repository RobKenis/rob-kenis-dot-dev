# Upping your resilience game

## The cost of downtime

When Amazon goes down, they lose 220.000 dollars per minute. Apart from money, there's also brand impact and impact on customers.
Apart from external impact, your employees will get upset if they get paged at 4 in the morning on a weekly basis.

## Resilience metrics

SLAs are great, but mostly used after the fact. Chaos engineering focuses on MTTD and MTTR. How long does it take to
**detect** and issue and how long it takes to **resolve** an issue.

## Microservices

When orchestrating a bunch of distributed services, your application landscape should be able to resolve issues without
interference.

## The challenge

There's the technical challenge with how to test on different levels. Then there's the challenge of the uknowns, including
people and processes and the dependency on external vendors.

## Embrace failure

- Application failure is inevitable. Building for 100% uptime is (almost) impossible. Things will fail.
- Architect for failure. Build applications that can recover from failure.
- In case of failure, fail gracefully. Make sure your users do not feel the impact of the failure.

## Chaos Engineering

Site Reliability Engineering and Chaos Engineering work together. It's hard to do chaos engineering without diving
into SRE first. Chaos engineering is the practice of injecting a small dose of problems into the application and the platform
to see where the platform must become stronger.

Do not do random chaos experiments, think about what you want to achieve. Even Netflix does not do chaos engineering wihtout
a clear, written out, scenario.

How to chaos engineer:
- Make a hypothisis. Think about how the application will react.
- Create an experiment in a controlled environment.
- Validate if the hypothisis matches the outcome of the experiment. Was it expected? Was it detected? Was it mitigated?
- Repeat the process.

Rules when chaos engineering:
- Limit the blast radius.
- Limit your magnitude. Start small and increase the size of the experiment.
- Run Chaos Monkey in production to validate. Experiment in lower environments, but use your experiments to validate in production.

## Culture

Embrace chaos engineering in the organisation. Organise game days with everyone that is part of the application, this includes
product owners, developers, infra people and so on. Chaos Engineering is built upon the "what if" mentality.
Hold firedrills, build an experiment to break the platform. See how the organisation reacts when the application is not 
able to resolve the issue on its own. Validate if the people work as expected.

## Links

- <https://sre.google/books/>
- <https://github.com/Netflix/chaosmonkey>
