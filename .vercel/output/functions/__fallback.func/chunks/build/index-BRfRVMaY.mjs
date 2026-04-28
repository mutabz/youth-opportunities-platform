import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="gen-hero"><h1>Partner With YouthLink</h1><p>Connect your organization with ambitious young talent across 120+ countries. Publish opportunities, discover future leaders, and amplify your impact.</p><div class="">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/join-free",
        class: "btn btn-primary rounded-5 px-5 mt-2 mb-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Become a Partner`);
          } else {
            return [
              createTextVNode("Become a Partner")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/join-free/LoginPage",
        class: "btn btn-success rounded-5 px-5 mt-2 mb-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Already a Partner continue`);
          } else {
            return [
              createTextVNode("Already a Partner continue")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="section"><div class="section-title"><h2>Why Partner With Us?</h2><p>We help organizations reach verified, high-potential youth worldwide.</p></div><div class="benefits-grid"><div class="benefit-card"><div class="benefit-icon"><i class="fa-solid fa-globe"></i></div><h3>Global Reach</h3><p>Access a growing community of ambitious students and young professionals.</p></div><div class="benefit-card"><div class="benefit-icon"><i class="fa-solid fa-bullhorn"></i></div><h3>Increased Visibility</h3><p>Promote your scholarships, grants, internships, or programs to targeted audiences.</p></div><div class="benefit-card"><div class="benefit-icon"><i class="fa-solid fa-chart-line"></i></div><h3>Data Insights</h3><p>Receive analytics on engagement and applicant demographics.</p></div></div></section><section class="section" style="${ssrRenderStyle({ "background": "#f1f5f9" })}"><div class="section-title"><h2>Who Can Partner?</h2><p>We collaborate with organizations across sectors.</p></div><div class="types-grid"><div class="type-card"><h3>Universities</h3><ul><li>\u2714 Promote scholarships</li><li>\u2714 Recruit international students</li><li>\u2714 Increase global applications</li></ul></div><div class="type-card"><h3>Companies</h3><ul><li>\u2714 Post internships &amp; jobs</li><li>\u2714 Discover emerging talent</li><li>\u2714 Build employer branding</li></ul></div><div class="type-card"><h3>NGOs &amp; Foundations</h3><ul><li>\u2714 Share grants &amp; fellowships</li><li>\u2714 Amplify impact programs</li><li>\u2714 Reach underserved youth</li></ul></div></div></section><section class="cta"><h2>Ready to Reach the Next Generation?</h2><p>Let\u2019s build opportunities together and empower future leaders worldwide.</p><a href="#" class="btn btn-outline-primary rounded-5 px-5" style="${ssrRenderStyle({ "background": "white", "color": "var(--primary)", "border": "none" })}">Contact Partnerships Team</a></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/for-partners/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BRfRVMaY.mjs.map
