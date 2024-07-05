<template>
  <v-card class="mx-auto">
    <v-layout id="layout">
      <!-- <container-notification></container-notification> -->

      <header-container-component></header-container-component>

      <v-divider color="accent" :thickness="3"></v-divider>

      <!-- Single page -->
      <v-main class="w-100 d-flex flex-column overflow-y-auto" :style="computed_css_main_style">
        <!-- Section: Welcome -->
        <container-section id="welcome" class="w-100 bg-primary-tint-3">
          <template #section-content> Welcome section </template>
        </container-section>

        <!-- Section: About us -->
        <container-section id="about-us" class="bg-primary-tint-3">
          <template #section-content> About us section </template>
        </container-section>

        <!-- Section: Something... -->
        <container-section id="something" class="bg-primary-tint-3">
          <template #section-content> Something section </template>
        </container-section>

        <!-- Section: About Anne or Dylan -->
        <container-section id="dylan" class="bg-primary-tint-3">
          <template #section-content> Dylan section </template>
        </container-section>

        <!-- Section: About Anne or Dylan -->
        <container-section id="anne" class="bg-primary-tint-3">
          <template #section-content> Anne section </template>
        </container-section>

        <!-- Section: Service offered -->
        <container-section id="services" class="bg-primary-tint-3">
          <template #section-content> Service section </template>
        </container-section>

        <!-- Section: Mission/Vision + CTA -->
        <container-section id="mission-vision" class="bg-primary-tint-3">
          <template #section-content> Mission/Vision section </template>
        </container-section>

        <!-- Section: Contact form -->
        <container-section id="contact-form" class="bg-primary-tint-3">
          <template #section-content> Contact form section </template>
        </container-section>
      </v-main>

      <footer-container-component></footer-container-component>
    </v-layout>
  </v-card>
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
  },
  computed: {
    computed_css_main_style(): string {
      let retval: string =
        'background: linear-gradient(180deg, rgba(24,114,231,1) 0%, rgba(178,208,247,1) 100%, rgba(229,239,252,1) 100%);'
      return retval
    }
  }
})
</script>
