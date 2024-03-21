# Spotify

> How Spotity recreated their entire backend without skipping a beat

Safe to say Spotitfy runs a couple workloads, around 40.000 VMs and 1.5TB egress per second. When there's downtime, somebody
will notice and talk smack on Twitter.

## What does Kubernetes at Spotify look like

_Golden Paths_ define the ideal way to get your application to production. Within Kubernetes, this looks like massive
multi-tenant clusters. The clusters are long-living and are being upgraded. A big part of workloads is on the golden path,
but there's always the outliers.

The Spotify Platform Team cares about 2 things:
- Who uses the platform
- What is their impact to the business

The platform users range from "I don't care about Kubernetes" to "I want to write yaml" to "I want my own cluster".
For folk that want to write operators or have their own clusters, there's not really a solution, the platofrm is really
built for developers who don't care about Kubernetes and just want to use the golden path to production.

Challenge: _Cost vs Reliability_, somewhere in that range is an acceptible number of 9's.

## Why rebuild all clusters

1. Create differentiated clusters: "Compute as the product" vs "Cluster as the product"
2. Keep operational control and stability (like cost)

## How are we going to do it

Everything has to be done live, because the users will not like if Spotify goes down for this. So let's go over the
stages to make this happen.

1. Preparing the architecture

There's a global load balancer in front of all the clusters. Services will need to be moved between clusters. To enable this,
Spotify uses Service Discovery across cluster boundaries. If an API/KIND/Accelerator/Machine type is used, **assume it's used** on 
all clusters. The ecosystem of tooling has to work across cluster boundaries. Deployments need to be cluster agnostic. The monitoring
and logging don't have to know in which cluster they are operating. Infrastructure as Code is not a nice to have, it's a neccessity.

2. Preparing the clusters

_Do you know where your workloads are?_

It's impossible as a platform engineering team to support anything if you don't know what you need to support. You may have seen this
coming, but this is where [BackStage](https://backstage.spotify.com/) comes into play.

3. Preparing the workloads

There's couple things to look at, mostly optimizing component configuration at creation and automated improvements over time. Governance
is managed through [Kyverno](https://kyverno.io/).

4. Preparing your migrations

_Everything is going to break, but workloads cannot_. The takeaway is that the migration has to happen in a safe way. Here's the stages they go through:

- Validation: is it oke to start a migration?
- Pinning the workload: prevent more changes to the workload
- Double deploys: deploy to the old and (multiple) new clusters. This can be expensive at scale, but is super important.
- Traffic shifting: graceful user experience
- Cleanup: remove double deploys
- Unpinning: let developers deploy new changes again

## Links

- <https://engineering.atspotify.com/2023/04/spotifys-shift-to-a-fleet-first-mindset-part-1/>
- <https://engineering.atspotify.com/2023/05/fleet-management-at-spotify-part-2-the-path-to-declarative-infrastructure/>
- <https://engineering.atspotify.com/2023/05/fleet-management-at-spotify-part-3-fleet-wide-refactoring/>
