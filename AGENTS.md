# Working notes

Project-specific guidance for contributors and coding agents. Treat `package.json`, `vite.config.ts`, and the source tree as the source of truth when these notes and the implementation disagree.

## Project commands

Run commands from the repository root.

| Command                    | Purpose                                                                      |
| -------------------------- | ---------------------------------------------------------------------------- |
| `pnpm dev`                 | Start the Vite+ development server on port `3000`                            |
| `pnpm build`               | Run the configured type-check step, then build the static site with vite-ssg |
| `pnpm preview`             | Preview the production build using Vite+                                     |
| `pnpm check`               | Run the Vite+ check command                                                  |
| `pnpm type-check`          | Run `vue-tsc --build`                                                        |
| `pnpm lint`                | Run Oxlint through Vite+ (`vp lint .`)                                       |
| `pnpm lint:fix`            | Run Oxlint with `--fix` through Vite+                                        |
| `pnpm fmt`                 | Format the project with Oxfmt through Vite+ (`vp fmt .`)                     |
| `pnpm test`                | Run the Vitest suite through Vite+ (`vp test run`)                           |
| `pnpm run add <component>` | Run the shadcn-vue CLI to add a component, for example `pnpm run add button` |
| `pnpm up`                  | Run Taze's major-version update workflow (`taze major -I`)                   |

Use `pnpm run add <component>` for the project's `add` script. Do not use `pnpm add <component>` for this purpose: `pnpm add` is pnpm's dependency-installation command, not the project script.

The project requires Node.js `>=22` and declares `pnpm@12.16.1` as its package manager. Use the declared package-manager version when possible.

## Project conventions

- Pages live in `src/pages/` and are converted into routes by the Vue Router Vite plugin. Follow the existing file-based routing conventions.
- The `@` alias points to `src/`.
- Vue, Vue Router, VueUse, Vue Router auto-imports, and Unhead Vue composables are configured for auto-import. Composables and utilities in the configured `src/composables/` and `src/lib/` directories are also auto-imported. Check generated declarations before adding redundant imports.
- Components in `src/components/` are auto-registered by `unplugin-vue-components`.
- shadcn-vue components are generated into the repository. They are project source: edit them when needed, and review generated changes before running the add command against an already-customized component.
- Use Oxlint for linting and Oxfmt for formatting. ESLint is not part of the current dependency setup; do not add ESLint-specific instructions or assume ESLint rules/plugins are active.

## Validation before committing

Run the checks relevant to the change. For a full project validation, use:

```sh
pnpm type-check
pnpm lint
pnpm fmt
pnpm test
pnpm build
```

Formatting may modify files, so inspect the resulting diff before committing. If you change routing, SSG, or Vite configuration, verify the generated production output as well as the development server.

## Vite+ notes

This project uses Vite+ (`vite-plus`) as its unified frontend toolchain. The project scripts call the local Vite+ CLI (`vp`) for development, preview, checking, linting, formatting, and tests. The production build script also invokes the configured type-check and vite-ssg build commands.

Vite+ has built-in commands as well as commands for running project scripts. When using `vp` directly, distinguish a built-in command such as `vp dev` from a package script; use `vp run <script>` when you specifically need to execute a `package.json` script through Vite+.

Useful diagnostics:

```sh
vp help
vp toolchain
vp why <package>
vp env doctor
```

Vite+ documentation: https://viteplus.dev/guide/
