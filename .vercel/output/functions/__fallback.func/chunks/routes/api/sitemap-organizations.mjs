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

const sitemapOrganizations = defineEventHandler(async () => {
  const base = "https://oppoxx.pythonanywhere.com";
  try {
    const organizations = await $fetch(`${base}/organizations`);
    return organizations.map((org) => ({
      loc: `/organizations/${org.id}`,
      lastmod: org.updated_at || org.created_at
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
});

export { sitemapOrganizations as default };
//# sourceMappingURL=sitemap-organizations.mjs.map
