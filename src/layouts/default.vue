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
