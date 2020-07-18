<template>
  <div class="docs">
    <top-nav></top-nav>
    <div class="content">
      <div class="aside">
        <docs-aside></docs-aside>
      </div>
      <div class="main">
        <docs-main></docs-main>
      </div>
    </div>
  </div>
</template>  
<script>
import TopNav from "../../components/TopNav.vue";
import DocsAside from "./aside.vue";
import DocsMain from "./main.vue";
export default {
  name: "Docs",
  components: {
    TopNav,
    DocsAside,
    DocsMain
  }
};
</script>  

<style lang="scss" scoped>
.docs {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .content {
    display: flex;
    flex-grow: 1;
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    > .aside {
      background: green;
      width: 200px;
    }
    > .main {
      background: red;
      flex-grow: 1;
    }
  }
}
</style>  