<template>
  <v-container
    fluid
    tag="section"
    :class="computed_css_classContainer"
    :style="computed_css_styleContainer"
    style="border: 4px solid black"
  >
    <v-row
      dense
      :class="computed_css_classRow"
      :style="computed_css_styleRow"
      style="border: 4px solid red"
    >
      <v-col
        cols="12"
        v-if="title"
        :class="computed_css_classTitleColumn"
        :style="computed_css_styleTitleColumn"
        style="border: 4px solid blue"
      >
        <h2 :class="computed_css_classTitle" :style="computed_css_styleTitle">{{ title }}</h2>
      </v-col>
      <v-col
        cols="12"
        v-if="subtitle"
        :class="computed_css_classSubtitleColumn"
        :style="computed_css_styleSubtitleColumn"
        style="border: 4px solid blue"
      >
        <h3 :class="computed_css_classSubtitle" :style="computed_css_styleSubtitle">
          {{ subtitle }}
        </h3>
      </v-col>
      <v-col
        cols="12"
        :class="computed_css_classContentColumn"
        :style="computed_css_styleContentColumn"
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
    containerClass: { type: String, required: false },
    containerStyle: { type: String, required: false },

    rowStyle: { type: String, required: false },
    rowClass: { type: String, required: false },

    columnTitleClass: { type: String, required: false },
    columnTitleStyle: { type: String, required: false },
    columnSubtitleClass: { type: String, required: false },
    columnSubtitleStyle: { type: String, required: false },
    columnContentClass: { type: String, required: false },
    columnContentStyle: { type: String, required: false },

    titleClass: { type: String, required: false },
    titleStyle: { type: String, required: false },
    title: { type: String, required: false },

    subtitleClass: { type: String, required: false },
    subtitleStyle: { type: String, required: false },
    subtitle: { type: String, required: false }
  },
  computed: {
    computed_css_classContainer(): string[] {
      let retval: string[] = []

      if (this.containerClass)
        this.containerClass.split(' ').forEach((element) => retval.push(element))
      return retval
    },
    computed_css_styleContainer(): string {
      let retval: string = 'width: 65%; min-height: 400px'
      if (this.containerStyle) retval += this.containerStyle
      return retval
    },
    computed_css_classRow(): string[] {
      let retval: string[] = []

      if (this.rowClass) this.rowClass.split(' ').forEach((element) => retval.push(element))
      return retval
    },
    computed_css_styleRow(): string {
      let retval: string = ''
      if (this.rowStyle) retval += this.rowStyle
      return retval
    },
    computed_css_classTitleColumn(): string[] {
      let retval: string[] = []

      if (this.columnTitleClass)
        this.columnTitleClass.split(' ').forEach((element) => retval.push(element))
      return retval
    },
    computed_css_styleTitleColumn(): string {
      let retval: string = ''
      if (this.columnTitleStyle) retval += this.columnTitleStyle
      return retval
    },
    computed_css_classSubtitleColumn(): string[] {
      let retval: string[] = []

      if (this.columnSubtitleClass)
        this.columnSubtitleClass.split(' ').forEach((element) => retval.push(element))
      return retval
    },
    computed_css_styleSubtitleColumn(): string {
      let retval: string = ''
      if (this.columnSubtitleStyle) retval += this.columnSubtitleStyle
      return retval
    },
    computed_css_classContentColumn(): string[] {
      let retval: string[] = []

      if (this.columnContentClass)
        this.columnContentClass.split(' ').forEach((element) => retval.push(element))
      return retval
    },
    computed_css_styleContentColumn(): string {
      let retval: string = ''
      if (this.columnContentStyle) retval += this.columnContentStyle
      return retval
    },
    computed_css_classTitle(): string[] {
      let retval: string[] = []

      if (this.titleClass) this.titleClass.split(' ').forEach((element) => retval.push(element))
      return retval
    },
    computed_css_styleTitle(): string {
      let retval: string = ''
      if (this.titleStyle) retval += this.titleStyle
      return retval
    },
    computed_css_classSubtitle(): string[] {
      let retval: string[] = []

      if (this.subtitleClass)
        this.subtitleClass.split(' ').forEach((element) => retval.push(element))
      return retval
    },
    computed_css_styleSubtitle(): string {
      let retval: string = ''
      if (this.subtitleStyle) retval += this.columnContentStyle
      return retval
    }
  }
})
</script>
