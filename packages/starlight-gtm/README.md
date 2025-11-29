# Starlight GTM

Starlight plugin to add Google Tag Manager scripts to a Starlight project.

## Getting Started

Add the package to your Starlight project

```sh
pnpm add starlight-gtm
```

Configure your astro.config.mjs

```js
...
import starlightGTMPlugin from "starlight-gtm";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Starlight GTM",
			plugins: [starlightGTMPlugin({ gtmId: "GTM-XXXXXXX" })],
			sidebar: [...]
		}),
	],
});
```

## Contributing

This project is a pnpm monorepo. You need pnpm v10.

Clone the repo locally and run:

```sh
# install dependencies
pnpm i

# starts the development environment
pnpm dev
```
