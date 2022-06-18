<template>
<div>
  <span>oneToMany pattern</span>
  <v-row>
    <v-col>
      <v-card class='pa-1 d-flex justify-end'>
        <v-btn @click='select'>조회</v-btn>
        <v-btn @click='add'>추가</v-btn>
        <v-btn>삭제</v-btn>
        <v-btn>확인</v-btn>
        <v-btn>취소</v-btn>
        <v-btn>저장</v-btn>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card>
        <v-data-table :headers='headers' :items='items' @click:row='selectRow'></v-data-table>
      </v-card>
    </v-col>
    <v-col>
      <v-card class='pa-3'>
         <v-text-field v-model= "item.callNumber" :v-text= "item.callNumber" label='발신번호' @change='changed(item,"callNumber",$event)'></v-text-field>
         <v-text-field v-model= "item.manager" :v-text= "item.manager" label='담당자' @change='changed(item,"manager",$event)'></v-text-field>
         <v-text-field v-model= "item.group" :v-text= "item.group" label='조직'></v-text-field>
         <v-text-field v-model= "item.states" :v-text= "item.states" label='상태'></v-text-field>
         <v-text-field v-model= "item.memo" :v-text= "item.memo" label='메모'></v-text-field>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      headers: [
        {text:'발신번호', value:'callNumber'},
        {text:'담당자', value:'manager'},
        {text:'조직', value:'group'},
        {text:'상태', value:'states'},
        {text:'메모', value:'memo'},
      ],
      items:[],
      item:{}
    }
  },
  methods:{
    select:function(){
      this.$data.items = this.$store.state.dataTable.list
    },
    add:function(){
      this.$store.commit("dataTable/add")
    },
    selectRow:function(item){
      //this.$store.commit("dataTable/changed",item);
      this.item = item;
    },
    changed:function(item,name,event){
      console.log(event);
      console.log({...item,manager:event});
      this.$store.commit("dataTable/changed",{...item,manager:event})
    }
  }
}
</script>
