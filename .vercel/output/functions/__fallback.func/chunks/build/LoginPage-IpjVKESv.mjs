import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderDynamicModel, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useDeviceType } from './useDeviceType-BcjKgtk3.mjs';
import { u as useAuth } from './useAuth-Byn3I6j5.mjs';
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
import './dataStore-B0c5KwuX.mjs';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "LoginPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { device } = useDeviceType();
    const { loadingLogin, loadingRegister } = useAuth();
    const activeForm = ref("user-login");
    const showPassword = ref(false);
    const loginForm = ref({
      email: "",
      password: ""
    });
    const registerForm = ref({
      full_name: "",
      email: "",
      password: "",
      confirm_password: ""
    });
    const partnerForm = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))} data-v-1171b25a>`);
      if (unref(device) === "desktop") {
        _push(`<div class="left-panel" data-v-1171b25a><div class="brand-logo" data-v-1171b25a><div class="logo-placeholder" data-v-1171b25a>YOP</div></div><h1 class="hero-text" data-v-1171b25a> Welcome to<br data-v-1171b25a> YOUTH OPPORTUNITIES<br data-v-1171b25a> PLAFORM<br data-v-1171b25a><br data-v-1171b25a><span class="text-blue" data-v-1171b25a>Access Thousands of Opportunities</span></h1><div class="image-collage-placeholder" data-v-1171b25a><div class="header" data-v-1171b25a><h5 class="text-blue fw-bold text-center" data-v-1171b25a>Join us Discover Opportunities That Shape Your Future</h5></div><div class="content" data-v-1171b25a><p class="mt-2 mb-2" data-v-1171b25a>The Youth Opportunities Platform (YOP) connects young people with life-changing opportunities including scholarships, internships, jobs, training programs, and events from around the world.</p><p class="mt-2 mb-2" data-v-1171b25a>Our mission is to empower youth by making access to opportunities simple, transparent, and accessible in one place.</p><p class="mt-2 mb-2" data-v-1171b25a>Join thousands of students, graduates, and innovators who use YOP to find opportunities that match their ambitions.</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="right-panel" data-v-1171b25a><div class="" data-v-1171b25a><h6 class="text-blue fw-bold text-center" data-v-1171b25a>Want to browse more opportunities: (Funding &amp; Grants, Internships, Jobs, Scholarships) You&#39;re in right place to be....</h6><div class="right-panel" data-v-1171b25a><h6 class="text-blue fw-bold text-center mb-5" data-v-1171b25a>Login Or Register to get started</h6><div class="r" data-v-1171b25a>`);
      if (unref(activeForm) === "user-login") {
        _push(`<form data-v-1171b25a><h2 data-v-1171b25a>Login to YOP</h2><h2 class="mb-5" data-v-1171b25a>Login as normal user<strong data-v-1171b25a> or </strong> <span class="text-blue" data-v-1171b25a> Login As admin or partner</span></h2><div class="form-floating mb-3" data-v-1171b25a><input type="email" class="form-control" id="loginEmail"${ssrRenderAttr("value", unref(loginForm).email)} placeholder="name@example.com" required data-v-1171b25a><label for="loginEmail" data-v-1171b25a>Email address</label></div><div class="form-floating mb-3 position-relative" data-v-1171b25a><input${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} class="form-control" id="loginPassword"${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(loginForm).password, null)} placeholder="Password" required data-v-1171b25a><label for="loginPassword" data-v-1171b25a>Password</label><button type="button" class="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2" data-v-1171b25a> \u{1F441} </button></div><button type="submit" class="btn-primary" data-v-1171b25a>`);
        if (unref(loadingLogin)) {
          _push(`<span data-v-1171b25a>Loading...</span>`);
        } else {
          _push(`<span data-v-1171b25a>Login</span>`);
        }
        _push(`</button><a href="#" class="forgot-password" data-v-1171b25a> Forgot password? </a><div class="divider" data-v-1171b25a></div><button type="button" class="btn-secondary" data-v-1171b25a> Create new account </button><button class="btn text-center mt-3 text-blue" data-v-1171b25a> Create new partner&#39;s account? </button></form>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeForm) === "admin-login") {
        _push(`<form data-v-1171b25a><h2 data-v-1171b25a>Admin Login <strong data-v-1171b25a> or </strong> <span class="text-blue" data-v-1171b25a> Login As Normal User</span></h2><div class="form-floating mb-3" data-v-1171b25a><input type="email" class="form-control"${ssrRenderAttr("value", unref(loginForm).email)} placeholder="Email" required data-v-1171b25a><label data-v-1171b25a>Email</label></div><div class="form-floating mb-3 position-relative" data-v-1171b25a><input${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} class="form-control"${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(loginForm).password, null)} placeholder="Password" required data-v-1171b25a><button type="button" class="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2" data-v-1171b25a>\u{1F441}</button><label data-v-1171b25a>Password</label></div><button type="submit" class="btn-primary" data-v-1171b25a>`);
        if (unref(loadingLogin)) {
          _push(`<span data-v-1171b25a>Loading...</span>`);
        } else {
          _push(`<span data-v-1171b25a>Login</span>`);
        }
        _push(`</button><a href="#" class="forgot-password" data-v-1171b25a> Forgot password? </a><div class="divider" data-v-1171b25a></div><button type="button" class="btn-secondary" data-v-1171b25a> Create new account </button><button type="button" class="btn text-center mt-3 text-blue" data-v-1171b25a> Create new partner&#39;s account? </button></form>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeForm) === "user-reg") {
        _push(`<form data-v-1171b25a><h2 data-v-1171b25a>Create Account</h2><div class="form-floating mb-3" data-v-1171b25a><input type="text" class="form-control" id="regFullName"${ssrRenderAttr("value", unref(registerForm).full_name)} placeholder="Full name" required data-v-1171b25a><label for="regFullName" data-v-1171b25a>Full name</label></div><div class="form-floating mb-3" data-v-1171b25a><input type="email" class="form-control" id="regEmail"${ssrRenderAttr("value", unref(registerForm).email)} placeholder="Email address" required data-v-1171b25a><label for="regEmail" data-v-1171b25a>Email address</label></div><div class="form-floating mb-3 position-relative" data-v-1171b25a><input${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} class="form-control" id="regPassword"${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(registerForm).password, null)} placeholder="Password" required data-v-1171b25a><label for="regPassword" data-v-1171b25a>Password</label><button type="button" class="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2" data-v-1171b25a> \u{1F441} </button></div><div class="form-floating mb-3 position-relative" data-v-1171b25a><input${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} class="form-control" id="regConfirmPassword"${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(registerForm).confirm_password, null)} placeholder="Confirm password" required data-v-1171b25a><label for="regConfirmPassword" data-v-1171b25a>Confirm password</label><button type="button" class="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2" data-v-1171b25a> \u{1F441} </button></div><button type="submit" class="btn-primary w-100" data-v-1171b25a>`);
        if (unref(loadingRegister)) {
          _push(`<span data-v-1171b25a>Registering...</span>`);
        } else {
          _push(`<span data-v-1171b25a>Register</span>`);
        }
        _push(`</button><div class="divider" data-v-1171b25a></div><button type="button" class="btn-secondary w-100" data-v-1171b25a> Back to Login </button></form>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeForm) === "partner-reg") {
        _push(`<form data-v-1171b25a><h2 data-v-1171b25a>Partner Registration</h2><div class="form-floating mb-3" data-v-1171b25a><input type="text" class="form-control"${ssrRenderAttr("value", unref(partnerForm).organization)} placeholder="Organization Name" required data-v-1171b25a><label data-v-1171b25a>Organization Name</label></div><div class="form-floating mb-3" data-v-1171b25a><input type="text" class="form-control"${ssrRenderAttr("value", unref(partnerForm).representative)} placeholder="Representative Name" required data-v-1171b25a><label data-v-1171b25a>Representative Name</label></div><div class="form-floating mb-3" data-v-1171b25a><input type="email" class="form-control"${ssrRenderAttr("value", unref(partnerForm).email)} placeholder="Email" required data-v-1171b25a><label data-v-1171b25a>Email</label></div><div class="form-floating mb-3" data-v-1171b25a><input type="text" class="form-control"${ssrRenderAttr("value", unref(partnerForm).phone)} placeholder="Phone Number" required data-v-1171b25a><label data-v-1171b25a>Phone Number</label></div><div class="form-floating mb-3" data-v-1171b25a><textarea class="form-control" rows="4" placeholder="Opportunity Description" required data-v-1171b25a>${ssrInterpolate(unref(partnerForm).opportunity_description)}</textarea><label data-v-1171b25a>Opportunity Description</label></div><button type="submit" class="btn-primary w-100" data-v-1171b25a>Submit Partner Application</button><div class="divider" data-v-1171b25a></div><button type="button" class="btn-secondary w-100" data-v-1171b25a> Back to Login </button></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="footer-logo" data-v-1171b25a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "meta-placeholder"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Go to Home page`);
          } else {
            return [
              createTextVNode("Go to Home page")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/join-free/LoginPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LoginPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1171b25a"]]);

export { LoginPage as default };
//# sourceMappingURL=LoginPage-IpjVKESv.mjs.map
