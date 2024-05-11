import { ref, computed } from "vue";
import { defineStore } from "pinia";

export interface Method {
  id: number;
  title: string;
  body: string;
  date: string;
  cycleTypeIeds: string;
  status: string;
}

export const useMethodStore = defineStore("method", () => 
  {
    const methods = ref<Method[]>([]);
    async function getMethod(items: Method[]) {
      methods.value = [...items];
    }

    function addMethod(item: Method) {
      methods.value = [...methods.value, item];
    }
    function removeMethod(id: number) {
      const reTodo = methods.value.filter((item, index) => {
        if(id !== item.id ) {
          return item;
        }
      });
      methods.value = reTodo;
    }
    return { methods, getMethod, addMethod, removeMethod };
  }
);
