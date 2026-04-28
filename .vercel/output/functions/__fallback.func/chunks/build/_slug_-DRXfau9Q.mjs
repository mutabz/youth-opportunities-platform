import { ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, k as useRoute, u as useHead } from './server.mjs';
import { computed, useSSRContext } from 'vue';
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
      return internships.find((s) => s.slug === slug) || {
        title: "Scholarship Opportunities",
        description: "Find internships, internships, jobs, and fellowships worldwide.",
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
        { property: "og:url", content: `${BASE_URL}/opportunities/internships/${post.value.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.value.title },
        { name: "twitter:description", content: post.value.description }
      ],
      link: [
        { rel: "canonical", href: `${BASE_URL}/opportunities/internships/${post.value.slug}` }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "name": post.value.title,
            "description": post.value.description,
            "url": `${BASE_URL}/opportunities/internships/${post.value.slug}`,
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
      _push(`<!--[--><div class="article-wrapper" data-v-ade1219a><article class="article-container" data-v-ade1219a><header class="article-header" data-v-ade1219a><h1 class="article-title" data-v-ade1219a>${ssrInterpolate(post.value.title)}</h1></header><section class="article-content" data-v-ade1219a><!--[-->`);
      ssrRenderList(post.value.description, (paragraph, i) => {
        _push(`<p class="article-paragraph" data-v-ade1219a>${ssrInterpolate(paragraph)}</p>`);
      });
      _push(`<!--]--></section></article></div><section class="container" data-v-ade1219a><div class="opp-grid" data-v-ade1219a><!--[-->`);
      ssrRenderList(_ctx.opportunities, (opp) => {
        _push(`<div class="card" data-v-ade1219a><div class="card-content" data-v-ade1219a></div></div>`);
      });
      _push(`<!--]--></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/opportunities/grants/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ade1219a"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-DRXfau9Q.mjs.map
