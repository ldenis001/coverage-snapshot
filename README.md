# Coverage Snapshot

A TypeScript starter wired for **GitHub-native test coverage reporting** — no Codecov or other third-party service. Coverage runs on every push and pull request via GitHub Actions, and the results are written to the workflow **job summary** and posted as a **sticky comment on pull requests**.

## Stack

- [Vitest](https://vitest.dev/) for testing
- `@vitest/coverage-v8` for coverage
- [`vitest-coverage-report-action`](https://github.com/davelosert/vitest-coverage-report-action) to render the report in CI

## Local development

```bash
npm install
npm test          # run tests once
npm run coverage  # run tests + generate coverage report (./coverage)
```

Open `coverage/index.html` in a browser for a line-by-line view.

## How CI reporting works

The workflow in `.github/workflows/coverage.yml`:

1. Installs dependencies with `npm install`
2. Runs `npm run coverage`, which produces `coverage/coverage-summary.json` and `coverage/coverage-final.json`
3. The report action reads those files and writes a coverage table to the Actions **job summary**, and on PRs posts/updates a comment with the numbers and any file-level changes

No tokens or external accounts are needed — it uses the default `GITHUB_TOKEN`. The workflow grants it `pull-requests: write` so it can post the PR comment.

## Coverage thresholds

`vitest.config.ts` enforces 80% on lines, functions, branches, and statements. The CI job fails if coverage drops below those numbers. Adjust them as the project grows.
