# What's new in AWS

## Compute

[AWS Nitro](https://aws.amazon.com/ec2/nitro/) is the capability to offload features off to separate PCI cards. Using Nitro, you
are fully isolated from AWS as a hypervisor. There is no shell access on the hypervisor. All these PCI
cards have custom silicon on them. By building upon custom siicon, this drove innovation towards Graviton processors.
This year, AWS released [Graviton 4](https://www.aboutamazon.com/news/aws/graviton4-aws-cloud-computing-chip) wieeeeee, the new
generation is the new best price to performance cpu family. The new generation uses even less energy.

[Trainium2](https://press.aboutamazon.com/2024/12/aws-trainium2-instances-now-generally-available) was also released, this family
is aimed towards AI workloads. Something something petaflops, I don't really speak this language, but it got faster. _Trainium3 is 
coming soon._

## Storage

Amazon S3 holds over 400 trillion objects, which is pretty dope. S3 is often picked as the storage of choice, because it has a great
price to performance ratio, for example by leveraging Intelligent Tiering to pick the right [storage class](https://aws.amazon.com/s3/storage-classes/).

[S3 Tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables.html) is a new bucket type to store tabular data, 
optimized to store data in for example [Parquet](https://parquet.apache.org/). [S3 Metadata](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html).

## Databases

AWS offers a range of databases, ranging from RDS to purpose built databaess like DynamoDB. When asking customers, they want everying. Customers
want a multi-region, high available, zero burden, SQL like database. [Amazon Aurora DSQL](https://aws.amazon.com/rds/aurora/dsql/) fixes all those
things. _Looks like I'm never hosting Postgres myself again yoooo._ Amazon claims to get 4x less latency compared to Google Cloud Spanner, let's see
how this holds up, but pretty bold claim. AWS learned some things when building this, so they also release multi-region strong consistency
on DynamoDB Global Tables.

## Inference

AI has come to the market, and it's not going away, so inference is becoming a building block. [Amazon Bedrock](https://aws.amazon.com/bedrock/)
runs foundational models. This year, AWS improved the service mostly on security, to guarantee that your data is not shared with the model
vendors, you always maintain full control over your data. 

Bedrock offers a broad range of models, but the problem is that these are foundational models. [Bedrock Model Distillation](https://docs.aws.amazon.com/bedrock/latest/userguide/model-distillation.html)
is the new way to make those models more focused on your business.

## Security

[Resource Control Policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html) will allow you from an organisational level
to maintain access to your resources. This is important when building data perimeters around e.g. S3 Buckets. This makes it easier to introduce
compliance on an organisational level.

## Also

- **Power Usage Effectiveness** score was increased, win for sustainability
- In 2024, AWS observed around 570.000 DDoS attacks. Half of the attacks target the application, the other half focuses on infrastructure.

## Links

- <https://aws.amazon.com/blogs/aws/top-announcements-of-aws-reinvent-2024/>
- <https://aws.amazon.com/blogs/aws/amazon-ec2-trn2-instances-and-trn2-ultraservers-for-aiml-training-and-inference-is-now-available/>
- <https://aws.amazon.com/ai/machine-learning/trainium/>
- <https://aws.amazon.com/blogs/aws/introducing-amazon-cloudfront-vpc-origins-enhanced-security-and-streamlined-operations-for-your-applications/>
