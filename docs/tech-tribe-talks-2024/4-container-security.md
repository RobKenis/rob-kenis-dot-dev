# Defeat the chaos in container security

## Why container security is hard

The tools we have at hand are not container focused, they have a broader scope. In some cases, the culture in the company is wrong, 
"including security makes our process slower", is still an (invalid) excuse. The other part is that you have to involve a lot
of folks across different departments.

Long story short, the path from "everything is red" to "everything is enforced" is hard.

## What can we do

Do better marketing, security must go from "this is hard" to "this is fun".

Create awareness, set up some tooling to discover what you have. After you find out what you have and what is vulnerable, try
to find the biggest problems in the chaos, set priorities in the sea of vulnerabilities.

Rules of thumb:
- Start with vulnerabilities that relate to everybody
- Make agreements with third party vendors
- Get everyone on board
- Set priorities, don't make security a side project

_How do we shift left on security?_

## Responsibilities

"I assumed you would take care of this" is not uncommon, define who is responsible for what. Who tests the containers? Who
tests the platform? Who tests the application? _You get the point._ Who defines guidelines like "do we ship containers that
are 90 days old?" to get a clear picture of what is expected of the security teams.

Clear vision is important, because container security brings an extra layer of complexity.

Rules of thumb:
- Where can we pull the code from? Limit the places where you want to pull images from. _Pulling straight from DockerHub should not be accepted_
- What are the rules for acceptable containers? Based on age? Based on CVE levels?
- How do you deal with critial vulnerabilities? How do you deal with third party applications?

## Culture

Security is a responsibility of everyone in the organisation. Make everyone understand what the impact is, explain the "why are we doing this".
Testing the application is not enough, you need to validate the platform that you're deploying on. 
Introduce a DevSecOps process, sit together with all parties involved. Talk to eachother, because the dev people know how the application
works and the ops people want it to be secure. If there's an exception, explain to eachother why it is an exception.

Get everybody involved from the beginning:
- Make your PO put it on the board
- Make PMs put it in their Excel sheets :)
- Do better marketing, make the process easy to understand. Make the process fun, security is not a doom story that never ends.

## The technical part

Find a toolset that makes it easy for developers and ops to find issues. If your tooling is not helping, you're doing something wrong.
_When using a tool, follow the guidelines of the vendor. You're not that special, use the tooling as intended._ 
Start with tools for scanning, your solution gets harder when introducing compliance. Get a container registry and scan images on every push.
This gives confidence that you're in control of your environment.

_Do network policies!_ By default, applications in your stack can talk to eachother. At least, separate applications from other teams.

Do baselining. Some tools will watch your running container for some time and monitor what is happening in the container. When someone
starts a new process in the container, an alert fires because that process should not be there.

Make an SBOM! Make a list of everything that is inside your container, so you at leat know what you're running.

Make policies as code. Put them in a Git repository, this makes the policies immutable and you have a trace on why things
were changed over time.

## The culture and technical part

Create an integration between the tooling and the teams. Notify the teams when something happens.

## Shift left

_Here we go._ When you put a container in a dev environment, make sure it is secure. Running in production is too late, all this stuff
should have appeared earlier in the development pipeline. Get the images in a central registry, scan them, fix the issues, then use the container
that is reasonably safe during development. In theory, you should never have a vulnerable container in acceptance or production, because they
have passed security checks already.

Have one entity that deploys things. GitOps is pretty nice for this, as this is a single thing modifying your platform.

## Conclusion

Security is not a technical problem, it's a culture problem.

## Links

- <https://kyverno.io/>, not included in talk, but this can enforce upstream registries
- <https://aws.amazon.com/what-is/devsecops/>
- <https://www.nist.gov/cyberframework>
- <https://www.stackrox.io/>
- <https://kubernetes.io/docs/concepts/services-networking/network-policies/>
