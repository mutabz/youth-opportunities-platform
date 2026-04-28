import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useDataStore();
    const analytics = ref({
      total_visits: 0,
      top_countries: [],
      top_pages: [],
      devices: [],
      browsers: [],
      visits: []
    });
    const topDevice = computed(() => {
      if (!analytics.value.devices.length) return "N/A";
      return analytics.value.devices.sort((a, b) => b.count - a.count)[0].device;
    });
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleString();
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-dashboard" }, _attrs))} data-v-80b44674><header class="app-header d-flex justify-content-between align-items-center" data-v-80b44674><div class="d-flex" data-v-80b44674><button class="btn me-3" data-v-80b44674> \u2190 </button><h3 data-v-80b44674>Analytics Dashboard</h3></div><button class="btn btn-secondary" data-v-80b44674> Refresh </button></header><section class="row mt-4 g-3" data-v-80b44674><div class="col-md-3" data-v-80b44674><div class="card shadow-lg border-0" data-v-80b44674><div class="card-body" data-v-80b44674><h6 data-v-80b44674>Total Visits</h6><h3 data-v-80b44674>${ssrInterpolate(analytics.value.total_visits)}</h3></div></div></div><div class="col-md-3" data-v-80b44674><div class="card shadow-lg border-0" data-v-80b44674><div class="card-body" data-v-80b44674><h6 data-v-80b44674>Top Device</h6><h3 data-v-80b44674>${ssrInterpolate(topDevice.value)}</h3></div></div></div></section><section class="row mt-4" data-v-80b44674><div class="col-md-4" data-v-80b44674><div class="card p-3 shadow-sm" data-v-80b44674><h5 data-v-80b44674>Top Countries</h5><ul class="list-group" data-v-80b44674><!--[-->`);
      ssrRenderList(analytics.value.top_countries, (c) => {
        _push(`<li class="list-group-item d-flex justify-content-between" data-v-80b44674><span data-v-80b44674>${ssrInterpolate(c.country)}</span><span data-v-80b44674>${ssrInterpolate(c.count)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="col-md-4" data-v-80b44674><div class="card p-3 shadow-sm" data-v-80b44674><h5 data-v-80b44674>Top Pages</h5><ul class="list-group" data-v-80b44674><!--[-->`);
      ssrRenderList(analytics.value.top_pages, (p) => {
        _push(`<li class="list-group-item d-flex justify-content-between" data-v-80b44674><span class="small" data-v-80b44674>${ssrInterpolate(p.page)}</span><span data-v-80b44674>${ssrInterpolate(p.count)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="col-md-4" data-v-80b44674><div class="" data-v-80b44674><div class="card p-3 shadow-sm" data-v-80b44674><h5 data-v-80b44674>Devices</h5><ul class="list-group" data-v-80b44674><!--[-->`);
      ssrRenderList(analytics.value.devices, (d) => {
        _push(`<li class="list-group-item d-flex justify-content-between" data-v-80b44674><span data-v-80b44674>${ssrInterpolate(d.device)}</span><span data-v-80b44674>${ssrInterpolate(d.count)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="mt-2" data-v-80b44674><div class="card p-3 shadow-sm" data-v-80b44674><h5 data-v-80b44674>Browsers</h5><ul class="list-group" data-v-80b44674><!--[-->`);
      ssrRenderList(analytics.value.browsers, (b) => {
        _push(`<li class="list-group-item d-flex justify-content-between" data-v-80b44674><span data-v-80b44674>${ssrInterpolate(b.browser)}</span><span data-v-80b44674>${ssrInterpolate(b.count)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div></div></section><section class="mt-4" data-v-80b44674><div class="card p-3 shadow-sm" data-v-80b44674><div class="d-flex justify-content-between mb-2" data-v-80b44674><h5 data-v-80b44674>All Visits</h5></div><table class="table table-bordered table-hover" data-v-80b44674><thead class="table-dark" data-v-80b44674><tr data-v-80b44674><th data-v-80b44674>IP</th><th data-v-80b44674>Country</th><th data-v-80b44674>City</th><th data-v-80b44674>Device</th><th data-v-80b44674>Browser</th><th data-v-80b44674>Page</th><th data-v-80b44674>Time</th></tr></thead><tbody data-v-80b44674><!--[-->`);
      ssrRenderList(analytics.value.visits, (v) => {
        _push(`<tr data-v-80b44674><td data-v-80b44674>${ssrInterpolate(v.ip_address)}</td><td data-v-80b44674>${ssrInterpolate(v.country || "N/A")}</td><td data-v-80b44674>${ssrInterpolate(v.city || "N/A")}</td><td data-v-80b44674>${ssrInterpolate(v.device)}</td><td data-v-80b44674>${ssrInterpolate(v.browser)}</td><td class="small text-primary" data-v-80b44674>${ssrInterpolate(v.page_url)}</td><td data-v-80b44674>${ssrInterpolate(formatDate(v.created_at))}</td></tr>`);
      });
      _push(`<!--]-->`);
      if (!((_a = analytics.value.visits) == null ? void 0 : _a.length)) {
        _push(`<tr data-v-80b44674><td colspan="7" class="text-center" data-v-80b44674> No data yet </td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/analytics/access/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-80b44674"]]);

export { index as default };
//# sourceMappingURL=index-tQlem5A_.mjs.map
