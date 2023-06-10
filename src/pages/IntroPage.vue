<template>
  <div id="intro-page">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        draggable="false"
        control-color="white"
        navigation
        padding
        arrows
        infinite
        id="intro-carousel"
        class="text-white shadow-1 full-height"
      >
        <q-carousel-slide class="column no-wrap flex-center"
                          v-for="item in slideItems"
                          :key="item.name"
                          :name="String(item.id)">
          <q-img
            :src="item.assetPath"
            width="200px"
          />
          <div class="q-mt-md text-center description">
            <div class="title text-weight-bold">
              {{ item.title }}
            </div>
            <div class="body text-weight-light">
              {{ item.body }}
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const slide = ref('1');

const slideItems = [
  {
    id: 1,
    assetPath: 'src/assets/intro-1.svg',
    title: 'Energy-efficient equipment',
    body: 'Use energy-efficient printers, copiers, and other office equipment. '
      + 'Ensure proper maintenance and power management settings to reduce energy consumption during idle periods',
  }, {
    id: 2,
    assetPath: 'src/assets/intro-2.svg',
    title: 'Digital optimization',
    body: 'Optimize digital content to reduce file sizes and improve loading times, '
      + 'as this can contribute to energy savings and reduce the carbon footprint of websites and digital materials',
  }, {
    id: 3,
    assetPath: 'src/assets/intro-3.svg',
    title: 'Sustainable printing practices',
    body: 'When printing is necessary, opt for eco-friendly printing methods. '
      + 'Choose printers that use recycled paper and soy-based inks, which have '
      + 'lower environmental impacts compared to conventional options',
  }, {
    id: 4,
    assetPath: 'src/assets/intro-4.svg',
    title: 'Offset emissions',
    body: 'Consider investing in carbon offset programs to compensate for the emissions generated '
      + 'during the copywriting process. These programs support projects that reduce greenhouse '
      + 'gas emissions or promote environmental sustainability',
  },
];
</script>
<style lang="scss" scoped>
#intro-page {
  height: 100%;
}
#intro-carousel {
  background-color: $blue-darker;
}
.description {
  max-width: 500px;
  .title {
    font-size: 26px;
    margin: 10px;
  }
  .body {
    font-size: 14px;
  }
}
</style>
