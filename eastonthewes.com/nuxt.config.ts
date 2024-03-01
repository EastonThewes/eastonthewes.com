// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//     modules: [    '@nuxtjs/tailwindcss'  ]
// })

export default {
    target:'static',
    modules: [    '@nuxtjs/tailwindcss'  ],
    nitro: {
        prerender: {
          autoSubfolderIndex: false
        }
      }
}




