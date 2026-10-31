import { defineConfig } from "@vizejs/vite-plugin/vite-plus";

export default defineConfig({
  staged: {
    "*": "vp run check -- --fix",
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
}).withVue({
  languageServer: {
    enabled: true,
    lint: true,
    typecheck: true,
    editor: true,
    ecosystem: true,
    formatting: true,
  },
  linter: { preset: "recommended" },
  typeChecker: {
    tsrsPath: "node_modules/.bin/tsrs",
    checkProps: true,
    checkEmits: true,
    checkTemplateBindings: true,
  },
});
