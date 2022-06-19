<template>
<div>
  <span>oneToMany pattern</span>
  <v-row>
    <v-col>
      <v-card class='pa-1 d-flex justify-end'>
        <v-btn @click=''>조회</v-btn>
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
        <v-select
          v-model="enabled"
          :items="slots"
          label="Slot"
          clearable
        ></v-select>
        <v-data-table
          :headers="headerArray"
          :items="itemArray"
          hide-default-footer
          item-key="name"
          class="elevation-1"
        >
          <template
            v-slot:body="{ items }"
          >
            <tbody>
            <tr
              v-for="(item,index) in items"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
              <td>CONTENT</td>
              <td>CONTENT</td>
              <td>CONTENT</td>
              <td>CONTENT</td>
            </tr>
            </tbody>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
    <v-col>
      <v-card class='pa-3'>
<!--         <v-text-field :value= "item.callNumber"  label='발신번호' @change='changed("callNumber",$event)'></v-text-field>-->
<!--         <v-text-field :value= "item.manager"  label='담당자' @change='changed("manager",$event)'></v-text-field>-->
<!--         <v-text-field :value= "item.group"  label='조직'></v-text-field>-->
<!--         <v-text-field :value= "item.states"  label='상태'></v-text-field>-->
<!--         <v-text-field :value= "item.memo"  label='메모'></v-text-field>-->
      </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script>

import {mapGetters,mapState} from "vuex";

export default {
  data () {
    return {
      enabled: null,
      search: null,
      headerArray: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
    }
  },

  mounted:{
    ...mapState({
      itemArray:"dataTable/list"
    })
  },
  computed: {
    showSelect () {
      return this.isEnabled('header.data-table-select') || this.isEnabled('item.data-table-select')
    },
    hideHeaders () {
      return !this.showSelect
    },
    isLoading () {
      return this.isEnabled('progress')
    },
  },

  watch: {
    enabled (slot) {
      if (slot === 'no-data') {
        this.items = []
      } else if (slot === 'no-results') {
        this.search = '...'
      } else {
        this.search = null
        this.items = desserts
      }
    },
  },

  methods: {
    isEnabled (slot) {
      return this.enabled === slot
    },
  },
}
</script>
