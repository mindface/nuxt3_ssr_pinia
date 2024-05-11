<!-- Please remove this file from your project -->
<template>
<header class="header">
  | header
  <div class="inner">
    <nuxt-link to="/">home</nuxt-link>
    <nuxt-link to="/about">about</nuxt-link>
    <nuxt-link to="/section">section</nuxt-link>
  </div>
</header>
</template>

<script>
export default {
  name: 'BaseHeader',
  setup() {
    return {}
  }
}
</script>
