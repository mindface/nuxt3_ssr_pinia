<!-- Please remove this file from your project -->
<template>
  <client-only>
    <div class="method-view">
      <section class="section">
        <article class="article">| article</article>
        <div class="todo-box">
          <div class="todo-input-box">
            <input type="text" v-model="title" />
            <input type="text" v-model="body" />
            <input type="date" v-model="date" />
            <input type="submit" value="add" @click="addMethodAction" />
          </div>
          <div class="todo-box" v-for="(item, index) in methods" :key="index">
            <methods-carder :item="item" @set-method="setMethod" />
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
import MethodsCard from "./MethodsCard.vue";

export default defineNuxtComponent({
  name: "MethodsView",
  components: {
    MethodsCard,
  },
  setup() {
    const methodStore = useMethodStore();
    const { getMethod, addMethod } = methodStore;
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

    const setMethod = () => {
      getMethod();
    };

    const setUpdateMethod = (item: Method) => {
      title.value = item.title;
      body.value = item.body;
      methodItem.value = { ...item };
    };

    const addMethodAction = async () => {
      const addItem = {
        id: methods.value.length + 1,
        title: title.value,
        body: body.value,
        cycleTypeIeds: date.value.replace(/-/g, ""),
        date: "",
        status: "run",
      };
      addMethod(addItem);
    };

    onMounted(async () => {
      setMethod();
    });

    return {
      methods,
      setMethod,
      setUpdateMethod,
      addMethodAction,
      title,
      body,
      date,
    };
  },
});
</script>
