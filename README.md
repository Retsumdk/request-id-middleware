[![Build](https://github.com/Retsumdk/request-id-middleware/workflows/CI/badge.svg)](https://github.com/Retsumdk/request-id-middleware/actions)
[![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/node.js-20-green?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

# request-id-middleware

[![CI](https://github.com/Retsumdk/request-id-middleware/workflows/CI/badge.svg)](https://github.com/Retsumdk/request-id-middleware/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-brightgreen.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Request ID propagation for distributed tracing. Propagate request IDs across service boundaries for end-to-end traceability.

## Features

- **Request ID Propagation** — Automatically propagate request IDs through HTTP headers
- **Context Isolation** — Keep request-scoped data isolated between concurrent requests
- **Multiple ID Formats** — Support for UUID, custom prefixes, and existing IDs
- **Header Customization** — Configure header names (X-Request-ID, X-Correlation-ID, etc.)
- **TypeScript Native** — Full type safety with TypeScript

## Installation

```bash
npm install request-id-middleware
```

Or build from source:

```bash
git clone https://github.com/Retsumdk/request-id-middleware.git
cd request-id-middleware
bun install
bun run build
```

## Quick Start

```typescript
import { RequestIDMiddleware } from "./src";

const middleware = new RequestIDMiddleware({
  headerName: "X-Request-ID",
  generateIfMissing: true,
});

app.use(middleware.handler());
```

## API

### RequestIDMiddleware

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `headerName` | `string` | `"X-Request-ID"` | HTTP header for request ID |
| `generateIfMissing` | `boolean` | `true` | Generate ID if not provided |
| `idFormat` | `string` | `"uuid"` | ID format: `uuid`, `nanoid`, `ulid` |

## Related Repos

- [distributed-lock-manager](https://github.com/Retsumdk/distributed-lock-manager) — Redis-based distributed locks
- [health-check-monitor](https://github.com/Retsumdk/health-check-monitor) — Distributed health monitoring
- [retry-queue-worker](https://github.com/Retsumdk/retry-queue-worker) — Exponential backoff retry queue

## License

MIT License — see [LICENSE](LICENSE)

---

Built by [Retsumdk](https://github.com/Retsumdk)
