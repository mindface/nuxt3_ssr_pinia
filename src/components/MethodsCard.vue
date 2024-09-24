<template>
  <div class="card p-1">
    <p class="card-item">{{ methodItem.title }}</p>
    <p class="card-item">{{ methodItem.body }}</p>
    <p class="card-item">{{ methodItem.date }}</p>
    <p class="card-item">
      <button @click="() => setUpdateMethod(methodItem)">
        update {{ updateSwitch ? "close" : "view" }}
      </button>
    </p>
    <p class="card-item">
      <button @click="() => removeMethodAction(methodItem.id)">remove</button>
    </p>
    <div v-if="updateSwitch" class="card-update">
      <input type="text" v-model="cardTitle" />
      <input type="text" v-model="cardBody" />
      <button @click="() => updateMethodAction()">update</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from "#app";
import { onMounted, watch } from "vue";
import type { Method } from "@/store/method";
import { useMethodStore } from "@/store/method";
import type { PropType } from "vue";

export default defineNuxtComponent({
  name: "MethodsCard",
  props: {
    item: Object as PropType<Method>,
  },
  emits: ["setMethod"],
  setup(props, { emit }) {
    const methodStore = useMethodStore();
    const { updateMethod, removeMethod } = methodStore;
    const updateSwitch = ref(false);
    const cardTitle = ref("");
    const cardBody = ref("");
    const methodItem = ref<Method>({
      id: 0,
      title: "",
      body: "",
      date: "",
      cycleTypeIeds: "",
      status: "",
    });

    const setUpdateMethod = (item: Method) => {
      updateSwitch.value = !updateSwitch.value;
      if (updateSwitch.value) {
        methodItem.value = item;
        cardTitle.value = methodItem.value.title;
        cardBody.value = methodItem.value.body;
      }
    };

    const updateMethodAction = async () => {
      const updateItem = {
        ...methodItem.value,
        title: cardTitle.value,
        body: cardBody.value,
      };
      updateMethod(updateItem);
    };

    const removeMethodAction = async (id: number) => {
      removeMethod(id);
    };

    watch(
      () => props.item!.title,
      () => {
        if (props.item) {
          methodItem.value = props.item;
        }
      },
    );
    watch(
      () => props.item!.body,
      () => {
        if (props.item) {
          methodItem.value = props.item;
        }
      },
    );

    onMounted(() => {
      if (props.item) {
        methodItem.value = props.item;
      }
    });

    return {
      updateSwitch,
      setUpdateMethod,
      cardTitle,
      cardBody,
      methodItem,
      updateMethodAction,
      removeMethodAction,
    };
  },
});
</script>
