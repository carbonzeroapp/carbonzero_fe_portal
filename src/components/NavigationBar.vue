<template>
  <div class="navbar-container" role="button">
    <div class="navbar-item">
      <div class="item-logo">
        <q-icon name="list"/>
      </div>
      <div class="item-name">
        Activity
      </div>
    </div>

    <div class="navbar-item">
      <div class="item-logo">
        <q-icon name="home"/>
      </div>
      <div class="item-name">
        Home
      </div>
    </div>

    <div class="navbar-item">
      <div class="item-logo">
        <q-icon name="account_circle"/>
      </div>
      <div class="item-name">
        Account
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.navbar-container {
  display: flex;
  justify-content: space-between;
  background: $green-darker;
  width: 100%;
  height: 100%;

  .navbar-item {
    cursor: pointer;
    color: $green-light;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100px;

    .item-logo {
      font-size: 26px;
    }
    .item-name {
      font-size: 11px;
    }
  }
}
</style>
