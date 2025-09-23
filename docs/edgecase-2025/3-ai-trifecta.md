# The AI Trifecta

> Securing, Using and Defending with AI

This talk focuses on the security timeline and the AI timeline.

Cloud innovation has outpaced cloud security. CVEs increased by 34% year over year, 41% of the cybersecurity
community is using genAI for threat hunting and threat modeling. Bla bla these numbers seem good, but it's
by sysdig, so be critical. Shadow AI increases the attack surface even further.

Yappa yappa yappa sales pitch.

## Threat model

Assume all the layers of your AI application are compromized. From the prompt, to the context data to
the systems used by AI Agents. Guardrails exist, but they're kind trash.

When defending your AI landscape, take the 3 views into account:

- Secure AI: Feeding sensitive data is the number 1 concern
    - Eliminate shadow AI
    - Control access to the API and the data
    - Implement guardrails
- AI for Security: AI can lower the time investigating an issue. It can be used to correlate data.
- Defend against AIi: Attackers already weaponize AI. Multi-layer runtime detection is key.

_aaaand here comes the sales pitch again._

## Links

- <https://owasp.org/www-project-top-10-for-large-language-model-applications/>
