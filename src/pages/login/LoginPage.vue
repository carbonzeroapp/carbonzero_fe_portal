<template>
  <div id="login-page">
    <div class="container column">
      <div class="login-page-description">
        <h1 class="text-weight-bold">Sign In</h1>
        <h3 class="text-weight-medium">Return to your sustainability journey.
          Log in to track your progress and set new goals</h3>
      </div>
      <div id="login-form">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md q-mb-lg"
        >
          <q-input
            outlined
            v-model="username"
            label="Username"
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

        <div class="block text-center q-ma-lg">
          New user?
          <router-link :to="{ name: 'register' }">Register here</router-link>
        </div>

        <!-- non field alerts -->
        <the-alert
          v-if="serializedErrors[1]"
          :type="'danger'"
          :message="serializedErrors[1].join(', ')"
        />

        <!-- text error alerts -->
        <the-alert
          v-if="serializedErrors[2]"
          :type="'danger'"
          :message="serializedErrors[2]"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import { AuthService } from 'src/services/auth.service';
import { serializeBEError } from 'src/services/utils';
import TheAlert from 'components/TheAlert.vue';
import { useRouter } from 'vue-router';
import { Notify } from 'quasar';

const router = useRouter();

const errors = ref({});

const serializedErrors = computed(() => serializeBEError(errors.value));

const username = ref(null);
const password = ref(null);

const isLoading = ref(false);

async function onSubmit() {
  errors.value = {};
  isLoading.value = true;

  try {
    await AuthService.login({
      username: username.value,
      password: password.value,
    });

    await router.push('/');

    Notify.create({
      type: 'info',
      message: 'Login success',
    });
  } catch (error) {
    errors.value = error.message;
  }
  isLoading.value = false;
}
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
  margin-top: 20px;
}
</style>
