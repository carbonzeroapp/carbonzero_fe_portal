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
          Be part of the <span class="text-weight-bold">solution,</span> not part
          of the <span class="text-weight-bold">problem.</span>
          <span class="text-primary text-weight-bold">Choose a zero
          carbon life!</span>
        </div>
      </div>
      <div class="form-container q-mt-xl">
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
            :error-message="getFieldError(serializedErrors, 'full_name')"
            :error="!!getFieldError(serializedErrors, 'full_name')"
          />

          <q-input
            outlined
            v-model="username"
            label="Username"
            stack-label
            hide-bottom-space
            :rules="[val => !!val || 'Field is required']"
            :error-message="getFieldError(serializedErrors, 'username')"
            :error="!!getFieldError(serializedErrors, 'username')"
          />

          <q-input
            type="email"
            outlined
            v-model="email"
            label="Email"
            stack-label
            hide-bottom-space
            :rules="[val => !!val || 'Field is required']"
            :error-message="getFieldError(serializedErrors, 'email')"
            :error="!!getFieldError(serializedErrors, 'email')"
          />

          <q-select
            outlined
            v-model="gender"
            :options="genderOptions"
            label="Gender"
            stack-label
            hide-bottom-space
            :error-message="getFieldError(serializedErrors, 'gender')"
            :error="!!getFieldError(serializedErrors, 'gender')"
          />

          <q-input outlined v-model="dateOfBirth"
                   label="Date of Birth" stack-label
                   hide-bottom-space
                   mask="####-##-##"
                   placeholder="YYYY-MM-DD"
                   :error-message="getFieldError(serializedErrors, 'date_of_birth')"
                   :error="!!getFieldError(serializedErrors, 'date_of_birth')"
                   :rules="[date, val => !!val || 'Field is required']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="dateOfBirth" mask="YYYY-MM-DD">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat/>
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input
            outlined
            v-model="password"
            type="password"
            label="Password"
            stack-label
            hide-bottom-space
            :error-message="getFieldError(serializedErrors, 'password')"
            :error="!!getFieldError(serializedErrors, 'password')"
          />

          <q-input
            outlined
            v-model="password2"
            type="password"
            label="Confirm Password"
            stack-label
            hide-bottom-space
            :error-message="getFieldError(serializedErrors, 'password2')"
            :error="!!getFieldError(serializedErrors, 'password2')"
          />

          <div class="q-mt-lg">
            <the-button :loading="isLoading" label="Sign Up" size="large" type="primary"/>
          </div>
          <div class="q-mt-sm">
            <the-button @click="$router.push({ name: 'login' })"
                        label="Already have account"
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
<script lang="ts" setup>
import { date, Notify } from 'quasar';
import { computed, ref } from 'vue';
import { AuthService } from 'src/services/auth.service';
import TheAlert from 'components/TheAlert.vue';
import { serializeBEError } from 'src/services/utils';
import { GenderOption } from 'src/types';
import { useRouter } from 'vue-router';
import LoginSignupLayout from 'layouts/LoginSignupLayout.vue';
import TheButton from 'components/TheButton.vue';

const router = useRouter();

const genderOptions: GenderOption[] = [
  {
    label: 'Male',
    value: 0,
  },
  {
    label: 'Female',
    value: 1,
  },
];

const errors = ref({});

const serializedErrors = computed(() => serializeBEError(errors.value));

const fullName = ref('');
const username = ref('');
const email = ref('');
const gender = ref(genderOptions[0]);
const dateOfBirth = ref('');
const password = ref('');
const password2 = ref('');
const isLoading = ref(false);

function getFieldError(errorMessage: object, fieldName: string): string {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // TODO: fix this, by change the utils to typescript file and add type for serializeBEError ?
  return errorMessage[0][fieldName] ? errorMessage[0][fieldName].join(' .') : '';
}
async function onSubmit() {
  errors.value = {};
  isLoading.value = true;

  try {
    await AuthService.register({
      full_name: fullName.value,
      username: username.value,
      email: email.value,
      gender: gender.value.value,
      date_of_birth: dateOfBirth.value,
      password: password.value,
      password2: password2.value,
    });

    await router.push({ name: 'login' });
    Notify.create({
      type: 'info',
      message: 'Register is success, please sign in',
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
</style>
