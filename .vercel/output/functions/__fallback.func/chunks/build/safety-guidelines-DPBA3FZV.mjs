import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  __name: "safety-guidelines",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const guidelines = ref([
      { title: "Protect Your Account", content: "Use a strong password, enable two-factor authentication, and never share your credentials." },
      { title: "Be Careful With Personal Information", content: "Do not share sensitive personal info with strangers or outside the platform." },
      { title: "Recognize Scams", content: "Be cautious of messages asking for money, gift cards, or suspicious links." },
      { title: "Safe Communication", content: "Only communicate through the official platform channels with mentors, partners, or peers." },
      { title: "Verify Opportunities", content: "Check eligibility and legitimacy of opportunities before applying." },
      { title: "Report Abuse", content: "Immediately report any suspicious, abusive, or fraudulent activity to support." },
      { title: "Safe File Uploads", content: "Upload only documents that belong to you and ensure links are from trusted sources like Google Drive." },
      { title: "Privacy Settings", content: "Review your profile privacy settings to control what others can see." },
      { title: "Device Safety", content: "Keep your device software updated and avoid using public devices to log in." },
      { title: "Cybersecurity Awareness", content: "Learn about phishing, malware, and safe browsing practices." }
    ]);
    const filteredGuidelines = computed(() => {
      if (!searchQuery.value) return guidelines.value;
      return guidelines.value.filter(
        (item) => item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || item.content.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container my-4" }, _attrs))} data-v-24b9f5fe><div class="d-flex align-items-center mb-4" data-v-24b9f5fe><button class="btn btn-outline-primary me-3" data-v-24b9f5fe>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h2 class="text-primary fw-bold" data-v-24b9f5fe>Safety Guidelines</h2></div><div class="card shadow-sm mb-4" data-v-24b9f5fe><div class="card-body d-flex align-items-center" data-v-24b9f5fe>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-solid:magnifying-glass",
        class: "text-muted"
      }, null, _parent));
      _push(`<input type="text" class="form-control" placeholder="Search Safety Guidelines..."${ssrRenderAttr("value", searchQuery.value)} data-v-24b9f5fe></div></div><div class="card shadow-sm" data-v-24b9f5fe><div class="card-body" data-v-24b9f5fe><h5 class="fw-bold mb-3" data-v-24b9f5fe>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-solid:shield-halved",
        class: "me-2"
      }, null, _parent));
      _push(`Safety Guidelines </h5>`);
      if (filteredGuidelines.value.length === 0) {
        _push(`<div class="text-muted" data-v-24b9f5fe> No guidelines found for &quot;${ssrInterpolate(searchQuery.value)}&quot; </div>`);
      } else {
        _push(`<div class="accordion" id="guidelinesAccordion" data-v-24b9f5fe><!--[-->`);
        ssrRenderList(filteredGuidelines.value, (guideline, index) => {
          _push(`<div class="accordion-item" data-v-24b9f5fe><h2 class="accordion-header"${ssrRenderAttr("id", "heading" + index)} data-v-24b9f5fe><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", "#collapse" + index)} aria-expanded="false"${ssrRenderAttr("aria-controls", "collapse" + index)} data-v-24b9f5fe>${ssrInterpolate(guideline.title)}</button></h2><div${ssrRenderAttr("id", "collapse" + index)} class="accordion-collapse collapse"${ssrRenderAttr("aria-labelledby", "heading" + index)} data-bs-parent="#guidelinesAccordion" data-v-24b9f5fe><div class="accordion-body" data-v-24b9f5fe>${ssrInterpolate(guideline.content)}</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/support/safety-guidelines.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const safetyGuidelines = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-24b9f5fe"]]);

export { safetyGuidelines as default };
//# sourceMappingURL=safety-guidelines-DPBA3FZV.mjs.map
