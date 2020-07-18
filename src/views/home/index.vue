<template>
  <div class="home">
    <top-nav></top-nav>
    <div class="banner">
      <div class="logo"></div>
      <div class="intro">
        <h1>hai-ui</h1>
        <h2>基于Vue3和Typescript的UI框架</h2>
        <div>
          <router-link to="/docs">查看文档</router-link>|
          <a href>Github</a>
        </div>
      </div>
    </div>
  </div>
</template>  
<script>
import TopNav from "../../components/TopNav.vue";
export default {
  name: "Docs",
  components: {
    TopNav
  }
};
</script>  
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .intro {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
    background: lightgreen;
  }
}
</style>  