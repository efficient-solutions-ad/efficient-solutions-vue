<template>
  <v-btn
    :size="size"
    :color="color"
    :class="computed_css_class"
    :style="style"
    :icon="icon"
    :to="to"
  >
    <template #default v-if="text">
      <small :class="textClass" :style="textStyle" v-text="text"></small>
    </template>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'btn-container-component',
  props: {
    size: { type: String, required: false, default: 'large' },
    color: { type: String, required: false, default: 'primary' },
    style: { type: String, required: false },
    class: { type: String, required: false },
    icon: { type: String, required: false },
    to: { type: String, required: false },

    textStyle: { type: String, required: false },
    textClass: { type: String, required: false, default: 'text-default' },
    text: { type: String, required: false }
  },
  computed: {
    computed_css_class(): string[] {
      let retval: string[] = []

      retval.push(this.icon ? 'pa-2' : 'px-4')
      if (this.class) this.class.split(' ').forEach((element) => retval.push(element))
      return retval
    },
    computed_css_style(): string {
      let retval: string = ''
      if (this.style) retval += this.style
      return retval
    },
    computed_css_classText(): string[] {
      let retval: string[] = []

      if (this.textClass) this.textClass.split(' ').forEach((element) => retval.push(element))
      return retval
    },
    computed_css_styleText(): string {
      let retval: string = ''
      if (this.textStyle) retval += this.textStyle
      return retval
    }
  }
})
</script>
