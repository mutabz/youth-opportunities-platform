import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './server.mjs';
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
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container py-5" }, _attrs))}><div class="text-center mb-5"><h1 class="fw-bold">Join Opportunities Portal</h1><p class="text-muted"> Become part of a growing platform that connects people with jobs, internships, scholarships, and global opportunities. </p></div><div class="container w-100 mb-5 d-flex justify-content-center align-items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/join-free/LoginPage",
        class: "btn btn-primary btn-SM me-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-center align-items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "mt-1",
              name: "fa6-solid:arrow-right"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Login or Create Free Account here</span></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-center align-items-center" }, [
                createVNode(_component_Icon, {
                  class: "mt-1",
                  name: "fa6-solid:arrow-right"
                }),
                createVNode("span", null, "Login or Create Free Account here")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="accordion" id="joinAccordion"><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed text-blue fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#userJoin"> Join as a normal users </button></h2><div id="userJoin" class="accordion-collapse collapse" data-bs-parent="#joinAccordion"><div class="accordion-body"><p> Joining as a normal user allows you to explore thousands of opportunities including jobs, internships, scholarships, and global programs. Our platform is designed to help individuals discover opportunities that match their interests and career goals. </p><p> Once you create an account, you can browse opportunities, save your favorites, and stay updated with the latest listings from organizations around the world. The platform makes it easy to search by category, location, or opportunity type. </p><p> As a registered user, you will also receive notifications about new opportunities that match your interests. This helps you stay ahead and never miss an important opportunity. </p><p> Creating a user account is completely free and takes less than a minute. Simply register with your email and start exploring opportunities immediately. </p></div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed text-blue fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#partnerJoin"> Join as a partner organization for sharing opportunities </button></h2><div id="partnerJoin" class="accordion-collapse collapse" data-bs-parent="#joinAccordion"><div class="accordion-body"><p> Partner organizations can publish opportunities such as jobs, internships, scholarships, events, and training programs. By becoming a partner, you can reach a large audience of students, professionals, and opportunity seekers worldwide. </p><p> Our platform helps organizations showcase their programs and connect with motivated individuals who are actively searching for career and development opportunities. </p><p> Partners are given access to a dedicated dashboard where they can manage opportunity listings, update information, and monitor engagement from users. </p><h6 class="fw-bold mt-4">Partner Requirements</h6><ul><li>Must represent a registered organization or institution</li><li>Provide valid contact information</li><li>Submit accurate and verified opportunity listings</li><li>Follow platform guidelines and posting policies</li><li>Maintain professional communication with applicants</li></ul><p> If your organization meets these requirements, you can apply to become a partner and start sharing opportunities with our growing community. </p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/join-free/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CJnoL8o8.mjs.map
