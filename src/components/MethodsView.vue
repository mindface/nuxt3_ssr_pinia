<!-- Please remove this file from your project -->
<template>
<client-only>
<div class="method-view">
  <section class="section">
    <article class="article">
      | article
    </article>
    <div class="todo-box">
      <div class="todo-input-box">
        <input type="text" v-model="title" />
        <input type="text" v-model="body" />
        <input type="date" v-model="date" />
        <input type="submit" value="add" @click="addMethodAction" />
        <button @click="updateMethodAction">update</button>
      </div>
      <div class="todo-box" v-for="item, index in methods" :key="index">
        <p>{{ item.title }}</p>
        <p>{{ item.body }}</p>
        <p>{{ item.date }}</p>
        <p><button @click="() => setUpdateMethod(item)">update</button></p>
        <p><button @click="() => removeMethodAction(item.id)">remove</button></p>
      </div>
    </div>
  </section>
</div>
</client-only>
</template>
  
<script lang="ts">
import { onMounted } from "vue";
import { useMethodStore } from "@/store/method";
import type { Method } from "@/store/method";
import { storeToRefs } from "pinia";

export default {
  name: 'MethodsView',
  components: {},
  setup() {
      const methodStore = useMethodStore(); 
      const { getMethod, addMethod, removeMethod } = methodStore;
      const { methods } = storeToRefs(methodStore);

      const title = ref("");
      const body = ref("");
      const date = ref("");

      const methodItem = ref<Method>({
        id: 0,
        title: "",
        body: "",
        date: "",
        cycleTypeIeds: "",
        status: "",
      });

      const setMethod = async () => {
        const res = await fetch("http://localhost:3003/v1/method_infos", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const method = await res.json();
        getMethod(method);
      }

      const setUpdateMethod = (item: Method) => {
        console.log({...item});
        title.value = item.title;
        body.value = item.body;
        methodItem.value = {...item};
      }

      onMounted(async () => {
        setMethod();
      });

      const addMethodAction = async () => {
        const addItem = {
          id: methods.value.length+1,
          title: title.value,
          body: body.value,
          cycleTypeIeds: date.value.replace(/-/g,""),
          status: "run"
        };
        try {
          const res = await fetch(`http://localhost:3003/v1/method_infos`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(addItem)
          });
          const response = await res.json();
          setMethod();          
        } catch (error) {
          console.log(error);
        }
      }

      const updateMethodAction = async () => {
        const updateItem = {...methodItem.value, title: title.value, body: body.value};
        console.log(updateItem);
        try {
          const res = await fetch(`http://localhost:3003/v1/method_infos/${updateItem.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateItem)
          });
          const response = await res.json();
          setMethod();
        } catch (error) {
          console.log(error);
        }
      }

      const removeMethodAction = async (id) => {
        console.log(id);
        try {
          const res = await fetch(`http://localhost:3003/v1/method_infos/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({id: id})
          });
          const response = await res.json();
          setMethod();
        } catch (error) {
          console.log(error);
        }
      }

    return {
      methods,
      setUpdateMethod,
      addMethodAction,
      updateMethodAction,
      removeMethodAction,
      title,
      body,
      date
    }
  }
}
</script>
  