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
      // Disabling no-explicit-any rule
      "@typescript-eslint/no-explicit-any": "off",
      // Allowing missing "key" props
      "react/jsx-key": "off",
      // Warning for useEffect missing dependency
      "react-hooks/exhaustive-deps": "warn",
      // Encouraging use of const for reassigned variables
      "prefer-const": "warn",
      // Disallowing var usage
      "no-var": "warn",
    },
  },
];

export default eslintConfig;
