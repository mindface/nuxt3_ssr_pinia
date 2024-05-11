<!-- Please remove this file from your project -->
<template>
<div class="method-view">
  <section class="section">
    <article class="article">
      | article
    </article>
    <button @click="addTodo">add</button>
    <div class="todo-box">
      <div class="todo-input-box">
        <input type="text" v-model="title" />
        <input type="text" v-model="body" />
        <input type="date" v-model="date" />
        <input type="submit" value="add" @click="addTodoAction" />
      </div>
      <div class="todo-box" v-for="item, index in todos" :key="index">
        <p>{{ item.title }}</p>
        <p>{{ item.body }}</p>
        <p>{{ item.date }}</p>
        <p><button @click="() => removeTodoAction(item.id)">remove</button></p>
      </div>
    </div>
  </section>
</div>
</template>
  
<script>
import { useTodoStore } from "@/store/todo";
import { storeToRefs } from "pinia";

export default {
  name: 'MethodsView',
  setup() {
      const todoStore = useTodoStore(); 
      const { addTodo, removeTodo } = todoStore;
      const { todos } = storeToRefs(todoStore);

      const title = ref("");
      const body = ref("");
      const date = ref("");

      const addTodoAction = () => {
        addTodo({
          id: todos.value.length+1,
          title: title.value,
          body: body.value,
          date: date.value.replace(/-/g,""),
        });
      }

      const removeTodoAction = (id) => {
        removeTodo(id);
      }

    return {
      todos,
      addTodoAction,
      removeTodoAction,
      title,
      body,
      date
    }
  }
}
</script>
  