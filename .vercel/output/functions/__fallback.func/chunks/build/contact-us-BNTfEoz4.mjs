import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
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
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const form = ref({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const contactInfo = ref([
      { title: "Support Email", content: "support@youthplatform.co.rw" },
      { title: "Phone Number", content: "+250 788 123 456" },
      { title: "Operating Hours", content: "Mon-Fri: 8:00 AM - 6:00 PM" },
      { title: "Social Media", content: "Twitter: @YouthPlatform | LinkedIn: Youth Platform Rwanda" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container my-4" }, _attrs))}><div class="d-flex align-items-center mb-4"><button class="btn btn-outline-primary me-3">`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h2 class="text-primary fw-bold">Contact Us</h2></div><div class="card shadow-sm mb-4"><div class="card-body text-center"><h3 class="fw-bold mb-2">We\u2019re Here to Help!</h3><p class="text-muted mb-0">Have questions, feedback, or need support? Reach out to us below.</p></div></div><div class="card shadow-sm mb-4"><div class="card-body"><h5 class="fw-bold mb-3">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-solid:envelope",
        class: "me-2"
      }, null, _parent));
      _push(`Send Us a Message</h5><form><div class="mb-3"><label class="form-label">Your Name</label><input type="text"${ssrRenderAttr("value", form.value.name)} class="form-control" placeholder="Enter your name" required></div><div class="mb-3"><label class="form-label">Your Email</label><input type="email"${ssrRenderAttr("value", form.value.email)} class="form-control" placeholder="Enter your email" required></div><div class="mb-3"><label class="form-label">Subject</label><input type="text"${ssrRenderAttr("value", form.value.subject)} class="form-control" placeholder="Subject"></div><div class="mb-3"><label class="form-label">Message</label><textarea class="form-control" rows="5" placeholder="Your message..." required>${ssrInterpolate(form.value.message)}</textarea></div><button type="submit" class="btn btn-primary w-100"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""}>`);
      if (loading.value) {
        _push(`<span class="spinner-border spinner-border-sm me-2"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` Send Message </button></form></div></div><div class="card shadow-sm mb-4"><div class="card-body"><h5 class="fw-bold mb-3">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-solid:info-circle",
        class: "me-2"
      }, null, _parent));
      _push(`Other Contact Info</h5><div class="accordion" id="contactAccordion"><!--[-->`);
      ssrRenderList(contactInfo.value, (item, index) => {
        _push(`<div class="accordion-item"><h2 class="accordion-header"${ssrRenderAttr("id", "heading" + index)}><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", "#collapse" + index)} aria-expanded="false"${ssrRenderAttr("aria-controls", "collapse" + index)}>${ssrInterpolate(item.title)}</button></h2><div${ssrRenderAttr("id", "collapse" + index)} class="accordion-collapse collapse"${ssrRenderAttr("aria-labelledby", "heading" + index)} data-bs-parent="#contactAccordion"><div class="accordion-body">${ssrInterpolate(item.content)}</div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="card shadow-sm mb-4"><div class="card-body"><h5 class="fw-bold mb-3">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-solid:map-location-dot",
        class: "me-2"
      }, null, _parent));
      _push(`Our Location</h5><div class="border rounded p-5 text-center text-muted"> [Interactive Map Placeholder] </div></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/support/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-us-BNTfEoz4.mjs.map
