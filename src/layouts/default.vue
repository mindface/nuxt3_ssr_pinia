<script lang="ts">
import BaseHeader from "../components/BaseHeader.vue";
export default {
  name: 'default',
  components: {
    BaseHeader
  },
  setup() {
    return {}
  }
}
</script>

<template>
<div class="wrapper-box">
  <base-header />
  <slot />
</div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>