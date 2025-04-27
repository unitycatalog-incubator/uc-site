import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: ["pnpm-lock.yaml", "pnpm-workspace.yaml"],
  },
  { files: ["**/*.{js,mjs,cjs}"] },
  { languageOptions: { globals: globals.browser } },
  importPlugin.flatConfigs.recommended,
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "import/no-named-as-default-member": "off",
      "import/no-unresolved": "off",
      "import/order": ["error"],
    },
  },
];
