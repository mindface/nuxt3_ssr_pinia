import { ref, computed } from "vue";
import { defineStore } from "pinia";

interface Todo {
  id: number;
  title: string;
  body: string;
  date: string;
}

export const useTodoStore = defineStore("todo", () => 
  {
    const todos = ref<Todo[]>([]);
    function addTodo(item: Todo) {
      todos.value = [...todos.value, item];
    }
    function removeTodo(id: number) {
      const reTodo = todos.value.filter((item, index) => {
        if(id !== item.id ) {
          return item;
        }
      });
      todos.value = reTodo;
    }
    return { todos, addTodo, removeTodo };
  },
  {
    persist: {
      storage: persistedState.sessionStorage,
    },
  }
);
