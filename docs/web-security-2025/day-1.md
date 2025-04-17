# Web Security

## Links

- <https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy>
  - Does not isolate sharing cookies between sites
- <https://owasp.org/>
  - <https://www.owaspbenelux.eu/>
- <https://owasp.org/www-community/Source_Code_Analysis_Tools>

## OWASP

- <https://owasp.org/www-project-top-ten/>
- <https://owasp.org/www-project-application-security-verification-standard/>
- <https://owasp.org/www-project-samm/>
- <https://cheatsheetseries.owasp.org/>

## Threat modeling

What are we building? What can go wrong? What controls exist? Are the controls good enough?

- <https://owasp.org/www-community/Threat_Modeling>

## Takeaways

- Origin != Site
- <https://educatedguesswork.org/posts/web-security-model-intro1/>

## Security Headers

- <https://securityheaders.com/>
- <https://github.com/rfc-st/humble>
- <https://hstspreload.org/>
- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy>
  - <https://www.permissionspolicy.com/>
- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy>
  - **no-referrer** is your friend
- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options>
  - **DENY**  is your friend
  - Use CSP header to set this, XFO header is deprecated
- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy>
- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy>
- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy>

### Deployment methods

- <https://learn.microsoft.com/en-us/azure/application-gateway/rewrite-http-headers-portal>
- <https://nginx.org/en/docs/http/ngx_http_headers_module.html>

## XSS

```html
<img src="x" onerror="alert('Free Coupons!')" />
```

- <https://github.com/cure53/DOMPurify> and <https://github.com/google/safevalues>
- <https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/sandbox>
- <https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API>
  - <https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types>
- <https://auth0.com/blog/cross-site-scripting-xss/>

## Content Security Policy

- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP>

```http
Content-Security-Policy: default-src 'self';
```

- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to>
  - For network errors, use <https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/NEL>

```json
{
    "csp-report": {
    "document-uri": "https://example.com/foo/bar",
    "referrer": "https://www.google.com/",
    "violated-directive": "default-src self",
    "original-policy": "default-src self; report-to csp-endpoint",
    "blocked-uri": "http://evilhackerscripts.com"
    }
}
```

- <https://csp-evaluator.withgoogle.com/>
- <https://csp.withgoogle.com/docs/strict-csp.html>

### Unsecurity of CSP

**object-src** does not respect the **default-src**, so this needs to be set explicitly.
Set `default-src none;` by default!

### Strict CSP

```http
Content-Security-Policy:
Object-src 'none';
base-uri 'none';
script-src 'nonce-r4nd0m' 'strict-dynamic';
```

```html
<script> nonce="nonce-r4nd0m">hello()</script>
```

The nonce must be different on each request, so Server-Side Rendering is required for this.
Use <https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only> for debugging in production.

- <https://addons.mozilla.org/en-US/firefox/addon/content-security-policy-gen/>
- <https://addons.mozilla.org/en-US/firefox/addon/laboratory-by-mozilla/>

## Cookies

- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies>
- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies#define_where_cookies_are_sent>
- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies#block_access_to_your_cookies>
- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite>

```http
# Prefix with __Host, Set Secure and HTTPOnly, force SameSite and low MaxAge
Set-cookie: __Host-SID=12345; Secure; SameSite=strict; Path=/; HTTPOnly; Max-Age=1800
```
