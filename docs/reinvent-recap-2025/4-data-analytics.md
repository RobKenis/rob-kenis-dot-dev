# What's new in AI

## Analytics

[Amazon S3 Tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables.html) is a new storage class that stores your data in 
a tabular format using [Apache Iceberg](https://iceberg.apache.org/). This improves query performance and offers 10x more transactions
per second. The thing integrates pretty well with other data services, like Glue and Athena.

[S3 Queryable Object Metadata (preview)](https://aws.amazon.com/blogs/aws/introducing-queryable-object-metadata-for-amazon-s3-buckets-preview/)
stores metadata in Iceberg tables. In that table, all metadata about S3 objects is stored and allows you to easily query the data using for example
Athena.

```shell
spark.sql("SELECT * FROM bucket.aws_s3_metadata.my_first_table")
```

## SageMaker

[The Next Generation of SageMaker](https://aws.amazon.com/blogs/big-data/the-next-generation-of-amazon-sagemaker-the-center-for-all-your-data-analytics-and-ai/)
wants to make SageMaker the center of your data, analytics and AI. The Studio is unified heyooo. [SageMaker Lakehouse](https://aws.amazon.com/sagemaker/lakehouse/)
unifies all your data across S3 and Amazon Redshift. This thing is powered by Glue Data Catalog (I still need to research this thing).

This dude is talking so fast, I can't follow, but he mentions [Glue ETL](https://aws.amazon.com/glue/), so figure that out, seems cool. Also
do some proof of concept with SageMaker Studio, seems easy enough to use.

## Generative AI

[Bedrock Data Automation](https://docs.aws.amazon.com/bedrock/latest/userguide/bda.html) helps developer to process and extract information from unstructured
data. It has some built-in safeguards such as visual grounding with confidence scores. After the data is extracted, the results are stored in S3. There's also
[Bedrock Knowledge Bases](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-create.html), the fully managed service to create RAG applications,
whatever that may be. [More on RAG applications](https://aws.amazon.com/what-is/retrieval-augmented-generation/)

- <https://aws.amazon.com/bedrock/intelligent-prompt-routing/> this goes waaaaay over my head, but have a look
- <https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html>

[Amazon Nova](https://aws.amazon.com/ai/generative-ai/nova/) is the new generation foundation model. This model is built to rank it with the top tier models
available on the market, but at a competitive price.

## Links

- <https://aws.amazon.com/lake-formation/>
- <https://aws.amazon.com/sagemaker/unified-studio/>
- <https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html>
- <https://docs.aws.amazon.com/sagemaker-unified-studio/latest/userguide/working-with-business-catalog.html>
