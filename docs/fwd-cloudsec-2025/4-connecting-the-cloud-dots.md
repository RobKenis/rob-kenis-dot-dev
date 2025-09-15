# Connecting the Cloud Dots

> Connecting the Cloud-Dots: Constructing a Knowledge Layer from Autonomous Attack Simulation

## The problem

Detection in cloud engineering is a mess. There's poor telemetry documention, vage MITRE mapping and
guess work in detection coverage. We know the signals, but it's full of noise.

## The solution?

What if we could run real attacks and map those findings to real telemetry? [Cloudots]() is
a research system for cloud telemetry. It lets you run attacks in a sandbox environment and map the findings
to telemetry.

### How does it work?

1. Objective input: What should the agent do like "exfiltrate data"
2. Privilege enumeration and method selection: Can it create access keys on existing users?
3. Attack graph generation: Which steps will it take to do an attack?
4. Map each method to an API call

The idea of this is that each API call maps to a MITRE technique and the log source where we can detect it.

### Insights from simulations

- Not all attack techniques generate the right telemetry, some attacks are invisible
    - Azure has a bunch of blind spots, even accessing key vaults
- Some events are always noisy
    - `sts:AssumeRole` events trigger constantly in CloudTrail

## The bigger picture

Attackers are using AI, but defenders are still using PDFs.

## Links

- <https://github.com/Brava-Security/cloudots-dsl>
