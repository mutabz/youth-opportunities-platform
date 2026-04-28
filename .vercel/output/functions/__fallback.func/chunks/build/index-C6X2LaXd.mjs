import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const sections = [
      { title: "Information We Collect", content: "We collect information you provide directly to us, such as account details and messages." },
      { title: "How We Use Information", content: "We use your information to provide services, improve the platform, and communicate updates." },
      { title: "Sharing of Information", content: "We may share data with trusted partners for service purposes only; we do not sell personal data." },
      { title: "Data Security", content: "We implement strong security measures to protect your data against unauthorized access." },
      { title: "Your Rights", content: "You can request access, correction, or deletion of your personal data by contacting support." },
      { title: "Policy Updates", content: "We may update this policy periodically. Changes will be posted here." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container my-4" }, _attrs))} data-v-c49e8e11><div class="d-flex align-items-center mb-4" data-v-c49e8e11><button class="btn btn-outline-primary me-3" data-v-c49e8e11>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h2 class="text-primary fw-bold" data-v-c49e8e11>Privacy Policy</h2></div><p class="text-muted mb-4" data-v-c49e8e11> Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information. </p><div class="accordion" id="privacyAccordion" data-v-c49e8e11><!--[-->`);
      ssrRenderList(sections, (item, index2) => {
        _push(`<div class="accordion-item" data-v-c49e8e11><h2 class="accordion-header"${ssrRenderAttr("id", "heading" + index2)} data-v-c49e8e11><button class="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", "#collapse" + index2)} aria-expanded="false"${ssrRenderAttr("aria-controls", "collapse" + index2)} data-v-c49e8e11>${ssrInterpolate(item.title)}</button></h2><div${ssrRenderAttr("id", "collapse" + index2)} class="accordion-collapse collapse"${ssrRenderAttr("aria-labelledby", "heading" + index2)} data-bs-parent="#privacyAccordion" data-v-c49e8e11><div class="accordion-body bg-light" data-v-c49e8e11>${ssrInterpolate(item.content)}</div></div></div>`);
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c49e8e11"]]);

export { index as default };
//# sourceMappingURL=index-C6X2LaXd.mjs.map
