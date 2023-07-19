<template>
  <div class="action-item">
    <div class="icon">
      <q-icon :name="iconName" />
    </div>
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.action-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $green-lighter;
  min-width: 100px;
  height: 200px;
  border-radius: 20px;
  padding: 16px;
  cursor: pointer;
  transition: scale 0.4s ease-in-out;
  margin-right: 10px;

  &:hover {
    scale: 1.05;
  }

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

  .title {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
