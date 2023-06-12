<template>
  <q-card flat :class="[classTypeMap[type], 'text-white card-container']">
    <q-card-section>
      {{ message }}
    </q-card-section>
  </q-card>
</template>
<script lang="ts" setup>
import { AlertTypes } from 'src/types';

defineProps({
  type: {
    type: String as () => AlertTypes,
    validator(value: string) {
      return ['success', 'warning', 'danger', 'info'].includes(value);
    },
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const classTypeMap: Record<string, string> = {
  success: 'bg-positive',
  warning: 'bg-warning',
  danger: 'bg-negative',
  info: 'bg-info',
};
</script>
