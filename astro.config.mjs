import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import meta_tags from './src/config/meta_tags';

export default defineConfig({
	site: meta_tags.app_url,
	integrations: [preact(), tailwind(), sitemap()],
});
