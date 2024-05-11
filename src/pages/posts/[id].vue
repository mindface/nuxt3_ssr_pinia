<script lang="ts">
import { useRoute, defineNuxtComponent } from "#app";
import { ref } from "vue";

export default defineNuxtComponent({
  name: "[id]-post",
  setup() {
    const route = useRoute();
    const id = ref(route.params.id);
    return {
      id,
    };
  },
});
</script>

<template>
  <div class="wrapper">id {{ id }}</div>
</template>
