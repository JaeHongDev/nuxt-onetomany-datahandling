const createData = ({
                      callNumber="",
                      manager="",
                      group="",
                      states="",
                      memo=""
                    }) => ({
  callNumber,
  manager,
  group,
  states,
  memo,
})
export const state = () => ({
  list: [{
    callNumber: "1234",
    manager: "1234",
    group: "1234",
    states: "1234",
    memo: "1234",
  }]
})

export const getters ={
  selectedItem(state,id){
    return state.dataTable.list.filter(item=>item.callNumber === callNumber)[0]
  },
}

export const mutations = {
  add(state) {
    state.list.push(createData({}));
  },
  changed(state,targetItem){
    console.log(targetItem.callNumber);
    console.log(targetItem.manager);

    state.list.map(items=> items.callNumber === targetItem.callNumber ? targetItem : items)
  }
}
