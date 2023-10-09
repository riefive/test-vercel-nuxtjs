import quasarIconSet from 'quasar/icon-set/material-icons'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui', '@unocss/nuxt'],
  quasar: {
    iconSet: quasarIconSet,
  },
})
