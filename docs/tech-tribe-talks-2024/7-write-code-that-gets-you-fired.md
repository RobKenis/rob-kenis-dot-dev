# How to write code that gets you fired

Taking performance optimization too far

## What is performance

Scope: How fast is your CPU

Better performance leads to better UX and lower costs, if it takes less long, you pay less. When you're writing code
for embedded development (e.g. a keyboard micro controller) resources are limited.

## How to optimize

Know your workload and know your hardware. Try to elimite the amount of work you need to do.

The [1 billion row challenge](https://1brc.dev/) is a challenge to read an input file of 1B rows and does a
bunch of calculations. The goal is to write code that runs as fast as possible.

## Optimizations

_This guy is way too smart. Taking notes and following along is not compatible._

## Links

- <https://en.wikipedia.org/wiki/Single_instruction,_multiple_data>
- <https://docs.oracle.com/en/java/javase/17/docs/api/jdk.incubator.vector/jdk/incubator/vector/Vector.html>
