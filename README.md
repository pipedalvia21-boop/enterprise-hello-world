# QPC Enterprise Hello World

Baseline application for QPC Enterprise Architecture project.

## Stack
- Node.js + Express (backend)
- Jest + Supertest (testing)
- ESLint + Prettier (code quality)
- GitHub Actions (CI/CD)

## Setup
```bash
npm install
npm start
```

## Testing
```bash
npm test
```

## Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | / | Hello World |
| GET | /health | Health check |

## CI/CD Workflows

| Workflow | Purpose |
|----------|---------|
| test.yml | Tests + 80% coverage gate |
| code.yml | ESLint + Prettier |
| security.yml | npm audit |
| build.yml | Build verification |
