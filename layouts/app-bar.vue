<template>
<v-app>
  <div>
    <v-app-bar app
      color="primary"
      dark
      prominent
     shrink-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title><v-icon>$vuetify.icons.users</v-icon> Debre Gelila User Mangement System</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>$vuetify.icons.usercircle</v-icon>
      </v-btn>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
    <v-divider></v-divider>
    <nuxt />
    <v-footer padless color="primary" light>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Debre Gelila</strong>
    </v-col>
  </v-footer>
</v-app>
</template>