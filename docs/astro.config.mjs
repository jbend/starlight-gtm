// @ts-check

import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightGTMPlugin from "starlight-gtm";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Starlight GTM",
			plugins: [starlightGTMPlugin({ gtmId: "GTM-XXXXXXX" })],
			// Test that the GTM plugin preserves existing head entries (see built HTML <head>)
			head: [
				{
					tag: "meta",
					attrs: { name: "starlight-gtm-test", content: "project-head-preserved" },
				},
			],
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Getting Started", slug: "guides/getting-started" },
						{ label: "Configuration", slug: "guides/configuration" },
					],
				},
			],
		}),
	],
});
