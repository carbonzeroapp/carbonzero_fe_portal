<template>
  <q-btn
    :loading="isLoading"
    :class="`${buttonClassByType} ${buttonClassBySize} text-weight-bold`"
    :label="label"
    :type="type"
    rounded
    no-caps
  />
</template>
<script setup lang="ts">
import { ButtonSizes, ButtonTypes } from 'src/types';
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String as () => ButtonTypes,
    required: true,
  },
  size: {
    type: String as () => ButtonSizes,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const buttonClassByType = computed(() => ({
  primary: 'primary-btn',
  secondary: 'secondary-btn',
  tertiary: 'tertiary-btn',
  disabled: 'disabled-btn',
}[props.type]));

const buttonClassBySize = computed(() => ({
  small: 'small-btn',
  normal: 'medium-btn',
  large: 'large-btn',
}[props.size]));

</script>
<style lang="scss" scoped>
@mixin by-type-style {
  background: $primary;
  color: white;
  text-align: center;
}
.primary-btn {
  @include by-type-style;
}
.secondary-btn {
  @include by-type-style;
  background: transparent;
  border: 2px solid $primary;
  color: $primary;
}

@mixin by-size-style {
  display: flex;
  align-content: center;
}
.small-btn {
  padding: 10px;
  font-size: 12px;
}
.medium-btn {
  padding: 12px 20px;
  font-size: 16px;
}
.large-btn {
  @include by-size-style;
  height: 55px;
  min-width: 100%;
  font-size: 18px;
}
</style>
