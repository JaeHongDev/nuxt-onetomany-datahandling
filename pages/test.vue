<template>
  <v-row>
    <v-col>
      <v-card>
        ID:<span >{{form.id}}</span><br>
        Password:<span >{{}}</span>
      </v-card>
    </v-col>
    <v-col>
      <v-card class='pa-3'>
        <v-text-field :value='form.id' label='id' @change='changed($event,"id")'></v-text-field>
        <!--<v-text-field v-model='' label='password'></v-text-field>-->
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapGetters,mapMutations} from "vuex";
export default {
  name: "test",
  data(){
    return{
      form:this.$store.state.test.form
    }
  },
  methods:{
    changed(value,name){
      console.log(value,name);
      this.$store.commit("test/changeForm",name,value);
    }
  }
}
</script>

<style scoped>

</style>
