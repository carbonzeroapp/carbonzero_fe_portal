<template>
  <div class="actions-container">
    <h2>Add Record</h2>

    <div class="action-list-container">
      <ActionItem title="Food" record-type="food"></ActionItem>
      <ActionItem title="Transport" record-type="transport"></ActionItem>
      <ActionItem title="Electricity" record-type="electricity"></ActionItem>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.actions-container {
  h2 {
    font-size: 22px;
    font-weight: bold;
  }

  .action-list-container {
    display: flex;
    overflow-x: scroll;

  //  remove scroll
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
<script setup lang="ts">
import ActionItem from 'pages/index/components/ActionItem.vue';
</script>
