<template>
<v-app>
   <v-main>
  <v-container class="pa-4 text-center">
    <v-row class="fill-height"
      align="center"
      justify="center">
      <template v-for="(m, i) in modules" >
        <v-col cols="12" sm="3" :key="i">
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :to="m.to"
              hover
              nuxt
            height="250">
              <v-card-text class="text-center">
                <v-icon size="50" color="primary" class="mb-4">{{
                  m.icon
                }}</v-icon>
                <h1 class="title text-uppercase">{{ m.title }}</h1>
                <h2 class="subtitle-2 primary--text">{{ m.desc }}</h2>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
 
      <nuxt-child />
    </v-main>
</v-app>
</template>

<script>
export default {
  layout: "app-bar",
  data() {
    return {
      modules: [
        {
          title: "Basic",
          icon: "$vuetify.icons.book",
          to: "/app/basic",
          desc: "Basic Data",
          role: "core:admin"
        },

        {
          title: "payment",
          icon: "$vuetify.icons.briefcase",
          to: "/app/payment",
          desc: "",
          role: "core:approver"
        },

        {
          title: "Services",
          icon: "$vuetify.icons.cogs",
          to: "/app/services/users",
          desc: "Services"
        },

        {
          title: "Users",
          icon: "$vuetify.icons.users",
          to: "/app/users/users",
          desc: "Manage Core Users",
          role: "core:admin"
        }
      ]
    };
  },
  head() {
    return {
      title: "Dashbord"
    };
  }
};
</script>
