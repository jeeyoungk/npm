# @jeeyoungk Monorepo

This is a PNPM monorepo for publishing TypeScript packages under the `@jeeyoungk` scope.

## Project Structure

```
.
├── pkgs/
│   ├── chain/                          # Function chaining utilities
│   └── temporal-testing-library/       # Testing utilities for Temporal.io
├── package.json                        # Root workspace configuration
├── tsconfig.json                       # Root TypeScript configuration
├── eslint.config.mjs                   # ESLint configuration
├── .prettierrc                         # Prettier configuration
└── CLAUDE.md                           # This file
```

## Packages

### @jeeyoungk/chain
Utility scripts for chaining functions with a fluent API.

### @jeeyoungk/temporal-testing-library
Testing utilities for Temporal.io workflows and activities.

## Development

### Prerequisites
- Node.js
- PNPM (configured via packageManager field)

### Commands

**Build all packages:**
```bash
pnpm build
```

**Test all packages:**
```bash
pnpm test          # Run tests in watch mode
pnpm test:run      # Run tests once and exit
```

**Lint all packages:**
```bash
pnpm lint          # Check for issues
pnpm lint:fix      # Auto-fix issues
```

**Format all packages:**
```bash
pnpm format        # Format code
pnpm format:check  # Check formatting
```

**Release management:**
```bash
pnpm changeset     # Create changeset
pnpm version       # Version packages
pnpm release       # Publish to registry
```

### Package Development

Each package includes:
- TypeScript with strict configuration
- tsup for modern bundling (CJS + ESM + types)
- Vitest for testing
- ESLint + Prettier for code quality
- Proper package.json exports for Node.js compatibility

### Working on Individual Packages

Navigate to any package directory and use the same commands:
```bash
cd pkgs/chain
pnpm build
pnpm test          # Run tests in watch mode
pnpm test:run      # Run tests once and exit
pnpm lint
pnpm format
```

## Technologies Used

- **PNPM**: Fast, disk space efficient package manager with workspace support
- **TypeScript**: Static type checking
- **tsup**: Zero-config bundler for TypeScript libraries
- **Vitest**: Fast unit testing framework
- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting
- **Changesets**: Version management and changelog generation