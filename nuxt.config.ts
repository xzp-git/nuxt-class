import AutoImport from "unplugin-auto-import/vite";

export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true,
  },
  plugins: [
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-imports.d.ts",
    }),
  ],
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
    "@unocss/nuxt",
  ],
  unocss: {
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
  },
});
