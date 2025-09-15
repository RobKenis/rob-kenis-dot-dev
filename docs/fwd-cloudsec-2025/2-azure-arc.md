# Azure Arc

> From a heartbeat to heart attack

## What is Azure Arc

It's a managed service that helps you connect onprem services to Azure. The installer is present by default
in MS Server 2025. Arc-enabled servers are connected to an Azure tenant using an agent architecture.

It has one portal where you can manage your cloud and onprem resource, so ease of management is a big plus.
When you want to run a script on your connected servers, you can do this through the Azure portal.

When you install the Arc agent, it creates an extra service account on Azure. The ExtensionService installs,
updates and manages extensions and runs as SYSTEM. The Hybrid Instance Metadata Service has 2 ways to communicate,
a REST API and a named pipe. The `azcmagent` CLI can communicate with the HIMDS2 named pipe.

## What's the impact of compromising Arc

When you've just onboarded the machine, the worst thing that can happen is local privilege escalation. When you're
onboarding via GPO, you can do a bit more, but the slide went by too fast.

## How it works

- Send GET request to HIMDS, metadata service responds with metadata
- Send GET access token to HIMDS, service responds with 401
- Send secret file, service send back access tokens

Once you get the access tokens, you can speak with the Azure tenant. The extension service has a heartbeat where
it checks the tenant if extensions need to be managed.

## What if it doesn't work

The extension service does not validate the metadata response, it just blindly accepts it.

When a server requests metadata, and an attacker responds with malicious metadata, the server can be enrolled
on a malicious tenant and install malicous extensions. The extension binaries are signed by Microsoft lol.

_Microsoft wants you to allow a wildcard outbound URL to blob storage, so you can install malicious extensions from
all blob storages lol._

### How was this patched

- Do HTTPS on the HIMDS2 REST API

## Links

- <https://learn.microsoft.com/en-us/azure/azure-arc/overview>
- <https://reversec.com/>
