<template>
  <v-snackbar :location="location" :timeout="timeout" :color="color">
    <template #text v-if="message">
      <span class="text-default" v-text="message"></span>
    </template>
    <template #actions>
      <container-btn :color="btnColor" :text="btnText" @click="$emit('close')"></container-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'feedback-container-component',
  props: {
    location: { type: String, required: false, default: 'top' },
    timeout: { type: Number, required: false, default: 3000 },
    color: { type: String, required: false, default: 'primary' },
    message: { type: String, required: true },
    btnColor: { type: String, required: true },
    btnText: { type: String, required: false, default: 'close' }
  }
})
</script>
