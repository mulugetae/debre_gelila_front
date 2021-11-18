<template>
  <v-app>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          የ ግል መረጃ
        </v-stepper-step>
        <v-stepper-step :complete="e1 > 2" step="2">
          አድራሻ እና የቤተሰብ መረጃ
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-form ref="form_one">
            <v-row>
              <v-col cols="6" sm="12">
              </v-col>
              <v-col cols="6" sm="12">
                <v-autocomplete
                  v-model="YensehaAbate_Name"
                  :items="items"
                  dense
                  outlined
                  label="የ ንስሀ አባት"
                ></v-autocomplete>
              </v-col>
              <v-col cols="6" sm="3">
                <v-text-field v-model="Fullname" label="ሙሉ ስም" outlined>
                </v-text-field>
              </v-col>
              <v-col cols="6" sm="3">
                <v-text-field
                  v-model="GrandFathername"
                  label="የ አያት ስም"
                  outlined
                >
                </v-text-field>
              </v-col>
              <v-col cols="6" sm="3">
                <v-text-field
                  v-model="Kersetenaname"
                  label="ክርስትና ስም"
                  outlined
                >
                </v-text-field>
              </v-col>
              <v-col cols="6" sm="1">
                <v-text-field v-model="Age" label="እድሜ" outlined>
                </v-text-field>
              </v-col>
              <v-col cols="6" sm="2">
                <v-text-field v-model="Job" label="ስራ" outlined>
                </v-text-field>
              </v-col>
              <v-col cols="6" sm="3">
                <v-autocomplete
                  :items="['female', 'male']"
                  label="ጻታ"
                  v-model="Sex"
                ></v-autocomplete>
              </v-col>
              <v-col cols="6" sm="3">
                <v-autocomplete
                  :items="['single', 'married']"
                  label="የ ጋብቻ ሁኔታ"
                  v-model="MaritialStatus"
                >
                </v-autocomplete>
              </v-col>
              <v-row v-if="MaritialStatus === 'married'">
                <v-col cols="6" sm="3">
                  <v-text-field v-model="Maried.Fullname" label="ሙሉ ስም" outlined>
                  </v-text-field>
                </v-col>
                <v-col cols="6" sm="3">
                  <v-text-field
                    v-model="Maried.GrandFathername"
                    label="የ አያት ስም "
                    outlined
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6" sm="3">
                  <v-text-field
                    v-model="Maried.Kersetenaname"
                    label="ክርስትና ስም"
                    outlined
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6" sm="1">
                  <v-text-field v-model="Maried.Age" label="እድሜ" outlined>
                  </v-text-field>
                </v-col>
                <v-col cols="6" sm="1">
                  <v-text-field v-model="Maried.Job" label="ስራ" outlined>
                  </v-text-field>
                </v-col>
              </v-row>
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
          <v-form ref="form_two">
            <v-row>
              <v-col cols="3" sm="3">
                <v-autocomplete
                  :items="['Addis Abeba']"
                  label="ከተማ"
                  v-model="City"
                  outlined
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="3" sm="3">
                <v-autocomplete
                  :items="['Addis Ketema Kefele Ketema']"
                  label="ክፍለ ከተማ"
                  v-model="SubCity"
                  outlined
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="6" sm="6">
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                      <v-icon left dark> $vuetify.icons.plus</v-icon>
                      የቤተሰብ አባላት
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">family members</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-form ref="form" v-model="valid" lazy-validation>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                label="ሙሉ ስም"
                                v-model="familymeberes.FullName"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                label="ክርስትና ስም"
                                v-model="familymeberes.KerestenaName"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-menu
                                v-model="menu2"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field
                                    v-model="familymeberes.date"
                                    label="BirthDate"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="familymeberes.date"
                                  @input="menu2 = false"
                                ></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="Kersetena Yetenesabet church"
                                v-model="
                                  familymeberes.KersetenaYetenesabetChurch
                                "
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="yezemdena Huneta"
                                v-model="familymeberes.YezemdenaHuneta"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="ስራ"
                                v-model="familymeberes.Job"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-col cols="12">
                                <v-text-field
                                  label="እድሜ"
                                  v-model="familymeberes.Age"
                                ></v-text-field>
                              </v-col>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-autocomplete
                                :items="['female', 'male']"
                                v-model="familymeberes.Sex"
                                label="ጻታ"
                              ></v-autocomplete>
                            </v-col>
                          </v-row>
                        </v-form>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialog = false">
                        Close
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="Save()">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>

              <v-col cols="3" sm="3">
                <v-text-field label="ወረዳ " outlined> </v-text-field>
              </v-col>
              <v-col cols="3" sm="3">
                <v-text-field label="የ ቤት ቁጥር" outlined> </v-text-field>
              </v-col>
              <v-col cols="6" sm="3" v-if="familymeberesAray.length >= 1">
                <v-chip
                  v-for="item in familymeberesAray"
                  :key="item.FullName"
                  class="ma-2"
                  close
                  color="orange"
                  label
                  outlined
                  @click:close="chip4 = false"
                >
                  {{item.FullName}}
                </v-chip>
              </v-col>
            </v-row>
          </v-form>
          <v-btn text color="secondary" class="ma-2" outlined @click="e1 = 1">
            <v-icon left> $vuetify.icons.back</v-icon>
            back
          </v-btn>

          <v-btn color="primary" class="ma-2" outlined @click="done()"
            ><v-icon left>$vuetify.icons.check</v-icon>
            done
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-app>
</template>
<script>
import Home from "./Home.vue";
import {user} from "./interface"
export default {
  components: { Home },
  data() {
    return {
      e1: 1,
      valid: true,
      menu2: false,
      model: null,
      dialog: false,
      MaritialStatus: "",
      familymeberesAray: [],
      familymeberes: {
        FullName: "",
        KerestenaName: "",
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        KersetenaYetenesabetChurch: "",
        YezemdenaHuneta: "",
        Age: "",
        Sex: "",
        Job: ""
      },
      defaultItem: {
        FullName: "",
        KerestenaName: "",
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        KersetenaYetenesabetChurch: "",
        YezemdenaHuneta: "",
        Age: "",
        Sex: "",
        Job: ""
      },
      Maried:{
        Fullname:'',
        GrandFathername:'',
        Kersetenaname:"",
        Age:"",
        Job:"",
      },
      items: ["kebede ", "abebe", "sebuh", "mulugeta"],
      YensehaAbate_Name: null,
      City: "",
      SubCity: "",
      Fullname: "",
      GrandFathername: "",
      Kersetenaname: "",
      Age: "",
      Job: "",
      Sex: "",
      row: null
    };
  },
  methods: {
    test() {
      console.log();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.familymeberes = Object.assign({}, this.defaultItem);
      });
    },
    Save() {
      this.familymeberesAray.push(this.familymeberes);
      console.log(this.familymeberesAray.FullName);
      this.close();
    },
    done() {
      console.log(this.Fullname);
      console.log(this.MaritialStatus);
      console.log(this.Maried);
      console.log(this.familymeberesAray);
      this.$router.replace("/app/basic");
    }
  }
};
</script>
