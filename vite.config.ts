import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import monkey, { cdn, util } from "vite-plugin-monkey";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/

export default ({ mode }) => {
  const dev = mode == "development";
  return defineConfig({
    plugins: [
      Vue(),
      AutoImport({
        imports: [util.unimportPreset, "vue"],
        resolvers: [ElementPlusResolver({ importStyle: false })],
      }),
      Components({ resolvers: [ElementPlusResolver({ importStyle: false })], }),
      monkey({
        entry: "src/main.ts",
        userscript: {
          icon: "https://vitejs.dev/logo.svg",
          namespace: "npm/vite-plugin-monkey",
          match: ["*://*/**"],
          resource: {
            element:
              "https://registry.npmmirror.com/element-plus/2.7.2/files/dist/index.css",
           
          },
        },
        build: {
          externalGlobals: {
       
            vue: cdn
              .npmmirror("Vue", "dist/vue.global.prod.js")
               ,
            "element-plus/es": cdn.npmmirror(
              "ElementPlus",
              "dist/index.full.min.js",
            ),
         
          },
        },
      }),
    ],
    build: {
      minify: false,
    },
  });
};
