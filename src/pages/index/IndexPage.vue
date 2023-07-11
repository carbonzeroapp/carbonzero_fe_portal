<template>
  <div>
    <header class="q-py-md q-px-lg text-white">
      <div class="profile-image q-mr-md">
          <q-icon name="account_circle" />
      </div>
      <div class="user-data">
        <div class="user-name text-weight-bold">
          Adi Gunawan
        </div>
        <div class="bio text-weight-light">
          User
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
</script>
<style lang="scss" scoped>
header {
  background-color: $primary;
  display: flex;
  align-items: center;
  height: 100px;

  .profile-image {
    .q-icon {
      font-size: 50px;
    }
  }

  .user-data {
    .user-name {
      font-size: 16px;
    }
    .bio {
      font-size: 12px;
    }
  }
}
</style>
