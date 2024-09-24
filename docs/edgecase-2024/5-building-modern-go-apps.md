# Building modern Go apps in Kubernetes

> What once started as a Flask application and a Vue frontend, now looks like the CNCF landscape page.

Bro built an entire environment in Kubernetes, made it super complex and is now doing a demo about it. 
The environment is hard to recreate locally in Docker Compose, so we'll use a couple tools to
plug into the live environment so it looks local.

We'll also dive into Jetbrains AI (should behave similarly to GitHub Copilot).

Gen AI is really good a couple things, for example generating a list in json or an OpenAPI spec. For
repetative tasks it's a great idea, when you don't know what you're doing, not so much.

With JetBrains AI, there's _Create Unit Tests_ action based on a text selection in your production
code, which seems pretty neat. Not sure if Copilot can do this.

Bro did some Skaffold things and port forwarded the Delve service, and now we can attach
a remote debugger in GoLand. _Not a lot of context was given, so I'm trying my best to make sense of this._

## Links

- <https://skaffold.dev/>
- <https://mirrord.dev/>
- <https://github.com/air-verse/air>
- <https://github.com/go-delve/delve>
- <https://github.com/helmfile/helmfile>
