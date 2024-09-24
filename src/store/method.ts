import { defineStore } from "pinia";

export interface Method {
  id: number;
  title: string;
  body: string;
  date: string;
  cycleTypeIeds: string;
  status: string;
}
const baseUrl = "http://localhost:3003";
const headersObj = {"Content-Type": "application/json",}

export const useMethodStore = defineStore(
  "method",
  () => {
    const methods = ref<Method[]>([]);

    async function getMethod() {
      try {
        const res = await fetch(`${baseUrl}/v1/method_infos`, {
          method: "GET",
          headers: headersObj,
        });
        const method = await res.json();
        methods.value = structuredClone(method);
      } catch (error) {
        console.error(error);
      }
    }

    async function addMethod(item: Method) {
      try {
        const res = await fetch(`${baseUrl}/v1/method_infos`, {
          method: "POST",
          headers: headersObj,
          body: JSON.stringify(item),
        });
        await res.json();
        getMethod();
      } catch (error) {
        console.log(error);
      }
    }

    async function updateMethod(item: Method) {
      try {
        const res = await fetch(
          `${baseUrl}/v1/method_infos/${item.id}`,
          {
            method: "PUT",
            headers: headersObj,
            body: JSON.stringify(item),
          },
        );
        await res.json();
        getMethod();
      } catch (error) {
        console.log(error);
      }
    }

    async function removeMethod(id: number) {
      try {
        const res = await fetch(`${baseUrl}/v1/method_infos/${id}`, {
          method: "DELETE",
          headers: headersObj,
          body: JSON.stringify({ id: id }),
        });
        await res.json();
        getMethod();
      } catch (error) {
        console.log(error);
      }
    }
    return { methods, getMethod, addMethod, updateMethod, removeMethod };
  },
  // ローカルストレージを利用した場合にキャッシュで更新されないため回避
  // {
  //   persist: {
  //     storage: persistedState.sessionStorage,
  //   },
  // }
);
