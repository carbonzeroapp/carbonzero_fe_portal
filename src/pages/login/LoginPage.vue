<template>
  <div id="login-page">
    <div class="container column">
      <div class="login-page-description">
        <h1 class="text-weight-bold">Sign In</h1>
        <h3 class="text-weight-medium">Please enter your credentials to access your account</h3>
      </div>
      <div id="login-form">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            outlined
            v-model="username"
            label="Username"
            stack-label
          />

          <q-input
            outlined
            v-model="password"
            type="password"
            label="Password"
            stack-label
          />

          <div>
            <q-btn
              :loading="isLoading"
              class="full-width text-weight-bold"
              label="Sign In"
              type="submit"
              color="primary"
              rounded
              no-caps
              padding="md"
            />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>
<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  setup() {
    const $q = useQuasar();

    const username = ref(null);
    const password = ref(null);

    const isLoading = ref(false);

    return {
      username,
      password,

      isLoading,

      onSubmit() {
        console.log('test');
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#login-page {
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

#login-form {
  margin-top: 50px;
}
</style>
