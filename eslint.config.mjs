import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import importHelpers from "eslint-plugin-import-helpers";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: compat.extends("next/core-web-vitals", "prettier"),

    plugins: {
      prettier,
      "import-helpers": importHelpers,
    },

    rules: {
      "import-helpers/order-imports": [
        "warn",
        {
          newlinesBetween: "never",

          groups: [
            ["/^react/", "/^(next|(next/.*))$/"],
            "absolute",
            "module",
            "/^@/.*/",
            ["parent", "sibling", "index"],
          ],

          alphabetize: {
            order: "asc",
            ignoreCase: true,
          },
        },
      ],

      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "no-console": "warn",
    },
  },
]);
