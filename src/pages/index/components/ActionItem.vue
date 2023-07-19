<template>
  <div class="action-item">
    <RecordIcon :record-type="recordType"></RecordIcon>
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import RecordIcon from 'components/RecordIcon.vue';
import { RecordTypes } from 'src/types';

defineProps<{
  recordType: RecordTypes,
  title: string
}>();

</script>
<style lang="scss" scoped>
.action-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $green-lighter;
  min-width: 120px;
  max-width: 120px;
  height: 200px;
  border-radius: 20px;
  padding: 16px;
  cursor: pointer;
  transition: scale 0.4s ease-in-out;
  margin-right: 10px;

  &:hover {
    scale: 1.05;
  }

  .title {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
