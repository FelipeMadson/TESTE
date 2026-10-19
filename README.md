# Deterministic Benchmark Harness

[![CI](https://github.com/FelipeMadson/TESTE/actions/workflows/ci.yml/badge.svg)](https://github.com/FelipeMadson/TESTE/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Release](https://img.shields.io/badge/release-v1.0.0-green.svg)](https://github.com/FelipeMadson/TESTE/releases)

High-precision micro-benchmarking and statistical latency analysis framework. Designed for measuring async loops, CPU-bound operations, and event-loop microtasks with warmup discarding, percentile metrics (p50, p95, p99), and standard deviation.

## Features

- **JIT Warmup Phase**: Configurable warm-up cycles to eliminate initial V8 engine compilation jitter.
- **Percentile Analysis**: Native calculations for median, p95, and p99 latencies.
- **Asynchronous Ready**: Supports synchronous callbacks and async Promises out of the box.
- **Zero Overhead**: Uses high-resolution `performance.now()` with zero external production dependencies.

## Usage

```typescript
import { MicroBenchmark } from 'deterministic-benchmark-harness';

const metrics = await MicroBenchmark.run(async () => {
  await database.fetchUser('id-123');
}, { iterations: 100, warmupIterations: 10 });

console.log(metrics);
```

## Author

Developed by **[Felipe Madison](https://github.com/FelipeMadson)**.
