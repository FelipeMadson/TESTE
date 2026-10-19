# Framework de Micro-Benchmark Determinístico

[![CI](https://github.com/FelipeMadson/TESTE/actions/workflows/ci.yml/badge.svg)](https://github.com/FelipeMadson/TESTE/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Release](https://img.shields.io/badge/release-v1.0.0-green.svg)](https://github.com/FelipeMadson/TESTE/releases)

Framework de micro-benchmarking e análise estatística de latência de alta precisão. Desenvolvido para mensuração de loops assíncronos, rotinas intensivas de CPU e micro-tarefas com descarte de warmup, cálculo de percentis (p50, p95, p99) e desvio padrão.

## Recursos

- **Ciclo de Aquecimento (Warmup)**: Descarta execuções iniciais para neutralizar a latência de compilação JIT do V8.
- **Métricas Estatísticas Completas**: Média, mediana, p95, p99, valores mínimo/máximo e desvio padrão.
- **Suporte Assíncrono Nativo**: Compatibilidade transparente com funções síncronas e Promises.
- **Zero Dependências Externas**: Implementado exclusivamente com recursos nativos do Node.js.

## Autor

Desenvolvido por **[Felipe Madison](https://github.com/FelipeMadson)**.
