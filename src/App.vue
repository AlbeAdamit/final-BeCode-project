<template>
  <div id="app">
    <RwvHeader />
    <router-view></router-view>
    <RwvFooter />
  </div>
</template>

<script>
import RwvHeader from "@/components/TheHeader.vue";
import RwvFooter from "@/components/TheFooter.vue";
export default {
  name: "App",
  components: {
    RwvHeader,
    RwvFooter
  }
};
</script>

<style></style>