// https://nuxt.com/docs/api/configuration/nuxt-config

// nuxt.config.js
export default defineNuxtConfig({
  // npm i @pinia/nuxt
  modules: ["@pinia/nuxt"],
  //告訴nuxt 這資料夾為自動導入
  imports: {
    dirs: ["stores"],
  },
  // hybrid rendering mode 根據路由選擇要渲染的模式 預設是ssr:true
  routeRules: {
    "/spa": { ssr: false },
    "/static": { static: true },
    "/swr": { swr: true },
  },
});
