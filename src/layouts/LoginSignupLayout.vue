<template>
  <div id="login-signup-layout" class="q-pa-xl">
    <header>
      <div class="header-title text-weigh text-weight-bold">
        <slot name="header-title"></slot>
      </div>
      <div class="header-description text-weight-light q-mt-sm">
        <slot name="header-description"></slot>
      </div>
    </header>

    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
header {
  .header-title {
    font-size: 20px;
  }
  .header-description {
    font-size: 12px;
    color: $grey-6;
  }
}
.body {
  margin-top: 40px;
}
</style>
