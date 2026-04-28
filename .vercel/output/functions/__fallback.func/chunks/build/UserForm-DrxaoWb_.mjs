import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from 'vue/server-renderer';
import { ref, computed, watch, useSSRContext } from 'vue';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';

const _sfc_main = {
  __name: "UserForm",
  __ssrInlineRender: true,
  props: {
    initialForm: Object
  },
  emits: ["saved", "cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useDataStore();
    const loading = ref(false);
    const form = ref({
      full_name: "",
      email: "",
      phone_number: "",
      role: "user",
      location: "",
      bio: "",
      password: "",
      is_verified: false
    });
    const isEdit = computed(() => !!props.initialForm);
    watch(
      () => props.initialForm,
      (val) => {
        if (val) {
          form.value = {
            ...val,
            password: ""
          };
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="row g-3"><div class="col-md-6"><label class="form-label">Full Name</label><input${ssrRenderAttr("value", form.value.full_name)} type="text" class="form-control" required></div><div class="col-md-6"><label class="form-label">Email</label><input${ssrRenderAttr("value", form.value.email)} type="email" class="form-control" required></div><div class="col-md-6"><label class="form-label">Phone</label><input${ssrRenderAttr("value", form.value.phone_number)} type="text" class="form-control"></div><div class="col-md-6"><label class="form-label">Location</label><input${ssrRenderAttr("value", form.value.location)} type="text" class="form-control"></div><div class="col-md-6"><label class="form-label">Role</label><select class="form-select"><option value="user"${ssrIncludeBooleanAttr(Array.isArray(form.value.role) ? ssrLooseContain(form.value.role, "user") : ssrLooseEqual(form.value.role, "user")) ? " selected" : ""}>User</option><option value="admin"${ssrIncludeBooleanAttr(Array.isArray(form.value.role) ? ssrLooseContain(form.value.role, "admin") : ssrLooseEqual(form.value.role, "admin")) ? " selected" : ""}>Admin</option><option value="partner"${ssrIncludeBooleanAttr(Array.isArray(form.value.role) ? ssrLooseContain(form.value.role, "partner") : ssrLooseEqual(form.value.role, "partner")) ? " selected" : ""}>Partner</option></select></div><div class="col-md-6 d-flex align-items-end"><div class="form-check"><input${ssrIncludeBooleanAttr(Array.isArray(form.value.is_verified) ? ssrLooseContain(form.value.is_verified, null) : form.value.is_verified) ? " checked" : ""} class="form-check-input" type="checkbox" id="verifiedCheck"><label class="form-check-label" for="verifiedCheck"> Verified User </label></div></div><div class="col-md-6"><label class="form-label"> Password `);
      if (isEdit.value) {
        _push(`<small>(leave empty to keep current)</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><input${ssrRenderAttr("value", form.value.password)} type="password" class="form-control"${ssrIncludeBooleanAttr(!isEdit.value) ? " required" : ""}></div><div class="col-12"><label class="form-label">Bio</label><textarea class="form-control" rows="3">${ssrInterpolate(form.value.bio)}</textarea></div></div><div class="mt-4 d-flex justify-content-end gap-2"><button type="button" class="btn btn-secondary"> Cancel </button><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""}>`);
      if (loading.value) {
        _push(`<span class="spinner-border spinner-border-sm me-2"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(isEdit.value ? "Update User" : "Create User")}</button></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=UserForm-DrxaoWb_.mjs.map
