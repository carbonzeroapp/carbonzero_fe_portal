<template>
  <div id="main">
    <router-view />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
body {
  background: $color-light-grey !important;
}
#q-app {
  display: flex;
  justify-content: center;
}
#main {
  background: #fff !important;
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
}
</style>
