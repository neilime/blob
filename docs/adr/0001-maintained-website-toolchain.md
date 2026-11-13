# Maintained site toolchain

Status: accepted for the migration PR, 2026-11-13.

The site used Next.js 11, React 17 and Material UI 5. Migrate it to the verified
stable Next.js 16, React 19 and Material UI 9 releases on Node.js 26. Keep the
Pages Router and static hosting contract. Use `output: "export"` instead of the
removed `next export` command and Material UI's supported Pages Router cache
integration instead of maintaining custom Emotion extraction code.

Use the current Grid sizing and style APIs and the current React Player media
source API. Contentful reads remain client-side and require only a public
Delivery API token. Tests use synthetic assets and never access a real account.

Shared HoverKraft workflows validate pull requests and the default branch with
SHA-pinned stable actions. Dependabot maintains the site dependencies and
workflows. The Raspberry hardware runtime is outside this frontend migration.

References:

- [Next.js 16 migration](https://nextjs.org/docs/pages/guides/upgrading/version-16)
- [Material UI integration](https://mui.com/material-ui/integrations/nextjs/)
- [Material UI 9 migration](https://mui.com/material-ui/migration/upgrade-to-v9/)
