const { createApp } = Vue

  createApp({
    data() {
      return {
        newToDo: '',

        toDoList: [

            {
                text: 'fare i compiti',
                done: 'false',
            },
            {
                text: 'fare la spesa',
                done: 'false',
            },
            {
                text: 'fare esercizio Boolean',
                done: 'true',
            },
        ]
      }
    },
    methods:{
        addToDo(){
            let newTD = {};
            newTD.text = this.newToDo
            newTD.done = false
            this.toDoList.push(newTD);
            this.newToDo= '';
        },
        removeToDo(i){
            console.log(i)
            this.toDoList.splice(i, 1)
        }
    }
  }).mount('#app')