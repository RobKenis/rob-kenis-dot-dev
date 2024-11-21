# How QA and developers should work together

## The problem

A bunch of developers are rapidly developing features. Some QA people are validating the features. The PO 
is standing on the sidelines. Because of a lack of time, we go to production early and everything breaks.

Stakeholders create a feature request with (poor) requirements, and it needs to be done in 2 days.

> Doesn't matter how well the feature works, the user will break it.

## The fist solution

Get an understanding between the developers and the QA folks. Developers want to build features, that
end up on an environment (while introducing bugs). From a developer point of view, QA people create
a sense of job security, while keeping up the feeling of impeding doom.

If you keep running in the same circle of finding and fixing bugs, eventually dev and QA will not cooperate 
anymore.

Step 1: Clear out confusion in requirements, so dev and QA want the same thing.

## The second solution

When you depend on Jira and Confluence notifications, you will get a bunch of e-mails in your Jira and
Confluence inbox. 

_Fun sidenote: Everything on Confluence goes to die._

Before a ticket is picked up, make sure the ticket is discussed. Try to be sociable and talk to your QA
people. At least go over to the other side of the isle and talk about the ticket.

Before: _Build a password check_

After: _Build a password check, here are the acceptance criteria_. When the criteria are not met, the QA team
can walk over to the devs with steps to reproduce. Ideally there's a test environment where you can reproduce
the undefined behaviour. Once the bug can be reproduced, the ticket is now in "bug fixing stage". 

Step 2: Improve communication between developers and QA.

## The last stage

Improve you development process so bugs no longer show up. Properly define your feature requests, so steps
for both developers and QA are clear. This minimizes or eleminates the need for fixing "bugs" that are
actually poorly defined requirements.

Shift-left on QA, include your QA folks when defining tickets. _note to self_. When defining the tickets together,
2 brains have more chances to catch edge cases. Send back badly defined feature requests before taking up
precious development time. _also note to self_

## Conclusion

Make clear requirements. Make acceptance criteria. Talk to eachother.

## Links

- <https://agilemanifesto.org/>
