<template>
  <div id="register-page">
    <div class="login-page-description">
      <h1 class="text-weight-bold">Sign Up</h1>
      <h3 class="text-weight-medium">Track your carbon footprint. Sign up to monitor
        and reduce your environmental impact.</h3>
    </div>
    <div id="register-form">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          outlined
          v-model="fullName"
          label="Full Name"
          stack-label
          hide-bottom-space
          :rules="[val => !!val || 'Field is required']"
        />

        <q-input
          outlined
          v-model="username"
          label="Username"
          stack-label
          hide-bottom-space
          :rules="[val => !!val || 'Field is required']"
        />

        <q-input
          type="email"
          outlined
          v-model="email"
          label="Email"
          stack-label
          hide-bottom-space
          :rules="[val => !!val || 'Field is required']"
        />

        <q-input
          outlined
          v-model="password"
          type="password"
          label="Password"
          stack-label
          hide-bottom-space
          :rules="[val => !!val || 'Field is required']"
        />

        <q-input
          outlined
          v-model="password2"
          type="password"
          label="Confirm Password"
          stack-label
          hide-bottom-space
          :rules="[val => !!val || 'Field is required']"
        />

        <div>
          <q-btn
            :loading="isLoading"
            class="full-width text-weight-bold"
            label="Sign Up"
            type="submit"
            color="primary"
            rounded
            no-caps
            padding="md"
          />
        </div>
      </q-form>

      <div class="block text-center q-ma-lg">
        Already have an account?
        <router-link :to="{ name: 'login' }">Login here</router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar();

const fullName = ref(null);
const username = ref(null);
const email = ref(null);
const dateOfBirth = ref(null);
const gender = ref(0);
const password = ref(null);
const password2 = ref(null);

const isLoading = ref(false);
</script>
<style lang="scss" scoped>
#register-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h1 {
  font-size: 30px;
  line-height: 1;
  margin: 12px 0;
}
h3 {
  font-size: 14px;
  color: $nero-mid;
  line-height: 1;
}
#register-form {
  margin-top: 20px;
}
</style>
