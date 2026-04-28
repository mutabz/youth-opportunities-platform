import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './images-B9na2Clh.mjs';
import { _ as _export_sfc, k as useRoute, u as useHead } from './server.mjs';
import { s as scholarships } from './scholarships-CJvkA768.mjs';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import 'perfect-debounce';
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
    useDataStore();
    const truncate = (text, length) => {
      if (!text) return "";
      return text.length > length ? text.slice(0, length) + "..." : text;
    };
    const route = useRoute();
    const slug = route.params.slug;
    const opportunities = ref([]);
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
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div class="article-wrapper" data-v-5daec278><article class="article-container" data-v-5daec278><header class="article-header" data-v-5daec278><h1 class="article-title" data-v-5daec278>${ssrInterpolate(post.value.title)}</h1></header><section class="article-content" data-v-5daec278><!--[-->`);
      ssrRenderList(post.value.description, (paragraph, i) => {
        _push(`<p class="article-paragraph" data-v-5daec278>${ssrInterpolate(paragraph)}</p>`);
      });
      _push(`<!--]--></section></article></div><section class="container" data-v-5daec278><div class="opp-grid" data-v-5daec278><!--[-->`);
      ssrRenderList(opportunities.value, (opp) => {
        _push(`<div class="card" data-v-5daec278><div class="card-img" data-v-5daec278><span class="card-badge" data-v-5daec278>${ssrInterpolate(opp.category || "Opportunity")}</span><img${ssrRenderAttr("src", _imports_0)} data-v-5daec278></div><div class="card-content" data-v-5daec278><h3 class="label" data-v-5daec278>${ssrInterpolate(opp.title)}</h3><p data-v-5daec278>${ssrInterpolate(truncate(opp.description[0] || "", 100))}</p><div class="card-footer" data-v-5daec278><span class="deadline" data-v-5daec278>`);
        _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:location-pin" }, null, _parent));
        _push(` ${ssrInterpolate(truncate(opp.host_country, 10))}, ${ssrInterpolate(truncate(opp.location.city, 10))}</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/opportunities/" + _ctx.item.category + "-data/" + _ctx.item.id,
          class: "btn btn-outline-primary rounded-4",
          style: { "font-size": "0.8rem", "padding": "0.4rem 1rem" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`View Details`);
            } else {
              return [
                createTextVNode("View Details")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/opportunities/study-abroad/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5daec278"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-BOKWlisN.mjs.map
