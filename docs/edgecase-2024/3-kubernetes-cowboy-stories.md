# Cowboy stories in the CNCF landscape

Brought to you by Fullstaq

_I don't know what's going on. They're wearing cowboy hats. This is too Dutch for me._

## Encryption is fun

Situation: There's a Kubernetes cluster with some Pods that create logs. The logs contains important data,
so these need to be encrypted. A Pod was introduced that could encrypt the log files. Everything worked
well, all files were encrypted in seconds, everyone happy. Some weeks passed and then a Node went down, and
another one, and all of them. Only solution was to recreate the cluster from scratch.

What happened: Test logging was only a couple of MBs, some production logs were 100s of GBs long. The encryption
thing would pull everything in memory and go OOM. The CronJob did not use locking, so a new Pod was started each
minute. Fun fact: team was cut because budgets haha.

Solution: Set memory limits, introduce locking, add monitoring on events.

## The 500 mile email

Situation: The university cannot send an email further than 500 miles. Normally, email does not have geographic restrictions.
While walking back to the office, the sys admin starts sending emails. New York is working, Washington works, Detroit
didn't work. And then a differnt ISP in a local region failed, so the sys admin looked at sendmail config.
Using `telnet`, the admin was greeted by a SunOS banner. Something something sendmail versions didn't match and
differnt options.

Solution: Holy fuck this was a long buildup to configure connection timeouts.

## Feeling hot hot hot

Situation: Air conditioning was on in the office, not the server room.

Solution: I think you can see where this is going.

## Turtles all the way down

Situation: You only need access to a single Kubernetes namespace, but you want to GitOps all the things.
Because you only have a namespace scoped, it's hard to deploy CRDs, since they're cluster wide resources.
So some smartass deployed [vcluster](https://www.vcluster.com/) in their namespace to work around this and,
surprised Pickachu, this will go very wrong shortly.

Solution: Don't

## ML Platform Engineering

_Finally a recent story_

Situation: Engineer built pipelines for everything. If it was in the ML space, there was a pipeline for this.
Then some meetups happened and the engineering department got some ideas. Train the model on a laptop, put it
in production and profit! They make it sound like this is a good thing.

Take away: Don't overongeineer the platform. Make road to poduction easy. Go to production!

_Don't let people push from local to production._

## Message explosion

Situation: Application reads from database and send message to mobile operator. Deploying this was difficult,
since restricted access. So some smartass implemented a feature where you can send a text message with 'START'
to deploy your changes. _How could this possibly go wrong?_ Aaaaand the HTTP request from the mobile operator
would have a timeout of 30s. So when sending the messages, the timeout is reached and a retry is triggered.

Solution: Don't
