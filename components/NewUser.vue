<template>
  <v-app>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          personal information
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          family information
        </v-stepper-step>

        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 3" step="3">
          payment and other specification
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4">
          transfer
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color="grey lighten-1"></v-card>

          <v-btn color="primary" @click="e1 = 2" class="ma-2" outlined>
            Continue
          </v-btn>

          <v-btn text color="secondary" class="ma-2" outlined>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 3" class="ma-2" outlined>
            Continue
          </v-btn>

          <v-btn text color="secondary" class="ma-2" outlined>
            <v-icon left> $vuetify.icons.back</v-icon>
            back
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 4" outlined class="ma-2">
            Continue
          </v-btn>

          <v-btn text color="secondary" class="ma-2" outlined>
            <v-icon left> $vuetify.icons.back</v-icon>
            back
          </v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 1" class="ma-2" outlined
            ><v-icon left>$vuetify.icons.check</v-icon>
            done
          </v-btn>

          <v-btn text color="secondary" class="ma-2" outlined>
            <v-icon left> $vuetify.icons.back</v-icon>
            back
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      e1: 1
    };
  }
};
</script>
