<template>
  <LoginSignupLayout>
    <template #header-title>
      Sign In
    </template>
    <template #header-description>
      Reduce your carbon footprint, protect our planet
    </template>
    <template #default>
      <div id="headline">
        <div class="logo">
          <q-img
            src="~/assets/carbon-zero-logo-big.svg"
          />
        </div>
        <div class="description q-mt-md">
          Don't wait for <span class="text-weight-bold">tomorrow,</span> start
          <span class="text-weight-bold">now</span> for
          <span class="text-primary text-weight-bold">zero carbon,
            zero emissions, zero problems.</span>
        </div>
      </div>
      <div class="form-container">
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

          <div class="q-mt-lg">
            <the-button :loading="isLoading" label="Sign In" size="large" type="primary"/>
          </div>
          <div class="q-mt-sm">
            <the-button @click="$router.push({ name: 'register' })"
                        label="Create New Account"
                        size="large"
                        type="secondary"/>
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
        </q-form>
      </div>
    </template>
  </LoginSignupLayout>
</template>
<script setup>
import { computed, ref } from 'vue';
import { AuthService } from 'src/services/auth.service';
import { serializeBEError } from 'src/services/utils';
import TheAlert from 'components/TheAlert.vue';
import { useRouter } from 'vue-router';
import { Notify } from 'quasar';
import LoginSignupLayout from 'layouts/LoginSignupLayout.vue';
import TheButton from 'components/TheButton.vue';

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
#headline {
  .logo {
    width: 170px;
  }
  .description {
    font-size: 22px;
  }
}

.form-container {
  margin-top: 40px;
}
</style>
