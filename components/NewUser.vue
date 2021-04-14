<template>
  <v-app>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          Personal Information
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
         Location And  Family Information
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
            <v-form ref="form_one">
              <v-row>
                <v-col cols="6" sm="12">
                  <v-autocomplete label="Ye Nesha Abate" outlined>
                  </v-autocomplete>
                </v-col>
                <v-col cols="6" sm="3">
                  <v-text-field label="Full Name " outlined>
                  </v-text-field>
                </v-col> 
                <v-col cols="6" sm="3">
                  <v-text-field label="Grand Father Name " outlined>
                  </v-text-field>
                </v-col> 
                <v-col cols="6" sm="3">
                  <v-text-field label="Kersetena Name " outlined>
                  </v-text-field>
                </v-col> 
                <v-col cols="6" sm="1">
                  <v-text-field label="Age" outlined>
                  </v-text-field>
                </v-col> 
                <v-col cols="6" sm="2">
                  <v-text-field label="job" outlined>
                  </v-text-field>
                </v-col> 
                <v-col cols="6" sm="3">
                  <v-text-field label="Wife or Hasbund Name" outlined>
                  </v-text-field>
                </v-col> 
                <v-col cols="6" sm="3">
                  <v-text-field label="Grand Father Name " outlined>
                  </v-text-field>
                </v-col> 
                <v-col cols="6" sm="3">
                  <v-text-field label="Kersetena Name " outlined>
                  </v-text-field>
                </v-col> 
                <v-col cols="6" sm="1">
                  <v-text-field label="Age" outlined>
                  </v-text-field>
                </v-col> 
                <v-col cols="6" sm="2">
                  <v-text-field label="job" outlined>
                  </v-text-field>
                </v-col> 
              </v-row>
            </v-form>
          
            <v-btn text color="secondary" class="ma-2" outlined to="/app/basic">
            Cancel
          </v-btn>

          <v-btn color="primary" @click="e1 = 2" class="ma-2" outlined>
            Continue
          </v-btn>

          
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="200px">

          </v-card>
          <v-btn text color="secondary" class="ma-2" outlined @click="e1=1">
            <v-icon left> $vuetify.icons.back</v-icon>
            back
          </v-btn>
          <v-btn color="primary" @click="e1 = 3" class="ma-2" outlined>
            Continue
          </v-btn>

          
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
          <v-btn text color="secondary" class="ma-2" outlined @click="e1=2">
            <v-icon left> $vuetify.icons.back</v-icon>
            back
          </v-btn>

          <v-btn color="primary" @click="e1 = 4" outlined class="ma-2">
            Continue
          </v-btn>

          
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
          <v-btn text color="secondary" class="ma-2" outlined @click="e1=3">
            <v-icon left> $vuetify.icons.back</v-icon>
            back
          </v-btn>

          <v-btn color="primary" to="/app/basic" class="ma-2" outlined
            ><v-icon left>$vuetify.icons.check</v-icon>
            done
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
