# Data Platform by Zorg Atlas

> This is a use case talk by a customer (Big Industries)

The project started in 2019 to create an open data (science) platform. No existing infra, and there was
an opportunity to use AWS. In 2020, Covid hit and the scope increased to fighting Covid. January 2021, the
contact tracing platform was introduced.

The data platform required to integrate with different types of sources, like databases and FTP servers. The
platform was built on mostly AWS services, Snowflake and Tableau. [Apache Nifi](https://nifi.apache.org/) helps
you integrate with a lot of sources without writing a bunch of code, it's all UI based. _Put yo hands up for
the clickops gang._ For compute, it's mostly Lambda and ECS containers.

In the beginning of Covid, positive and negative tests results were received from the government. After the
infections came the vaccinations, so things like supply, shipment and stock came into scope. A big part of the
campaign was the vaccination centra, this comes with some funny side effects, e.g. lots of old folks in Knokke
compared to Brussels.

Remember when people started doing covid parties? Yeah, outbreak tracking was pulled into scope. There was already
an outbreak tracking system in place. Some Word, SharePoint and Excel voodoo and it worked perfectly for existing
outbreaks. Didn't really scale well for covid. Some refactoring later and the architecture became Nifi into Snowflake,
AWS Location Service to translate addresses into geopoints to some reports to Tableau.

## Links

- <https://aws.amazon.com/amplify/>
