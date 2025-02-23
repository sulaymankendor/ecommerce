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
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": "allow-with-description", // Allow @ts-ignore with a description
          "ts-expect-error": "allow-with-description", // Allow @ts-expect-error with a description
        },
      ],
      "@typescript-eslint/no-explicit-any": "off", // Disable no-explicit-any rule
      "react-hooks/exhaustive-deps": "warn", // Show warnings for missing dependencies in useEffect
    },
  },
];

export default eslintConfig;
