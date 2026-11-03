import { defineConfig } from 'astro/config';
import { deployment } from './src/config/deployment.mjs';
export default defineConfig({ site: deployment.site, base: deployment.base, output: 'static', trailingSlash: 'always' });
