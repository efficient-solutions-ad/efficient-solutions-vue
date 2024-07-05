<template>
  <v-app-bar elevation="0" scroll-behavior="hide" color="accent" density="comfortable">
    The APP BAR
  </v-app-bar>

  <!-- Mobile navigation-->
  <!-- <container-navigation
    location="bottom"
    :navigation="computed_data_navigation_mobileMenu_state"
    v-model="computed_data_appbar_btnMobileMenu_show_state"
  ></container-navigation> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'header-container-component'
})
</script>
