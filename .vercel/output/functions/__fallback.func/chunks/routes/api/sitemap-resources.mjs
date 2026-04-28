import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue';
import 'consola';
import '@iconify/utils';
import 'node:module';

const sitemapResources = defineEventHandler(async () => {
  const base = "https://oppoxx.pythonanywhere.com";
  try {
    const resources = await $fetch(`${base}/resources`);
    return resources.map((res) => ({
      loc: `/resources/${res.id}`,
      lastmod: res.created_at
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
});

export { sitemapResources as default };
//# sourceMappingURL=sitemap-resources.mjs.map
