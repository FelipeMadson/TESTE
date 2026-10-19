
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { MicroBenchmark } from './benchmark.js';

describe('MicroBenchmark Test Suite', () => {
  test('should measure synchronous workloads with reasonable distribution', async () => {
    const res = await MicroBenchmark.run(() => {
      let x = 0;
      for (let i = 0; i < 5000; i++) x += i;
    }, { iterations: 50, warmupIterations: 5 });

    assert.equal(res.totalRuns, 50);
    assert.ok(res.minMs >= 0);
    assert.ok(res.maxMs >= res.minMs);
    assert.ok(res.medianMs >= res.minMs);
    assert.ok(res.p95Ms >= res.medianMs);
  });

  test('should handle asynchronous microtasks accurately', async () => {
    const res = await MicroBenchmark.run(async () => {
      await Promise.resolve(42);
    }, { iterations: 30, warmupIterations: 5 });

    assert.equal(res.totalRuns, 30);
    assert.ok(res.meanMs >= 0);
  });
});
