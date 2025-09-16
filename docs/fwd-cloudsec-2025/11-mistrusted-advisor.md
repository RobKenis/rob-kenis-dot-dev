# Mistrusted Advisor

> When AWS Tooling Leaves Public S3 Buckets Undetected

## AWS Trusted Advisor

It's a governance service that alerts on misconfigurations. For S3, it has a check for public bucket access.
Depending on the AWS support plan, you will get more services and checks.

Trusted Adivsor will show 3 categories: action recommended, investigation recommended and excluded checks.

## The complexity of S3

S3 requires a set of permission configurations. When you deny S3 permissions to Trusted Advisor via a
bucket policy, Trusted Advisor can no longer scan for misconfigurations on the bucket. _This issue
is remediated since July 2025._

## Links

- <https://www.fogsecurity.io/blog/mistrusted-advisor-public-s3-buckets>
