<template>
  <v-app-bar
    elevation="0"
    scroll-behavior="hide"
    class="bg-primary"
    density="prominent"
    style="border: 4px solid orange"
  >
    <v-card
      hover
      exact
      elevation="0"
      variant="flat"
      color="transparent"
      width="10%"
      height="100%"
      style="
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.75) 0%,
          rgba(186, 119, 145, 1) 100%
        );
      "
      v-ripple="{ class: 'text-primary' }"
    >
      <template #card-img>
        <v-img cover src="favicon.ico" width="100%" height="100%"></v-img>
      </template>
    </v-card>
    <container-btn
      variant="text"
      elevation="0"
      rounded="xl"
      base-color="secondary"
      color="accent"
      class="align-self-center"
      text="Testing"
    ></container-btn>
    <container-btn
      variant="text"
      elevation="0"
      rounded="xl"
      base-color="secondary"
      color="accent"
      class="align-self-center"
      text="Testing"
    ></container-btn>
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
