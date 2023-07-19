<template>
  <div id="main-page-container">
    <div id="content">
      <router-view/>
    </div>
    <div id="navigations">
      <NavigationBar/>
    </div>
  </div>
</template>
<script setup lang="ts">
import NavigationBar from 'components/NavigationBar.vue';
</script>
<style lang="scss" scoped>
#main-page-container {
  height: 100%;
  position: relative;

  #content {
    height: 100%;
    max-height: 100%;
    margin-bottom: 70px;
  }

  #navigations {
    position: fixed;
    height: 70px;
    bottom: 0;
    width: 100%;
    max-width: $page-max-width;
  }
}
</style>
