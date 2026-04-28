import { ref, computed, mergeProps, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderVNode } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const components = {
      section: { tag: "section", class: "container p-4" },
      heading: { tag: "h2", text: "Heading" },
      paragraph: { tag: "p", text: "Paragraph" },
      button: { tag: "button", text: "Button", class: "btn btn-primary" },
      image: { tag: "img", src: "https://via.placeholder.com/400" },
      input: { tag: "input", placeholder: "Input" }
    };
    const tree = ref([]);
    const selected = ref(null);
    const style = ref({
      color: "#000000",
      background: "#ffffff",
      padding: 10,
      radius: 0
    });
    const selectedNode = computed(() => {
      return tree.value.find((n) => n.id === selected.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid h-100" }, _attrs))}><div class="row h-100"><div class="col-2 bg-light border-end p-3"><h5 class="fw-bold">Elements</h5><!--[-->`);
      ssrRenderList(components, (c, key) => {
        _push(`<div class="border rounded p-2 mb-2 bg-white element">${ssrInterpolate(key)}</div>`);
      });
      _push(`<!--]--><hr><button class="btn btn-success w-100 mb-2">Save JSON</button><button class="btn btn-dark w-100">Export HTML</button></div><div class="col-7 p-4 canvas"><h5 class="fw-bold mb-3">Canvas</h5><div class="canvas-area"><!--[-->`);
      ssrRenderList(tree.value, (node) => {
        _push(`<div class="${ssrRenderClass(["canvas-node", node.class, selected.value === node.id ? "selected" : ""])}" style="${ssrRenderStyle(node.style)}">`);
        if (node.tag === "img") {
          _push(`<img${ssrRenderAttr("src", node.src)} class="img-fluid">`);
        } else if (node.tag === "input") {
          _push(`<input${ssrRenderAttr("placeholder", node.placeholder)} class="form-control">`);
        } else {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(node.tag), null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(node.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(node.text), 1)
                ];
              }
            }),
            _: 2
          }), _parent);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="col-3 border-start bg-light p-3"><h5 class="fw-bold">Properties</h5>`);
      if (selectedNode.value) {
        _push(`<div><div class="mb-3"><label class="form-label">Text</label><input${ssrRenderAttr("value", selectedNode.value.text)} class="form-control"></div><div class="mb-3"><label class="form-label">Class</label><input${ssrRenderAttr("value", selectedNode.value.class)} class="form-control"></div>`);
        if (selectedNode.value.tag === "img") {
          _push(`<div class="mb-3"><label>Image URL</label><input${ssrRenderAttr("value", selectedNode.value.src)} class="form-control"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mb-3"><label>Text Color</label><input type="color"${ssrRenderAttr("value", style.value.color)}></div><div class="mb-3"><label>Background</label><input type="color"${ssrRenderAttr("value", style.value.background)}></div><div class="mb-3"><label>Padding</label><input type="range" min="0" max="100"${ssrRenderAttr("value", style.value.padding)}></div><div class="mb-3"><label>Border Radius</label><input type="range" min="0" max="50"${ssrRenderAttr("value", style.value.radius)}></div></div>`);
      } else {
        _push(`<div class="text-muted"> Select element </div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/CMS/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DwXvi--k.mjs.map
