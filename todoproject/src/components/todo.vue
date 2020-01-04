<template>
  <div>
    <h1>ToDoリスト</h1>
    <!-- <h1>{{ msg }}</h1> -->
    <input id="all_btn" type="radio" name="status" value=""  checked>すベて
    <input id="working_btn" type="radio" name="status" value="" >作業中
    <input id="finish_btn" type="radio" name="status" value="">完了

    <table id=todo_list>
        <thead>
            <tr>
                <th>ID</th>
                <th>コメント</th>
                <th>状態</th>
            </tr>
        </thead>

        
        <tbody v-for = "(todo, index) in $store.state.todos.length" :key="todo.id">
            <tr>
                <td>{{$store.state.todos[index].id}}</td>
                <td>{{$store.state.todos[index].text}}</td>
                <td><button>作業中</button></td>
                <td><button>削除</button></td>
            </tr>
        </tbody>

    </table>

    <h2>新規タスクの追加</h2>
    <input type="text" v-model="$store.state.message">
    
    <button id="add_task" @click="submitTodo()" >追加</button>
    <!-- <p>{{$store.state.message}}</p> -->

  </div>
</template>

<script>
export default {
  name: 'Todo',
  methods: {
      submitTodo(){
          const newTodoId = this.$store.state.todos.length
          const newTodotext = this.$store.state.message
          const newTodo = {id: newTodoId, text: newTodotext}
          this.$store.dispatch('submitTodo', newTodo);
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#add_task {
    margin: 10px
}
</style>
