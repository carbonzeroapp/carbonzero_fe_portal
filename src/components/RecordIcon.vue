<template>
  <div class="icon">
    <q-icon :name="iconName" />
  </div>
</template>
<script setup lang="ts">
import { RecordTypes } from 'src/types';
import { computed } from 'vue';

interface Props {
  recordType: RecordTypes
}
const props = withDefaults(defineProps<Props>(), {});

const recordTypeIconMap: { [key in RecordTypes]: string} = {
  food: 'food_bank',
  transportation: 'directions_bus',
  electricity: 'bolt',
};

const iconName = computed(() => recordTypeIconMap[props.recordType]);
</script>
<style lang="scss" scoped>
.icon {
  display: flex;
  justify-content: center;
  color: $green-lighter;
  align-items: center;
  background-color: $primary;
  font-size: 40px;
  border-radius: 100%;
  width: 70px;
  height: 70px;
}
</style>
