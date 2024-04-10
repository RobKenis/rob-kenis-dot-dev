# Advanced Serverless

How do you understand how your application is held together?

[AWS Step Functions Workflow Studio](https://docs.aws.amazon.com/step-functions/latest/dg/workflow-studio.html) allows you to visually design your workload.
When you're done configuring, you can export your configuration as IaC.

_This guy really likes his Step Functions._

Using Step Functions also gives a single pane of glass to see how your application is behaving. No more digging through CloudWatch Logs, but you get
an overview of all steps in your workload and if they're good or bad. Each individual step also has the relevant logs.

Based on your use case, you can decide to use [Standard or Express](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html) execution
model. _I just learned that express is way cheaper (but it has some side effects, so use wisely)._

_Why use standard?_ When the workflow takes longer than 5 minutes or if you need to guarantee exactly-once executions.
When you are using a standard workflow, you want to reduce the amount of state transitions. When you are using an express workflow, you want it to run fast.

The _emit and wait_ pattern: do a step in Step Functions, save the TaskToken somewhere, and let the workflow wait until the task has completed. Read the
[documentation](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token).


## Links

- <https://s12d.com/api401>
- <https://aws.amazon.com/blogs/compute/using-amazon-api-gateway-as-a-proxy-for-dynamodb/>
- <https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-intrinsic-functions.html>
