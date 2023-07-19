<template>
  <TheHeader></TheHeader>
  <div class="page-container">
    <div class="total-carbon-stats">
      <div class="stats-box">
        <span class="total">12312</span>
        <span class="unit">   KgCO2e</span>
      </div>
      <p class="text-center">So far this month</p>
    </div>

    <TheActions></TheActions>
  </div>
</template>

<script setup lang="ts">
import TheHeader from 'pages/index/components/TheHeader.vue';
import TheActions from 'pages/index/components/TheActions.vue';
</script>
<style lang="scss" scoped>
.page-container {
  padding: 40px;

  .total-carbon-stats {
    margin: 60px auto;
    text-align: center;

    .stats-box {
      color: white;
      overflow-wrap: break-word;
      background-color: $primary;
      padding: 60px 20px;
      border-radius: 20px;
      margin-bottom: 10px;

      .total {
        font-size: 80px;
        font-weight: bold;
        line-height: 1;
      }
      .unit {
        font-size: 18px;
        font-style: italic;
      }
    }

    p {
      font-size: 18px;
      font-weight: lighter;
    }
  }
}
</style>
