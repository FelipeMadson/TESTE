
import { performance } from 'node:perf_hooks';
import { BenchmarkOptions, BenchmarkMetrics } from './types.js';

export class MicroBenchmark {
  public static async run(fn: () => void | Promise<void>, options: Partial<BenchmarkOptions> = {}): Promise<BenchmarkMetrics> {
    const iters = options.iterations ?? 100;
    const warmup = options.warmupIterations ?? 10;

    // Warm-up phase
    for (let i = 0; i < warmup; i++) {
      await fn();
    }

    // Measurement phase
    const samples: number[] = [];
    for (let i = 0; i < iters; i++) {
      const t0 = performance.now();
      await fn();
      const t1 = performance.now();
      samples.push(t1 - t0);
    }

    samples.sort((a, b) => a - b);
    const sum = samples.reduce((acc, v) => acc + v, 0);
    const mean = sum / samples.length;
    const variance = samples.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / samples.length;

    const getPercentile = (pct: number) => {
      const idx = Math.min(Math.floor((pct / 100) * samples.length), samples.length - 1);
      return samples[idx];
    };

    return {
      totalRuns: samples.length,
      meanMs: Number(mean.toFixed(4)),
      medianMs: Number(getPercentile(50).toFixed(4)),
      p95Ms: Number(getPercentile(95).toFixed(4)),
      p99Ms: Number(getPercentile(99).toFixed(4)),
      minMs: Number(samples[0].toFixed(4)),
      maxMs: Number(samples[samples.length - 1].toFixed(4)),
      stdDevMs: Number(Math.sqrt(variance).toFixed(4))
    };
  }
}
