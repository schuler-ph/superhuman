// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    typeCheck: true,
    strict: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  app: {
    head: {
      title: "Superhuman",
      meta: [
        {
          name: "description",
          content: "Self-improvement and self-tracking app."
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        }
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
    public: {
      //
    }
  }
})
