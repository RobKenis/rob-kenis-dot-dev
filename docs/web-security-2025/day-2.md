# Mastering OAuth 2.0 and OIDC

<https://pragmaticwebsecurity.com/>

## OAuth

Original spec was created in 2012, half of it is deprecated. AOuth 2.1 will include
recent best practices: <https://oauth.net/2.1/>. The spec should simplify the 2.0 spec
and will not introduce new features.

When you follow 2.0 best practices, you are 2.1 compliant.

Client applications have no business with access tokens. They should not read it, renew it.
Access tokens are for backend applications to access other APIs.

### OAuth Scopes

Space delimited string in token request: <https://oauth.net/2/scope/>. OIDC has reserved scopes. Custom scopes can be defined.
Client requests a list of scopes, the user may be asked for consent, the STS decides which scopes
are granted, the API is responsible for validating the scopes.

```json
{
    "access_token": "JWT",
    "scope": "list of scopes in the access_token"
}
```

## OIDC

OIDC does authentication. When you start doing API calls, this is OAuth. Who is a user
and what are their details, that's OIDC.

Before OIDC, there was pseudo-authentication using OAuth 2.0, using the access_token we could
_authenticate_ the user and retrieve user information. _This was 10 years ago_. Problem with this is
that providers implement the user information endpoints in different ways. This also isn't real
authentication, it's abusing API access.

Open ID Connect has more than just user information. It also does logouts, user management and
session management.

An identity token consistents of `base64(headers).base64(payload).base64(signature)`. First thing you
do, is to validate the signature. _When doing server-to-server between client and STS over HTTPS,
you can skip this step._ **When you get JWT through the browser, validate the signature!**

```json
{
    "iss": "The issuer of the token (STS)",
    "aud": "Intended user of the token (client)",
    "sub": "Identifier of the user (auth0|id-of-the-user). Unique identifier within STS"
}
```

When the client retrieves both an id_token and an access_token, the access_token can be used to
call the `/userinfo` endpoint. _Libraries often support this by default._

> PKCE is an OAuth thing, not an OIDC thing. OIDC does nonce. Nonce needs to be validated by the client,
> whereas PKCE is validated by the STS. Do PKCE!

### Identity Brokering

Client only depends on the STS, then the STS can do identity federation with downstream providers. Behind
the scenes, this leverages nested OIDC. Clients does OIDC to your STS, your STS does OIDC to _e.g. accounts.google.com_.

Be careful when linking accounts. Usually the user has to log in using both providers in the same session to validate
that the user actually verified both downstreams providers.

### Session re-use

When the request from the STS comes back to the browser, a cookie is set. Next time on login, the cookie
is used to immediately return an authorization code and skip the login phase. This magically enables SSO.
The first client initiates login, sets the cookie on return, the second client has the cookie present and
no longer gets the login prompt.

As long as the client has an active session with the STS, logout does not exist. This is why your application
should implement single logout. You can force re-authentication by setting the _prompt_ parameter when initiating
the login flow: <https://auth0.com/docs/authenticate/login/max-age-reauthentication>. The prompt parameter
supports _none_, _login_, _consent_ and _select_account_. When logging out, the client should notify the STS
to end all sessions. <https://developer.okta.com/docs/guides/single-logout/openidconnect/main/> and
<https://openid.net/specs/openid-connect-backchannel-1_0.html>.

### Offline access

This means that the STS will return refresh tokens to the client. Then the client can request tokens without
user interaction.

## Current best practices

- Use an OIDC provider, don't even think about storing passwords yourself
  - Lots of applications don't need OAuth, they can do just fine with OIDC. Backend maintains authenticated sessions, OIDC is used to initially authenticate the user with the backend. After that, the session is established. Every framework supports authenticated sessions, no misery with storing tokens. _Does not scale very well, but not all appications need to support 3 million users._
- Don't use OIDC implicit and resource owner password flow. Use authorization code and client credentials flow
  - Authorization code for users, client credentials for machine jobs
- Use PKCE to validate that a started flow is finished by the same identity. _PKCE replaces the state parameter_
- Never use the access_token in de frontend, don't decrypt it. We assume that it's a JWT, but there are not guarantees

## Security Token Service Deployment Models

- SaaS like Okta and Auth0
- Self-hosted like Keycloak
- Middleware like IdentityServer

## BFF

Send cookies to BFF, BFF authenticates wit STS, so no tokens are exposed in frontend and no tokens can be accessed by JS.

## Access Tokens

There are self-contained tokens which contain full information and short tokens which contain a reference to the real information.
With the reference token, you can introspect the token and retrieve the list of claims: <https://www.oauth.com/oauth2-servers/token-introspection-endpoint/>.

Spring has built-in support for this: <https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/opaque-token.html>.

The signature in self-contained tokens is created using the private key of the STS. Then the API can use the public
key of the STS to validate that the JWT was signed by the STS.

> Always always always validate the signature of the JWT!

### Which token to use

Reference tokens can be revoked at any time. When revoking the token, the introspection endpoint will immediately return `active: false`.
Self-contained is more performant, since less network requests.

The lifetime of a self-contained access token is until the token expires, there's no way to revoke this earlier.

> Never ever ever cache reference tokens! Only for batch requests, but that's the only exception!

### Best practices

- After retrieving the claims, validate the `iss` claim to verify that the token was actually generated by your STS
  - Yes, even after verifying the signature or calling the introspection endpoint
- Verify the `aud` claim matches the client
- Use scopes to validate in the API that a client may actually do actions
  - After this, validate that the user has the permissions to do things, use the `sub` claim for this
- Do not overload access tokens with API specific information

## Links

- <https://www.rfc-editor.org/rfc/rfc6749.html>
- <https://secappdev.org/>
- <https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow-with-pkce>
- <https://developers.google.com/workspace/guides/configure-oauth-consent>
- <https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/home-realm-discovery-policy>
- <https://www.npmjs.com/package/auth0>
- <https://curity.io/> and <https://docs.duendesoftware.com/bff/>
