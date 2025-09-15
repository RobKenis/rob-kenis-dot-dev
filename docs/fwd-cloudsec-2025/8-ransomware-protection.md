# Ransomware protection with AWS Backup

> Ransomware protection with immutable AWS Backup - it's complicated ...

## The problem

Ransomware attacks are becoming more common in the last few years. All of the organizations we work for
are potential victims.

For digital backups on AWS, there's a couple considerations. The National Archive, the British institute that
has a copy of basically everything, wanted to build a cookiecutter solution for all teams to use.

## Solution

AWS Organizations is a good solution to deploy Backup Plan resources in all accounts, but it expects more resources
like IAM Roles for it to properly work.

AWS Backup has compliance mode to set a Vault lock on backups. Then the backups can only be deleted after the lock
has expired.

AWS acts as a shim around services that already support backups, like RDS. For other services like S3, AWS has
built a custom solution.

## Links

- <https://ransomware.live/>
- <https://aws.amazon.com/backup/>
- <https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html>
- <https://github.com/nationalarchives/terraform-aws-immutable-aws-backup>
