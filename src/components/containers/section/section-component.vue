<template>
  <v-container
    fluid
    tag="section"
    :style="containerStyle"
    :class="containerClass"
    style="border: 4px solid black"
  >
    <v-row dense :style="rowStyle" :class="rowClass" style="border: 4px solid red">
      <v-col
        cols="12"
        v-if="title"
        :style="columnTitleStyle"
        :class="columnTitleClass"
        style="border: 4px solid blue"
      >
        <h2 :style="titleStyle" :class="titleClass">{{ title }}</h2>
      </v-col>
      <v-col
        cols="12"
        v-if="subtitle"
        :style="columnSubtitleStyle"
        :class="columnSubtitleClass"
        style="border: 4px solid blue"
      >
        <h3 :style="subtitleStyle" :class="subtitleClass">{{ subtitle }}</h3>
      </v-col>
      <v-col
        cols="12"
        :style="columnContentStyle"
        :class="columnContentClass"
        style="border: 4px solid blue"
      >
        <slot name="section-content"></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'section-container-component',
  props: {
    containerId: { type: String, required: false },
    containerStyle: { type: String, required: false, default: 'padding: 0 300px' },
    containerClass: { type: String, required: false },

    rowStyle: { type: String, required: false },
    rowClass: { type: String, required: false },

    columnTitleStyle: { type: String, required: false },
    columnTitleClass: { type: String, required: false },
    columnSubtitleStyle: { type: String, required: false },
    columnSubtitleClass: { type: String, required: false },
    columnContentStyle: { type: String, required: false },
    columnContentClass: { type: String, required: false },

    titleStyle: { type: String, required: false },
    titleClass: { type: String, required: false },
    title: { type: String, required: false },

    subtitleStyle: { type: String, required: false },
    subtitleClass: { type: String, required: false },
    subtitle: { type: String, required: false }
  }
})
</script>
