import icons from "./icons"
import colors from "vuetify/es5/util/colors"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'debre_gelila_front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  loading: { color: "#009688" },
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/fontawesome"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [ "@nuxtjs/toast"
  ],
  toast: {
    position: "bottom-right",
    duration: 2000,
    keepOnHover: true,
    register: [
      {
        name: "deleted",
        message: "Deleted Successfully",
        options: {
          type: "error"
        }
      },
      {
        name: "saved",
        message: "Saved Successfully",
        options: {
          type: "success"
        }
      }
    ]
  },
  vuetify: {
    icons: {
      iconfont: "faSvg",
      values: icons
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#795548",
          accent: "#444f60",
          secondary: "#01579b",
          info: "#009688",
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: "#009688"
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
