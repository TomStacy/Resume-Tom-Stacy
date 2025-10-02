# ADR-001: Selection of Bun as Package Manager

## Status
Accepted

## Date
2025-10-02

## Context
The project required selection of a package manager to handle dependencies, scripts, and build processes. The decision needed to consider installation speed, runtime performance, disk space efficiency, developer experience, and ecosystem compatibility.

## Decision Drivers
- **Installation Speed**: Fast dependency installation to improve developer productivity
- **Runtime Performance**: Efficient execution of scripts and tooling
- **Disk Space**: Efficient storage of dependencies
- **Developer Experience**: Easy to use with good error messages and documentation
- **Ecosystem Compatibility**: Support for npm packages and existing tooling
- **Future-proofing**: Active development and modern features

## Considered Alternatives

### npm (Node Package Manager)
- **Pros**:
  - Default package manager for Node.js
  - Widest adoption and community support
  - Most compatible with existing tools
  - Well-established and stable
- **Cons**:
  - Slower installation compared to modern alternatives
  - Larger disk space usage due to less efficient caching
  - Slower script execution
  - node_modules can become very large

### Yarn
- **Pros**:
  - Faster than npm (classic)
  - Better caching mechanisms
  - Workspaces support for monorepos
  - Deterministic dependency resolution with lock files
  - Plug'n'Play (PnP) mode for improved performance
- **Cons**:
  - Yarn 1 is in maintenance mode
  - Yarn 2+ (Berry) has breaking changes and adoption friction
  - Still slower than newer alternatives like pnpm and bun
  - Additional tool to install and maintain

### pnpm (Performant npm)
- **Pros**:
  - Significantly faster than npm and yarn
  - Efficient disk space usage with content-addressable storage
  - Strict dependency resolution prevents phantom dependencies
  - Growing adoption and active development
  - Compatible with npm ecosystem
- **Cons**:
  - Smaller community compared to npm and yarn
  - Some edge cases with peer dependencies
  - Learning curve for symlink-based approach
  - Occasional compatibility issues with certain packages

## Decision
We have decided to use **Bun** as the package manager for this project.

## Rationale

### Performance
Bun provides exceptional performance across the board:
- **Installation Speed**: Up to 30x faster than npm and significantly faster than yarn and pnpm
- **Runtime Performance**: Built on JavaScriptCore (Safari's engine), optimized for speed
- **Script Execution**: Near-instant startup times for running scripts

### Disk Efficiency
- Global cache with content-addressable storage reduces disk space usage
- Efficient dependency deduplication
- Binary lockfile for faster reads

### Developer Experience
- Drop-in replacement for npm with familiar commands (`bun install`, `bun run`, etc.)
- Built-in test runner, bundler, and TypeScript support
- Excellent error messages and debugging tools
- Single binary installation - no separate runtime needed

### Modern Tooling
- Native TypeScript support without configuration
- Built-in bundler eliminates need for webpack/rollup in many cases
- Hot module reloading out of the box
- First-class support for modern JavaScript features

### Ecosystem Compatibility
- Compatible with npm packages and package.json
- Works with existing Node.js tooling where needed
- Can use npm scripts without modification
- Supports workspaces for monorepo scenarios

### Future-Proofing
- Active development with frequent releases
- Growing community and adoption
- Built for modern JavaScript development
- Continuous performance improvements

## Consequences

### Positive
- Dramatically faster dependency installation times
- Reduced CI/CD pipeline execution time
- Better developer experience with faster feedback loops
- Simplified tooling with built-in bundler and test runner
- Lower disk space usage across development environments

### Negative
- Smaller community compared to npm/yarn (though growing rapidly)
- Some packages may have compatibility issues (rare but possible)
- Team members need to install Bun on their machines
- Less Stack Overflow answers for specific Bun issues
- Some CI/CD platforms may require custom setup for Bun

### Neutral
- Requires team members to learn Bun-specific commands (though similar to npm)
- May need to maintain compatibility with npm for contributors using different tools
- Lock file format is different from package-lock.json or yarn.lock

## Implementation Notes
- Install Bun globally: `curl -fsSL https://bun.sh/install | bash` (Unix) or `powershell -c "irm bun.sh/install.ps1 | iex"` (Windows)
- Use `bun install` for dependency installation
- Use `bun run` for executing scripts
- The `bun.lock` file should be committed to version control
- For CI/CD, use official Bun Docker images or GitHub Actions

## References
- [Bun Documentation](https://bun.sh/docs)
- [Bun GitHub Repository](https://github.com/oven-sh/bun)
- [Bun Package Manager Benchmarks](https://bun.sh/docs/cli/install)

## Review Date
2026-04-02 (6 months from decision date)
