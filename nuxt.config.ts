// https://nuxt.com/docs/api/configuration/nuxt-config

// nuxt.config.js
export default defineNuxtConfig({
  // npm i @pinia/nuxt
  modules: ["@pinia/nuxt"],
  //告訴nuxt 這資料夾為自動導入
  imports: {
    dirs: ["stores"],
  },
});
