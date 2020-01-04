import Vue from 'vue';
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        message: "",
        todos: [
            // {id: 1, text: "todo課題1" },
            // {id: 2, text: "todo課題2" },
            // {id: 3, text: "todo課題3" },
            // {id: 4, text: "todo課題4" },
        ]
    },
    mutations: {
        submitTodo(state, newTodo){
            state.todos.push(newTodo)
        },
    },
    actions: {
        submitTodo(context, newTodo){
            context.commit('submitTodo', newTodo)
        }
    }
});