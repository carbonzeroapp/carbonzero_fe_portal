<template>
  <div class="actions-container">
    <h2>Add Record</h2>

    <div class="action-list-container">
      <ActionItem v-for="recordType in recordTypes"
                  :key="recordType.id"
                  :id="recordType.id"
                  :title="recordType.name"
                  :record-type="recordType.type"></ActionItem>
    </div>
  </div>
</template>
<script setup lang="ts">
import ActionItem from 'pages/index/components/ActionItem.vue';
import { recordTypes } from 'src/data';

</script>
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
