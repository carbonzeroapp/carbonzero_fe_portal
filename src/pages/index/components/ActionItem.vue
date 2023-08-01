<template>
  <div class="action-item" @click="onClick">
    <RecordIcon :record-type="recordType"></RecordIcon>
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import RecordIcon from 'components/RecordIcon.vue';
import { RecordTypes } from 'src/types';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{
  id: number,
  recordType: RecordTypes,
  title: string
}>();

function onClick() {
  router.push({
    name: 'add-record',
    params: {
      recordTypeId: props.id,
    },
  });
}

</script>
<style lang="scss" scoped>
.action-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $green-lighter;
  width: 120px;
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
    word-break: break-word;
  }
}
</style>
