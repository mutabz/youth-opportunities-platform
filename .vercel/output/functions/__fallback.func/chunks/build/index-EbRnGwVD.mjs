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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const faqs = ref([
      { question: "How do I create an account?", answer: "Click Join Free on the home page and fill the form." },
      { question: "How do I reset my password?", answer: "Go to Login > Forgot Password and follow the steps." },
      { question: "How can I contact support?", answer: "Use the Contact Us page or email support@youthplatform.co.rw." },
      { question: "Can I change my profile information?", answer: "Yes, go to Edit Profile and save changes." },
      { question: "How do I upload documents?", answer: "Upload documents via Google Drive link and share here." },
      { question: "How to become a partner?", answer: "Visit the For Partners page to see requirements and apply." },
      { question: "What job opportunities are available?", answer: "Check the Explore page for the latest opportunities." },
      { question: "Can I track my applications?", answer: "Yes, via your User Dashboard > Applications." },
      { question: "How to add skills to my profile?", answer: "Go to Edit Profile > Skills section and add them." },
      { question: "Is there a mobile app?", answer: "Currently, the platform is web-only. Mobile app is in development." },
      { question: "How to change email?", answer: "Email cannot be changed directly. Contact support for assistance." },
      { question: "How to reset two-factor authentication?", answer: "Contact support for resetting 2FA." },
      { question: "Can I delete my account?", answer: "Yes, contact support to request account deletion." },
      { question: "What is the eligibility for opportunities?", answer: "Eligibility varies by opportunity. Check each listing." },
      { question: "How do I become a mentor?", answer: "Apply via the Mentors page and complete the mentor application form." }
    ]);
    const filteredFaqs = computed(() => {
      if (!searchQuery.value) return faqs.value;
      return faqs.value.filter(
        (faq) => faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container my-4" }, _attrs))} data-v-09766e4f><div class="d-flex align-items-center mb-4" data-v-09766e4f><button class="btn text-primary me-3" data-v-09766e4f>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h2 class="text-primary fw-bold" data-v-09766e4f>Help Center</h2></div><div class="card shadow-sm mb-4" data-v-09766e4f><div class="card-body d-flex align-items-center" data-v-09766e4f>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-solid:magnifying-glass",
        class: "text-muted"
      }, null, _parent));
      _push(`<input type="text" class="form-control" placeholder="Search FAQs..."${ssrRenderAttr("value", searchQuery.value)} data-v-09766e4f></div></div><div class="card shadow-sm" data-v-09766e4f><div class="card-body" data-v-09766e4f><h5 class="fw-bold mb-3" data-v-09766e4f>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-solid:circle-question",
        class: "me-2"
      }, null, _parent));
      _push(`Frequently Asked Questions </h5>`);
      if (filteredFaqs.value.length === 0) {
        _push(`<div class="text-muted" data-v-09766e4f> No FAQs found for &quot;${ssrInterpolate(searchQuery.value)}&quot; </div>`);
      } else {
        _push(`<div class="accordion" id="faqAccordion" data-v-09766e4f><!--[-->`);
        ssrRenderList(filteredFaqs.value, (faq, index2) => {
          _push(`<div class="accordion-item" data-v-09766e4f><h2 class="accordion-header"${ssrRenderAttr("id", "heading" + index2)} data-v-09766e4f><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", "#collapse" + index2)} aria-expanded="false"${ssrRenderAttr("aria-controls", "collapse" + index2)} data-v-09766e4f>${ssrInterpolate(faq.question)}</button></h2><div${ssrRenderAttr("id", "collapse" + index2)} class="accordion-collapse collapse"${ssrRenderAttr("aria-labelledby", "heading" + index2)} data-bs-parent="#faqAccordion" data-v-09766e4f><div class="accordion-body" data-v-09766e4f>${ssrInterpolate(faq.answer)}</div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/support/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-09766e4f"]]);

export { index as default };
//# sourceMappingURL=index-EbRnGwVD.mjs.map
