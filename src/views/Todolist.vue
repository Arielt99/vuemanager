<template>
    <div>
        <button type="button" @click="delallTask()"> delete all </button>
        <input type="text" @keyup.enter="addTask()" v-model="newTask" >
        <button type="button" @click="addTask()"> add </button>
        <input type="text" v-model="search" placeholder="Search task.."/>
        <ul>
            <li v-for="(item, index) in tasks">
                <input type="text" v-model="item.content" >
                <button type="button" @click="deleteTask(index)"> x </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                newTask: null,
                items:[
            {content:"ABC"},
            {content:"angus"},
            {content:"test"},
        ],
                search:"",
            }
        },
        methods:{
            addTask(){
                if (this.newTask !== null){
                    let newId = this.items.length
                    this.items.push({
                        Id : newId,
                        content : `${this.newTask}`
                    })
                this.newTask = null
                
                }
            },
            deleteTask(index){
                this.items.splice(index, 1)
            },
            delallTask(index){
                this.items.splice(index)
            },
            editTask(index){
                if (this.item.content !== null){
                this.tasks[index].content = `${this.item.content}`
                }
            },
        },
        computed:{
            tasks (){
             return this.items.filter(item =>{
                return item.content.toLowerCase().includes(this.search.toLowerCase())
            })
            },
        },
    }

</script>

<style>
*{
    outline:none;
}
button:hover{
    cursor: pointer;
}
ul{
    list-style:none;
}
</style>