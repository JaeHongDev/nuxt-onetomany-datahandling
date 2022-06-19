
export const state = () => ({
  form:{
    id:"",
    password:"",
  }
})

export const getters = {
  getForm:function(state){
    return state.form
  }
}

export const mutations = {
  changeForm(state,name,value){
    Object.assign(state, {name:value});
  },
  changeId(state,id){
    state.form.id = id;
  }
}
