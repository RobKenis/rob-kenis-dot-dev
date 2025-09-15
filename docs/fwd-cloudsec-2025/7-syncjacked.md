# SyncJacked

> SyncJacked - Hijacking Identities Through Entra Connect Synchronization

## What is Entra Connect

Let's say you have a user in AD, Entra Connect will take the relevant information and create the user
in Entra ID.

Entra Connect Matching is a process to match the user in onprem AD to an existing user in the cloud. There's
a soft matching and hard matching flavor. Soft matches on `userPrincipalName` and `proxyAddress`.

A synced user has a linked to onprem, an unsynced user just exists in the cloud without a link.

## The attack

An unsynced user in AD can be synced to an unsynced user in Entra ID with an active privileged role.

_This is a very Microsoft specific talk, and I'll try to stay far away from it._

## The solution

- Disable soft matching
- Enable MFA for role activation

## SyncJacking with hard matching

Hard matching uses a source anchor, called objectID and something with consistency guid. It turns
out you can sync yourself to an already synced user in Entra ID. Defense recommendation is to enable
MFA to login into the accounts.

## Conclusions

I don't know bro, all this Microsoft lingo ain't for me.
