// ==UserScript==
// @name       monkey-bug
// @namespace  npm/vite-plugin-monkey
// @version    0.0.0
// @author     monkey
// @icon       https://vitejs.dev/logo.svg
// @match      *://*/**
// @require    https://registry.npmmirror.com/vue/3.4.27/files/dist/vue.global.prod.js
// @require    https://registry.npmmirror.com/element-plus/2.7.3/files/dist/index.full.min.js
// @resource   element  https://registry.npmmirror.com/element-plus/2.7.2/files/dist/index.css
// @grant      GM_addStyle
// @grant      GM_getResourceText
// ==/UserScript==

(function (vue, es) {
  'use strict';

  const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("span", null, "This is a message", -1);
  const _hoisted_2 = { class: "dialog-footer" };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const dialogVisible = vue.ref(false);
      const handleClose = (done) => {
        es.ElMessageBox.confirm("Are you sure to close this dialog?").then(() => {
          done();
        }).catch(() => {
        });
      };
      return (_ctx, _cache) => {
        const _component_el_button = es.ElButton;
        const _component_el_dialog = es.ElDialog;
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createVNode(_component_el_button, {
            plain: "",
            onClick: _cache[0] || (_cache[0] = ($event) => dialogVisible.value = true)
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Click to open the Dialog ")
            ]),
            _: 1
          }),
          vue.createVNode(_component_el_dialog, {
            modelValue: vue.unref(dialogVisible),
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.isRef(dialogVisible) ? dialogVisible.value = $event : null),
            title: "Tips",
            width: "500",
            "before-close": handleClose
          }, {
            footer: vue.withCtx(() => [
              vue.createElementVNode("div", _hoisted_2, [
                vue.createVNode(_component_el_button, {
                  onClick: _cache[1] || (_cache[1] = ($event) => dialogVisible.value = false)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("Cancel")
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[2] || (_cache[2] = ($event) => dialogVisible.value = false)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" Confirm ")
                  ]),
                  _: 1
                })
              ])
            ]),
            default: vue.withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 64);
      };
    }
  });
  var _GM_addStyle = /* @__PURE__ */ (() => typeof GM_addStyle != "undefined" ? GM_addStyle : void 0)();
  var _GM_getResourceText = /* @__PURE__ */ (() => typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0)();
  var ele = _GM_getResourceText("element");
  _GM_addStyle(ele);
  vue.createApp(_sfc_main).mount(
    (() => {
      const app = document.createElement("div");
      document.body.append(app);
      return app;
    })()
  );

})(Vue, ElementPlus);