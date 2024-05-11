<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
const id = ref(route.params.id);
</script>

<template>
  <div class="wrapper">
    id {{ id }}
  </div>
</template>
