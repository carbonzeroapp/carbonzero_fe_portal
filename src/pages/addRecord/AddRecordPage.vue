<template>
  <div>
    <div class="page-container">
      <PageHeader title="Add Record"></PageHeader>

      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <div class="record-type-variant">
          <q-select
            v-model="recordTypeVariant"
            use-input
            fill-input
            :rules="[ val => val || 'Value Required' ]"
            hide-selected
            input-debounce="0"
            @filter="filterFn"
            :options="filteredOptions"/>
        </div>

        <div class="record-amount">
          <q-input
            filled
            dense
            type="number"
            v-model="amount"
            :rules="[
          val => val > 0 || 'Invalid'
        ]">
            <template v-slot:append>
              {{ recordTypes[recordTypeId].unit }}
            </template>
          </q-input>
        </div>

        <TheButton :is-loading="isLoading" label="Record" size="normal" type="primary"></TheButton>
      </q-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import PageHeader from 'components/PageHeader.vue';
import { ref } from 'vue';
import {
  recordTypes, foods, transportations, electricity,
} from 'src/data';
import { useRoute, useRouter } from 'vue-router';
import TheButton from 'components/TheButton.vue';
import { UsersService } from 'src/services/users.service';
import { Notify } from 'quasar';

const router = useRouter();
const route = useRoute();

const isLoading = ref(false);
const recordTypeId = Number(route.params.recordTypeId);
const recordTypeVariantMap = {
  1: foods,
  2: transportations,
  3: electricity,
};

const recordTypeVariantOptions = recordTypeVariantMap[recordTypeId].map((option) => ({
  label: option.name,
  value: option.name,
}));

const filteredOptions = ref(recordTypeVariantOptions.value);

function filterFn(val, update) {
  update(() => {
    const needle = val.toLowerCase();
    filteredOptions.value = recordTypeVariantOptions.filter(
      (v) => v.label.toLowerCase()
        .indexOf(needle) > -1,
    );
  });
}

const amount = ref(0);
const recordTypeVariant = ref(null);

async function onSubmit() {
  isLoading.value = true;

  try {
    const response = await UsersService.addActivity({
      name: recordTypeVariant.value.label,
      amount: amount.value,
      carbon_footprint: (recordTypeVariantMap[recordTypeId].find(
        (option) => option.name === recordTypeVariant.value.label,
      ).totalEmission * amount.value).toFixed(2),
      activity_type: recordTypeId,
      unit: recordTypes[recordTypeId].unit,
    });

    await router.push({ name: 'index' });

    Notify.create({
      type: 'info',
      message: 'Activity added successfully',
    });
  } catch (error) {
    console.error(error);
  }

  isLoading.value = false;
}
</script>
<style scoped lang="scss">
.page-container {
  padding: 0 40px;

  .record-type {
    margin-top: 40px;
  }

  .record-type-variant {
    margin-top: 20px;
  }
}
</style>
