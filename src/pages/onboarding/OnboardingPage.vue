<template>
  <div id="onboarding-page" class="q-pa-xl">
    <div class="illustration-image">
      <q-img
        src="~/assets/intro-4.svg"
        width="280px"
      />
    </div>
    <div class="description text-white text-center">
      <div class="title text-weight-bold q-mb-md">
        What You Do
      </div>
      <div class="body">
        In addition to changing your day-to-day habits, exercising your rights as a citizen
        is one of the most significant things you can do to help the planet.
      </div>
    </div>
    <div class="get-started-btn q-mt-lg">
      <the-button type="primary" label="Get Started" size="large"/>
    </div>
    <div class="login-btn q-mt-md">
      <the-button type="secondary" label="Login" size="large"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheButton from 'components/TheButton.vue';

</script>

<style scoped lang="scss">
#onboarding-page {
  background: $green-darker;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;

  > div {
    width: 100%;
  }

  .illustration-image {
    display: flex;
    justify-content: center;
    margin: 40px;
  }

  .description {
    .title {
      font-size: 20px;
    }
    .body {
      font-size: 12px;
    }
  }
}
</style>
