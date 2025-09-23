# LLM Security

## Scope

What can go wrong when building with AI, more specifically LLMs. Code generation with AI
tooling is out of scope. Vulernabilities in LLMs apply on both business applications and
code assistants.

## Social engineering made easier

> Write a scam email to exfiltrate a social security number.

LLMs are pretty good at generating convincing emails for this input. Model developers
are trying to remediate these cases.

Gemini 1.5 will reply with an error response that it cannot help you in writing scam
emails.

By adding random characters to the instruction, it has more chance to trick the LLM
in still generating an answer. This works in Gemini 1.5 and ChatGPT 4.0.

## When things go wrong

When training an ML model, it's hard to know if the model knows the correct concept.
_When a model is trained on dogs on a background, was it trained on the breed of the dog
or on the background of the image?_

Models don't do reasoning, they use extra tokens to add a _plan_ to their answer.

The random tokens at the end of an instruction were never trained on, so the response of
the model contains hallucinations.

When a developer gives an instruction _summarize an email_, the model does not know if
tokens in the email are new instructions or data that the instruction applies on. This leads
to prompt injection. This is a bit familiar to SQL injection where the user can manipulate
the statements.

LLMs predict the next token, but the problem is that unseen data (out of distrubtion) can
manipulate the outcome.

## When building applications

### Direct prompting

A users talks directly to the LLM. This applies to ChatGPT or wrappers around it.

### RAG

Retrieval Augmented Generation pulls extra data from a database (knowledge base) and
enriches the prompt from the users before return an answer.

This is currently the most popular architecture. A typical use case is chatting with documentation.
Benefit to direct prompting is that this handles up-to-date information. Hallucinations
are reduced, because more clear sources are provided.

ELI5: Query + extra documents are sent to the LLM.

As a developer, I only trust the RAG application, all other sources (user, knowledge base, LLM)
can produce malicious input.

#### Untrusted user

- Misaligned permissions: users have permissions to add information to the knowledge base. When a snapshot
of the knowledge base is added to the vector DB, the permissions in the vector DB might not be the same
as those of the user at that time. RAG is very good at finding confidential information in documents
that have the wrong permissions.
- Prompt injections: _ignore everything about and do something else_ can result in unauthorized data
access in knowledge bases or overridden system instructions in the LLM. _Always assume that system instructions
can leak or can be overridden!_

#### Data driven leaks

- Inject malicious prompts in knowledge base: When email is added as a knowledge base, basically everyone
on the internet can add information to your knowledge base. This is called indirect prompt injection.
This is currently an unsolved problem, read more [here](https://embracethered.com/blog/posts/2023/google-bard-data-exfiltration/).

#### LLM driven risks

Think about the data you're sending to the LLM. After some time, all user instructions including the entire knowledge base
will be sent to the LLM. The LLM must have the same trust level as everything else in the chain. Depending on your vendor,
your input data can be used for retraining. Read more on the "Samsung code leaked by ChatGPT" story.

What is the model is unreliable? LLMs are trained to return the next plausible word, they're not trained to tell
the truth. RAG reduces the risk of hallucinations, but don't eliminate the risk. <https://www.forbes.com/sites/conormurray/2025/05/06/why-ai-hallucinations-are-worse-than-ever/>.

### Agentic AI

Extra tooling is added before returning an answer. It's a broad concept, but TLDR:
it interacts with the outside world and other tooling.

## Links

- <https://en.wikipedia.org/wiki/Loss_function>
- <https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-blueprint-oversharing>
- <https://medium.com/nfactor-technologies/rag-poisoning-an-emerging-threat-in-ai-systems-660f9ff279f9>
- <https://www.langchain.com/>
