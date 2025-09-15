# From One to Hundreds

> From One to Hundreds: Reflections on a Decade of Building the Trenches

## Security philosphy

You need to be informed about the required shapes of accounts. Efficient decision making requires a small
amount of shapes. This allows for reusable precedents and deep knowledge on the shape.
Only trust what you can prove. Don't trust that developers will not enable public access on an S3 bucket.

## Reflection

### Tooling

Have declarative inventory of AWS accounts as a single source of truth.

```yaml
accounts:
  a:
    shape: playground
  b:
    shape: secure
  c:
    shape: secure
```

Reflections on CloudFormation: When accounts shapes get more complex, you start running into resource limits
and body size limits. CloudFormation is also hard to move resources between stacks without doing destructive actions.

Unexpected requests will come in, and clickopsing becomes a slippery slope. **When it comes to console clicking, just say no!**

### CICD

Do open sourcing within the company. Everyone can see the code and raise PRs. This empowers collaboration and improves
the relationship with developers. Invest in automated testing!

### Account patterns

Everyone loves DNS! When a new account is created, a new subdomain zone is created in the new account and delegation records
are created in the parent domain. This removes all excuses to not use TLS. By using ACM, this also eliminates expired TLS
certificates.

VPC Endpoint Policies are used to control the perimeter for data exfiltration.

```json
{
    "Effect": "Allow",
    "Principal": "*",
    "Action": "ec:*",
    "Resource": "*",
    "Condition": {
        "StringEquals": {
            "aws:PrincipalAccount": ["123456789012"],
            "aws:ResourceAccount": ["123456789012"]
        }
    }
}
```

### Conclusions

- Declarative inventory has to be the source of truth
- Pick the right amount of account shapes for your organisation
- Pick tooling these shapes into accounts
- Threat this as firs class software development with CI/CD and testing
