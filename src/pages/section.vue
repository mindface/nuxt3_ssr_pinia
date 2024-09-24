<template>
  <div class="wrapper">
    <section class="section">section</section>
    <button @click="getData()">get</button>
    <button @click="postData()">post</button>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from "#app";

export default defineNuxtComponent({
  name: "SectionPage",
  setup(props, ctx) {
    const getData = async () => {
      const res = await fetch("/api/products/get-prodcts");
      const data = await res.json();
      console.log(data);
    }
    const postData = async () => {
      const formData = new FormData();
      formData.append("ttt","next");
      const res = await fetch("/api/products/get-prodcts",{
        method: "POST",
        body: formData
      });
      const data = await res.json();
      console.log(data); 
    }

    return {
      getData,
      postData
    }
  },
});
</script>
