import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { k as useRoute, u as useHead } from './server.mjs';
import { s as scholarships } from './scholarships-CJvkA768.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import '@iconify/utils';
import 'node:module';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const BASE_URL = "https://youthplatform.co.rw";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = route.params.slug;
    const post = computed(() => {
      return scholarships.find((s) => s.slug === slug) || {
        title: "Scholarship Opportunities",
        description: "Find scholarships, internships, jobs, and fellowships worldwide.",
        slug: "default"
      };
    });
    useHead({
      title: post.value.title,
      meta: [
        { name: "description", content: post.value.description },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: post.value.title },
        { property: "og:description", content: post.value.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${BASE_URL}/opportunities/scholarships/${post.value.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.value.title },
        { name: "twitter:description", content: post.value.description }
      ],
      link: [
        { rel: "canonical", href: `${BASE_URL}/opportunities/scholarships/${post.value.slug}` }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "name": post.value.title,
            "description": post.value.description,
            "url": `${BASE_URL}/opportunities/scholarships/${post.value.slug}`,
            "provider": {
              "@type": "Organization",
              "name": "YOP Rwanda",
              "sameAs": BASE_URL
            }
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "scholarship-page" }, _attrs))}><h1>${ssrInterpolate(post.value.title)}</h1><p>${ssrInterpolate(post.value.description)}</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/opportunities/competitions/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-qnKPHb0y.mjs.map
