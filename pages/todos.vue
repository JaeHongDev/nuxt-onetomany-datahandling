<template>
  <v-row>
    <v-col cols='12'>
      <v-card class='pa-3'>
        <v-row>
          <v-col cols='5'>
            <v-text-field label='입력' v-model='text'></v-text-field>
          </v-col>
          <v-col cols='7'>
            <v-btn @click='save'>저장</v-btn>
            <v-btn @click='cancel'>취소</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col>
      <v-card class='pa-3'>
        <v-row v-for='todo in todos' align='center'>
          <v-col cols='1'>
            <v-checkbox>
            </v-checkbox>
          </v-col>
          <v-col cols='9'>
            <v-text-field v-if='todo.editable === true' :value='todo.text'></v-text-field>
            <v-card-text v-else>{{todo.text}}</v-card-text>
          </v-col>
          <v-col cols='2' v-if='todo.editable'>
            <v-btn fab x-small>
              <v-icon dark @click='todo.editable=false'>mdi-check</v-icon>
            </v-btn>
            <v-btn fab x-small dark>
              <v-icon white>mdi-cancel</v-icon>
            </v-btn>
          </v-col>
          <v-col cols='2' v-if='todo.editable===false'>
            <v-btn fab x-small>
              <v-icon dark @click='todo.editable=true'>
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn fab x-small dark>
              <v-icon white>
                mdi-delete
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>

    </v-col>

  </v-row>
</template>

<script>

let id = 0;
const generateTodo = (text) => ({
  id: id++,
  text,
  checked: false,
  editable: false
})
export default {
  name: "todos",
  data() {
    return {
      text: "",
      todos: [
        {id: 1, text: "할일목록", editable: false, checked: false}
      ]
    }
  },
  methods: {
    save() {
      const value = this.$data.text;
      this.$data.todos.push(generateTodo(value))
      this.$data.text = "";
    },
    cancel() {
      this.$data.text = "";
    },
    changeEditState(id) {
      this.$data.todos.filter(todo => todo.id === id)[0].editable = true
    },
    changeUnEditState(id) {
      this.$data.todos.filter(todo => todo.id === id)[0].editable = false;
    }
  }
}
</script>

<style scoped>

</style>
