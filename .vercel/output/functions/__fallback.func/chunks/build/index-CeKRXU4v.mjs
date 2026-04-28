import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
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

const _sfc_main$1 = {
  __name: "MentorsForm",
  __ssrInlineRender: true,
  props: {
    mentor: Object
  },
  emits: ["saved", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useDataStore();
    const loading = ref(false);
    const form = ref({
      full_name: "",
      role: "",
      bio: "",
      profile_image: "",
      skills: [],
      price_per_session: 0,
      available: true
    });
    const skillsInput = ref("");
    watch(() => props.mentor, (m) => {
      if (!m) return;
      form.value = { ...m };
      skillsInput.value = (m.skills || []).join(", ");
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card p-4" }, _attrs))}><h5 class="mb-4">${ssrInterpolate(((_a = __props.mentor) == null ? void 0 : _a.id) ? "Edit Mentor" : "Create Mentor")}</h5><form><div class="mb-3"><label class="form-label">Full Name</label><input${ssrRenderAttr("value", form.value.full_name)} class="form-control" required></div><div class="mb-3"><label class="form-label">Role</label><input${ssrRenderAttr("value", form.value.role)} class="form-control" placeholder="Software Engineer @ Google"></div><div class="mb-3"><label class="form-label">Bio</label><textarea class="form-control" rows="3">${ssrInterpolate(form.value.bio)}</textarea></div><div class="mb-3"><label class="form-label">Profile Image URL</label><input${ssrRenderAttr("value", form.value.profile_image)} class="form-control"></div><div class="mb-3"><label class="form-label">Skills (comma separated)</label><input${ssrRenderAttr("value", skillsInput.value)} class="form-control" placeholder="System Design, Data Structures"></div><div class="mb-3"><label class="form-label">Price Per Session ($)</label><input type="number"${ssrRenderAttr("value", form.value.price_per_session)} class="form-control"></div><div class="form-check mb-3"><input type="checkbox" class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(form.value.available) ? ssrLooseContain(form.value.available, null) : form.value.available) ? " checked" : ""}><label class="form-check-label"> Available for sessions </label></div><div class="d-flex gap-2"><button class="btn btn-primary"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""}>${ssrInterpolate(loading.value ? "Saving..." : "Save Mentor")}</button><button type="button" class="btn btn-outline-secondary"> Cancel </button></div></form></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MentorsForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useDataStore();
    const mentors = ref([]);
    const showCreateForm = ref(false);
    const searchQuery = ref("");
    const availabilityFilter = ref("");
    const filteredMentors = computed(() => {
      return mentors.value.filter((m) => {
        var _a;
        const matchSearch = (_a = m.full_name) == null ? void 0 : _a.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchAvailability = !availabilityFilter.value || String(m.available) === availabilityFilter.value;
        return matchSearch && matchAvailability;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-mentors" }, _attrs))}><header class="app-header d-flex justify-content-between align-items-center"><div class="d-flex"><button class="btn me-3">`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3>Mentors</h3></div><div class="d-flex"><button class="btn btn-secondary">Refresh</button><button class="btn btn-primary">+ New Mentor</button></div></header><div class="row mt-4"><aside class="col-lg-3 sidebar sticky-top"><input${ssrRenderAttr("value", searchQuery.value)} class="form-control mb-2" placeholder="Search mentors"><select class="form-select"><option value=""${ssrIncludeBooleanAttr(Array.isArray(availabilityFilter.value) ? ssrLooseContain(availabilityFilter.value, "") : ssrLooseEqual(availabilityFilter.value, "")) ? " selected" : ""}>All</option><option value="true"${ssrIncludeBooleanAttr(Array.isArray(availabilityFilter.value) ? ssrLooseContain(availabilityFilter.value, "true") : ssrLooseEqual(availabilityFilter.value, "true")) ? " selected" : ""}>Available</option><option value="false"${ssrIncludeBooleanAttr(Array.isArray(availabilityFilter.value) ? ssrLooseContain(availabilityFilter.value, "false") : ssrLooseEqual(availabilityFilter.value, "false")) ? " selected" : ""}>Unavailable</option></select></aside><section class="col-lg-9"><div style="${ssrRenderStyle(showCreateForm.value ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><table class="table table-hover table-bordered" style="${ssrRenderStyle(!showCreateForm.value ? null : { display: "none" })}"><thead class="table-dark"><tr><th>Name</th><th>Role</th><th>Price</th><th>Rating</th><th>Available</th><th>Actions</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(filteredMentors.value, (mentor) => {
        _push(`<tr><td>${ssrInterpolate(mentor.full_name)}</td><td class="small text-muted">${ssrInterpolate(mentor.role)}</td><td>$${ssrInterpolate(mentor.price_per_session)}</td><td>${ssrInterpolate(mentor.rating)} \u2B50</td><td><span class="${ssrRenderClass([mentor.available ? "bg-success" : "bg-secondary", "badge"])}">${ssrInterpolate(mentor.available ? "Yes" : "No")}</span></td><td>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/adm/mod/mentors/" + mentor.id,
          class: "btn btn-act text-primary me-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:pencil" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, { name: "fa6-solid:pencil" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<button class="btn btn-act text-danger">`);
        _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:trash" }, null, _parent));
        _push(`</button></td></tr>`);
      });
      _push(`<!--]-->`);
      if (!filteredMentors.value.length) {
        _push(`<tr><td colspan="6" class="text-center"> No mentors found </td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></section></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/mentors/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CeKRXU4v.mjs.map
