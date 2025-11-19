// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGTMPlugin from 'starlight-gtm';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Starlight GTM',
			plugins: [starlightGTMPlugin({ gtmId: 'GTM-XXXXXXX' })],
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
