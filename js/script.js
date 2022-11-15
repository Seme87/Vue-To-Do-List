const { createApp } = Vue

  createApp({
    data() {
      return {
        newToDo: '',

        toDoList: [

            {
                text: 'fare i compiti',
                done: 'true'
            },
            {
                text: 'fare la spesa',
                done: 'false'
            },
            {
                text: 'fare esercizio Boolean',
                done: 'true'
            },
        ]
      }
    },
    methods:{
        addToDo(){
           this.toDoList.push(this.newToDo)
        }
    }
  }).mount('#app')