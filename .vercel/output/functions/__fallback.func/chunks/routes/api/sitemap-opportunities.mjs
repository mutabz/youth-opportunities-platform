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

const sitemapOpportunities = defineEventHandler(async () => {
  const base = "https://oppoxx.pythonanywhere.com";
  try {
    const opportunities = await $fetch(`${base}/opportunities`);
    return opportunities.map((op) => ({
      loc: `/opportunities/${op.category}-data/${op.id}`,
      lastmod: op.last_updated || op.created_at
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
});

export { sitemapOpportunities as default };
//# sourceMappingURL=sitemap-opportunities.mjs.map
