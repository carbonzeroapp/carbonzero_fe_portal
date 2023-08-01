<template>
  <header>
    {{ title }}
  </header>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string
}>();
</script>
<style scoped>
header {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  padding: 30px 0;
}
</style>
