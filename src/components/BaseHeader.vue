<!-- Please remove this file from your project -->
<template>
  <header class="header">
    <div class="logo-box">
      <img src="~/assets/images/science.svg" alt="" class="logo" />
    </div>
    <div class="inner">
      <nuxt-link to="/">home</nuxt-link>
      <nuxt-link to="/about">about</nuxt-link>
      <nuxt-link to="/section">section</nuxt-link>
    </div>
  </header>
</template>

<script>
import { defineNuxtComponent } from "#app";

export default defineNuxtComponent({
  name: "BaseHeader",
  setup() {
    return {};
  },
});
</script>
