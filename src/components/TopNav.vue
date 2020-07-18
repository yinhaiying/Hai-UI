<template>
  <div class="top-nav">
    <div class="logo">
      <router-link to = "/">hai-ui</router-link> 
      </div>
    <ul class="menu">
      <li>文档</li>
      <li>链接</li>
    </ul>
  </div>
</template>

<style lang="scss">
.top-nav {
  background: pink;
  display: flex;
  padding: 16px 0;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    flex-wrap: nowrap;
    li {
      padding-right: 10px;
    }
  }
}
</style>