import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "off", // Change "error" to "warn" or "off" if needed
        { 
          "argsIgnorePattern": "^_", // Ignore unused variables prefixed with `_`
          "varsIgnorePattern": "^_", // Ignore unused variables prefixed with `_`
        }
      ],
    },
  },
];

export default eslintConfig;
