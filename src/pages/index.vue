<template>
  <div class="wrapper">
    <methods-view />
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from "#app";
import MethodsView from "../components/MethodsView.vue";

export default defineNuxtComponent({
  name: "IndexPage",
  components: {
    MethodsView,
  },
});
</script>
