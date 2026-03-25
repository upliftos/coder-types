# @upliftos/coder-types

Type definitions for [Coder](https://github.com/upliftos/coder) `projects.ts` configuration files. Provides full IntelliSense and type checking in your IDE.

## Install

```bash
pnpm add @upliftos/coder-types@github:upliftos/coder-types
# or
npm install @upliftos/coder-types@github:upliftos/coder-types
```

## Usage

Create a `projects.ts` in your repo root (instead of `projects.json`):

```ts
import { defineConfig } from '@upliftos/coder-types';

export default defineConfig({
  repo: { url: 'https://github.com/your-org/your-repo' },
  projects: {
    myapp: {
      description: 'My application',
      color: [14, 165, 233], // RGB tuple or CSS color string
      platforms: {
        web: { path: 'apps/web', port: 3000, url: 'http://localhost:3000' },
        api: { path: 'apps/api', port: 3001, url: 'http://localhost:3001' },
        mobile: { path: 'apps/mobile', framework: 'flutter' },
      },
      terminals: [
        { label: 'Storybook', cwd: 'apps/web', command: 'pnpm storybook', autoStart: false },
      ],
    },
  },
  defaults: { color: [128, 128, 128] },
});
```

You can also use `import type` if you prefer not to use `defineConfig`:

```ts
import type { ProjectsConfig } from '@upliftos/coder-types';

const config: ProjectsConfig = { /* ... */ };
export default config;
```

## Supported config formats

Coder loads project configuration in this priority order:

1. `projects.ts` — TypeScript with full type checking
2. `projects.json5` — JSON5 (comments, trailing commas)
3. `projects.json` — Standard JSON

## Exports

| Export | Description |
|--------|-------------|
| `ProjectsConfig` | Root config interface (repo, projects, defaults) |
| `ProjectConfig` | Single project definition (description, color, platforms, terminals) |
| `CustomTerminalConfig` | Custom terminal pane (label, cwd, command) |
| `defineConfig()` | Identity helper that provides type checking without `import type` |
