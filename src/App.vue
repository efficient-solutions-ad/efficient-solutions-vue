<template>
  <v-layout id="layout">
    <!-- <container-notification></container-notification> -->

    <header-container-component></header-container-component>

    <!-- Pages -->
    <v-main style="--v-layout-top: 0; border: 4px solid black">
      <!-- Section: Welcome -->
      <section-container-component id="welcome">
        <template #section-content> Welcome section </template>
      </section-container-component>

      <!-- Section: About us -->
      <section-container-component id="about-us">
        <template #section-content> About us section </template>
      </section-container-component>

      <!-- Section: Something... -->
      <section-container-component id="something">
        <template #section-content> Something section </template>
      </section-container-component>

      <!-- Section: About Anne or Dylan -->
      <section-container-component id="dylan">
        <template #section-content> Dylan section </template>
      </section-container-component>

      <!-- Section: About Anne or Dylan -->
      <section-container-component id="anne">
        <template #section-content> Anne section </template>
      </section-container-component>

      <!-- Section: Service offered -->
      <section-container-component id="services">
        <template #section-content> Service section </template>
      </section-container-component>

      <!-- Section: Mission/Vision + CTA -->
      <section-container-component id="mission-vision">
        <template #section-content> Mission/Vision section </template>
      </section-container-component>

      <!-- Section: Contact form -->
      <section-container-component id="contact-form">
        <template #section-content> Contact form section </template>
      </section-container-component>
    </v-main>

    <footer-container-component></footer-container-component>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HeaderContainerComp from '@components/containers/header/header-component.vue'
import FooterContainerComp from '@components/containers/footer/footer-component.vue'

export default defineComponent({
  name: 'app-container-component',
  components: {
    'header-container-component': HeaderContainerComp,
    'footer-container-component': FooterContainerComp
  }
})
</script>
