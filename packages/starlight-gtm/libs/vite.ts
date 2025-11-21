import type { ViteUserConfig } from "astro";

import type { StarlightGTMConfig } from "..";

export function vitePluginStarlightGTM(config: StarlightGTMConfig): VitePlugin {
	const moduleId = "virtual:starlight-gtm-config";
	const resolvedModuleId = `\0${moduleId}`;
	const moduleContent = `export default ${JSON.stringify(config)}`;

	return {
		name: "vite-plugin-starlight-gtm",
		load(id) {
			return id === resolvedModuleId ? moduleContent : undefined;
		},
		resolveId(id) {
			return id === moduleId ? resolvedModuleId : undefined;
		},
	};
}

type VitePlugin = NonNullable<ViteUserConfig["plugins"]>[number];
