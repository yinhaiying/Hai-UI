<template>
  <div>
    <router-view />
  </div>
</template>

<script type = "module">
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>
