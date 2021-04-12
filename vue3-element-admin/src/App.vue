<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Demo from "@/views/demo/Demo.vue";

export default defineComponent({
  name: "App",
  components: {
    Demo,
  },
});
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  img {
  }
}
</style>