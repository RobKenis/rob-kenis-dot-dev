# Pods without Borders

> Pods Without Borders: Lateral Movement in Azure Kubernetes Service

## Kubernetes Network Policies

Network policies allow you to control traffic flow at the IP address and port level betwwen Pods
and the outside world. The default is pretty open, the default allows ingress and egress between
Namespaces.

## Hiding C2 traffic using cloud CIDR

Lots of Azure CIDR blocks are implicitly trusted. Even when setting a _deny all_ Egress Policy,
requests can be made to Azure blob storage accounts.

## Lessons learned

- Define en enforce enterprise wide policies
- Deny egress by default
- DNS monitoring is hard because of the noise, but very useful
- Netcat is not picked up by monitoring for network scanning, but nmap is
- Zero trust networking: trheat every workload as malicious until proven otherwise

## Links

- <https://www.tigera.io/project-calico/>
- <https://cilium.io/>
