<template>
  <q-layout>
    <q-page-container>
      <div class="container row window-height">
        <div class="col-12 col-md-7 order-last order-md-first window-height">
          <router-view name="left"></router-view>
        </div>

        <div class="col row flex-center order-first order-md-last q-px-xl">
          <div class="full-width">
            <router-view name="right"></router-view>
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
</script>
