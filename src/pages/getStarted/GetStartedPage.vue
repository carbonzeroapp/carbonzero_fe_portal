<template>
  <div id="get-started-page" class="q-pa-xl">
    <div class="get-started-slide">
      <q-carousel
        ref="carouselInstance"
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        animated
        draggable="false"
        control-color="white"
        navigation
        padding
        id="get-started-carousel"
        class="text-white full-height"
      >
        <q-carousel-slide class="column no-wrap flex-center"
                          v-for="item in slideItems"
                          :key="item.order"
                          :name="String(item.order)">
          <div class="illustration-image">
            <q-img
              :src="item.assetPath"
              width="200px"
            />
          </div>
          <div class="q-mt-md q-mb-xl text-center description">
            <div class="title text-weight-bold q-mb-md">
              {{ item.title }}
            </div>
            <div class="body text-weight-light">
              {{ item.body }}
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="actions q-mt-xl full-width">
      <div>
        <the-button
          label="Skip"
          size="normal"
          @click="onSkip"
          type="tertiary"/>
      </div>

      <div>
        <the-button
          label="Next"
          size="normal"
          @click="onNext"
          type="primary"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TheButton from 'components/TheButton.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const carouselInstance = ref(null);

const slide = ref('1');
const slideItems = [
  {
    order: 1,
    assetPath: 'src/assets/intro-1.svg',
    title: 'Energy-efficient equipment',
    body: 'Energy-efficient equipment is designed to consume less '
      + 'energy than standard equipment while providing the same level of performance.',
  }, {
    order: 2,
    assetPath: 'src/assets/intro-2.svg',
    title: 'How to Shop Sustainably',
    body: 'Buying less is the first step. Beyond that, there are simple ways to reduce the impact from your purchases.',
  }, {
    order: 3,
    assetPath: 'src/assets/intro-3.svg',
    title: 'Sustainable printing practices',
    body: 'When printing is necessary, opt for eco-friendly printing methods. '
      + 'Choose printers that use recycled paper and soy-based inks, which have '
      + 'lower environmental impacts compared to conventional options',
  }, {
    order: 4,
    assetPath: 'src/assets/intro-4.svg',
    title: 'Offset emissions',
    body: 'Consider investing in carbon offset programs to compensate for the emissions generated '
      + 'during the copywriting process. These programs support projects that reduce greenhouse '
      + 'gas emissions or promote environmental sustainability',
  },
];

function onSkip() {
  router.push({ name: 'login' });
}

function onNext() {
  if (carouselInstance.value) {
    if (parseInt(slide.value, 10) === slideItems.length) {
      // if the slide is the last item, redirect to the login page
      router.push({ name: 'login' });
    } else {
      carouselInstance.value.next();
    }
  }
}
</script>
<style lang="scss" scoped>
#get-started-page {
  background: $green-darker;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;

  #get-started-carousel {
    background-color: transparent !important;
  }

  .illustration-image {
    margin: 40px 0;
  }

  .description {
    .title {
      font-size: 20px;
    }
    .body {
      font-size: 12px;
    }
  }

  .actions {
    display: flex;
    justify-content: space-between;
  }
}
</style>
