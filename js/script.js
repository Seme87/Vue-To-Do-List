const { createApp } = Vue

  createApp({
    data() {
      return {
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
           console.log('submittato') 
        }
    }
  }).mount('#app')