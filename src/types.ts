
export interface BenchmarkOptions {
  iterations: number;
  warmupIterations: number;
}

export interface BenchmarkMetrics {
  totalRuns: number;
  meanMs: number;
  medianMs: number;
  p95Ms: number;
  p99Ms: number;
  minMs: number;
  maxMs: number;
  stdDevMs: number;
}
