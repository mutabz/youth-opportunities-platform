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

const sitemapStatic = defineEventHandler(() => {
  const pages = [
    "/",
    "/opportunities",
    "/resources",
    "/mentors",
    "/support",
    "/legal",
    "/join-free",
    "/for-partners"
  ];
  return pages.map((page) => ({
    loc: page
  }));
});

export { sitemapStatic as default };
//# sourceMappingURL=sitemap-static.mjs.map
