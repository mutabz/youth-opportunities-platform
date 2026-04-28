import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { t as truncate } from './utils-C8zi-Gnd.mjs';
import { unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './images-B9na2Clh.mjs';
import './server.mjs';
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
import 'perfect-debounce';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="gen-hero"><h1>Explore Opportunities</h1><p>Find scholarships, internships, fellowships and grants from around the world.</p></section><section class="explore-container"><aside class="sidebar d-lg-none"><h3>Filters</h3><div class="filter-group"><label>Category</label><select><option>All</option><option>Scholarships</option><option>Internships</option><option>Grants</option><option>Fellowships</option></select></div><div class="filter-group"><label>Funding Type</label><select><option>Any</option><option>Fully Funded</option><option>Partially Funded</option><option>Self Funded</option></select></div><div class="filter-group"><label>Location</label><select><option>Global</option><option>Europe</option><option>Africa</option><option>USA</option></select></div></aside><div class="main-content"><div class="top-bar grid-2"><div class="explore-search-bar"><input type="text" placeholder="Search opportunities..."><button class="btn btn-primary">Search</button></div><select style="${ssrRenderStyle({ "padding": "0.8rem", "border-radius": "8px", "border": "1px solid #e2e8f0" })}"><option>Sort by Latest</option><option>Deadline</option><option>Popularity</option></select></div><div class="container mx-auto p-4">`);
      if (_ctx.loading) {
        _push(`<div class="text-blue-500">Loading...</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.error) {
        _push(`<div class="text-red-500">${ssrInterpolate(_ctx.error)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.items && _ctx.items.length) {
        _push(`<div class="opp-grid"><!--[-->`);
        ssrRenderList(_ctx.items, (opp) => {
          _push(`<div class="card"><div class="card-img"><span class="card-badge">${ssrInterpolate(opp.category || "Opportunity")}</span><img${ssrRenderAttr("src", _imports_0)}></div><div class="card-content"><h3 class="label">${ssrInterpolate(opp.title)}</h3><p>${ssrInterpolate(("truncate" in _ctx ? _ctx.truncate : unref(truncate))(opp.description[0] || "", 100))}</p><div class="card-footer"><span class="deadline">`);
          _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:location-pin" }, null, _parent));
          _push(` ${ssrInterpolate(("truncate" in _ctx ? _ctx.truncate : unref(truncate))(opp.host_country, 10))}, ${ssrInterpolate(("truncate" in _ctx ? _ctx.truncate : unref(truncate))(opp.location.city, 10))}</span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/opportunities/" + opp.id,
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
        _push(`<!--]--></div>`);
      } else if (!_ctx.loading && !_ctx.error) {
        _push(`<div>No opportunities found.</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pagination"><button>1</button><button>2</button><button>3</button></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/membership-request/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-cCHJvvp4.mjs.map
