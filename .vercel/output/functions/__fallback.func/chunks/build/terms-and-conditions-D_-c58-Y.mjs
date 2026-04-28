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
  __name: "terms-and-conditions",
  __ssrInlineRender: true,
  setup(__props) {
    const sections = [
      { title: "Acceptance of Terms", content: "By using the platform, you accept these terms and all applicable laws." },
      { title: "User Conduct", content: "You agree to use the platform responsibly and legally, without harming others." },
      { title: "Account Responsibility", content: "Keep your account credentials secure; you are responsible for all actions." },
      { title: "Intellectual Property", content: "All platform content is owned by us; do not copy without permission." },
      { title: "Limitation of Liability", content: "We are not liable for any damages resulting from use of the platform." },
      { title: "Termination", content: "Accounts may be suspended or terminated for violating terms or laws." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container my-4" }, _attrs))} data-v-895b6ff5><div class="d-flex align-items-center mb-4" data-v-895b6ff5><button class="btn btn-outline-primary me-3" data-v-895b6ff5>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h2 class="text-primary fw-bold" data-v-895b6ff5>Terms of Use</h2></div><p class="text-muted mb-4" data-v-895b6ff5> By using our platform, you agree to comply with these Terms of Use and all applicable laws and regulations. </p><div class="accordion" id="termsAccordion" data-v-895b6ff5><!--[-->`);
      ssrRenderList(sections, (item, index) => {
        _push(`<div class="accordion-item" data-v-895b6ff5><h2 class="accordion-header"${ssrRenderAttr("id", "heading" + index)} data-v-895b6ff5><button class="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", "#collapse" + index)} aria-expanded="false"${ssrRenderAttr("aria-controls", "collapse" + index)} data-v-895b6ff5>${ssrInterpolate(item.title)}</button></h2><div${ssrRenderAttr("id", "collapse" + index)} class="accordion-collapse collapse"${ssrRenderAttr("aria-labelledby", "heading" + index)} data-bs-parent="#termsAccordion" data-v-895b6ff5><div class="accordion-body bg-light" data-v-895b6ff5>${ssrInterpolate(item.content)}</div></div></div>`);
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal/terms-and-conditions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const termsAndConditions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-895b6ff5"]]);

export { termsAndConditions as default };
//# sourceMappingURL=terms-and-conditions-D_-c58-Y.mjs.map
