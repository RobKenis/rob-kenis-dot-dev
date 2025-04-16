# OpenTelemetry from the trenches

A song of traces and spans

## Software development

The monolithic part of the application runs on Azure, but still uses all the hard parts. VMs, IIS
and SQL Server. The modern part of the application uses the fun part, App Services and managed Azure stuff.

The delivery team does the application part, the platform engineering team maintains tools for the delivery teams.

## The age of insight

[Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview) is the managed Azure
solution for basic observability. When you're starting off and you want to do observability, it's not a bad choice. If
you're already on a cloud platform, your monitoring data is already on the platform, so the GDPR officer won't make an issue
out of it.

> Picking an Observability Platform is like buying your first house. You won't know what you want from it until you've lived in it.

The point of Observablity is to have a view of the entire landscape, all your tools have to integrate. This was one of the reasons
to go for OpenTelemetry.

## OpenTelemetry

Get a team together, people who know what they're doing, and get them working on the initial implementation. Taking the platform
team along, felt like a natural choice.

Making a company-wide library makes it easier for teams to onboard on the solution. The library ships with the default configuration,
but is open to choices of the team.

Centralizing an OpenTelemetry collector is a great way to simplify configuration. Having a collector allows you to filter on logs based on
namespace. _Aaaaah this is not a technical talk._

## Onboarding

Make a migration guide for teams to onboard onto your platform. Include Pull Requests in the documentation, so the team can exactly copy
the steps you want.

Sit together with early adopters to work out the kinks in the migration guide. Your migration guide is a living document. Put it in a README
or something, don't let it drown in Confluence.

## Learning the Platform

When using a new platform, teams don't know where to look. Learning a new platform is mostly about culture. Promote innovation, promote
learning new things, _also promote breaking things, but we'll get into that_, and people will pick up on new technology because it is
interesting.

## Alerting and Errors

When you are introducing monitors and start setting up alerts. If you set the bar on the amount of errors too high, it's going to constantly
trigger and developers will burn out from the noise. Set the bar low and gradually raise it.

Get teams used to responding to alerts as part of the regular workflow. Alert in the same workflow as you currently use, this helps developers
respond to alerts.

Focus your alerts on outcomes and not errors, or eventually your code will cater to your observability platform. For example, some events get picked
up in the wrong order. Occasionaly, your application will throw errors because the messages are out of order. The event will get resend to the
queue and gets picked up a few minutes later, ordering is fine and everything is happy. Initially you don't think about this behaviour. When introducing
observability, you get notified about the failing messages and this pushes you to handling the problem of out of order events.

Oooor you don't fix the message handling, because requeueing the message will have the same outcome. The solution to this problem depends on the
amount of errors your system is experiencing. Solve the hard parts first and fix this later? Depends a bit on the application and the team.

## Be agile

If you deploy every 3 months, what's the point of immediately seeing alerts? If you see the alert and build a fix, you need to be able to
put it in production. **Be agile!**

## Conclusion

Introducing Observability is not a one shot effort. This is an evolving thing that takes continuous effort. It's also going to cost a lot,
thanks DataDog, but it's going to be worth it in the long run.

Running observability in the cloud is a lot easier than running observability on premises.

## Links

- <https://github.com/serilog/serilog>
- <https://www.datadoghq.com/>
- <https://opentelemetry.io/>
- <https://www.opslevel.com/>, mentioned by Danny
