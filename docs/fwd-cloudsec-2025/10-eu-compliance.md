# EU Compliance

> EU Compliancy Cloud Framework-ish Smackdown

## The problem

NIS2, DORA, GDPR and cloud will be a pain for security practitioners. EU has its regulations and we're all running on
US hyerscalers. There are 5 or more regulations incoming and more than half of the 27 nation states have missed their
own deadlines on implementing these. There is no standard EU framework to implement these regulations.

### Cloud security needs specific guidance

There are no effective cloud-native security frameworks, despite new cloud related requirements. ISO 27017 is the
cloud addon, which was updated in 2015 when "cloud" meant "virtualization".

## Roadmap

1. Build a cloud provider registry: assess key regulation risks
    - Which provider is approved? For which domain (PII, health, public,..) can it be used?
    - Does it meet our risk requirements?
2. Build a cloud deployment registry: know your data classification
3. Implement the governance hierarchy
    - Cloud Security Maturity Model as a cloud centric framework. How do we organize the major security aspects of our cloud?
    - CSMM + CCM: Map control objectives to compliance. The CCM maps to ISO rules
        - Add control specifications. How do I do this in AWS/Azure/GCP?

## What about sovereign cloud?

We don't have answers right now. AWS is probably closest.

## Conclusion

- Don't use static credentials
- Don't make things public
- Document risk assesments
