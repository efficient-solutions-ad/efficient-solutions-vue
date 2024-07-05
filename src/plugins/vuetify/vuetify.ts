// Vuetify
import { createVuetify } from 'vuetify'
import {
  VLayout,
  VSystemBar,
  VSnackbar,
  VAppBar,
  VAppBarNavIcon,
  VAppBarTitle,
  VAvatar,
  VBtn,
  VNavigationDrawer,
  VMenu,
  VList,
  VListItem,
  VListItemTitle,
  VListSubheader,
  VMain,
  VContainer,
  VRow,
  VCol,
  VSheet,
  VSlideGroup,
  VSlideGroupItem,
  VWindow,
  VParallax,
  VCard,
  VCardItem,
  VCardTitle,
  VCardSubtitle,
  VCardText,
  VCardActions,
  VHover,
  VSpacer,
  VSelect,
  VDivider,
  VCarousel,
  VCarouselItem,
  VTextField,
  VIcon,
  VRating,
  VProgressLinear,
  VTooltip,
  VImg,
  VSvgIcon,
  VForm,
  VTextarea,
  VSwitch,
  VDatePicker,
  VDialog,
  VToolbar,
  VChip,
  VChipGroup,
  VItem,
  VItemGroup,
  VFooter
} from 'vuetify/components'
import ContainerSection from '@components/containers/section/section-component.vue'
import ContainerBtn from '@components/containers/button/button-component.vue'
import ContainerNotification from '@components/containers/feedback/notification-component.vue'
import ContainerFeedback from '@components/containers/feedback/feedback-component.vue'
import {
  VExpandTransition,
  VExpandXTransition,
  VSlideXTransition
} from 'vuetify/components/transitions'
import { Resize, Ripple, Scroll } from 'vuetify/directives'

// Material design icons
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// Themes
import { light, dark } from '@themes/themes.js'

// Styles
import 'vuetify/styles'
//import '@styles/scss/main.scss'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  },
  theme: {
    defaultTheme: 'light',
    variations: {
      colors: ['primary', 'secondary'],
      lighten: 1,
      darken: 2
    },
    themes: { light, dark }
  },
  components: {
    // Components
    VLayout,
    VSystemBar,
    VSnackbar,
    VAppBar,
    VAppBarNavIcon,
    VAppBarTitle,
    VAvatar,
    VBtn,
    VNavigationDrawer,
    VMenu,
    VList,
    VListItem,
    VListItemTitle,
    VListSubheader,
    VMain,
    VContainer,
    VRow,
    VCol,
    VSheet,
    VSlideGroup,
    VSlideGroupItem,
    VWindow,
    VParallax,
    VCard,
    VCardItem,
    VCardTitle,
    VCardSubtitle,
    VCardText,
    VCardActions,
    VHover,
    VSpacer,
    VSelect,
    VDivider,
    VCarousel,
    VCarouselItem,
    VTextField,
    VIcon,
    VRating,
    VProgressLinear,
    VTooltip,
    VImg,
    VSvgIcon,
    VForm,
    VTextarea,
    VSwitch,
    VDatePicker,
    VDialog,
    VToolbar,
    VChip,
    VChipGroup,
    VItem,
    VItemGroup,
    VFooter,
    // Custom components
    ContainerSection,
    ContainerBtn,
    ContainerNotification,
    ContainerFeedback,

    // Transitions
    VExpandTransition,
    VExpandXTransition,
    VSlideXTransition
  },
  directives: {
    Resize,
    Ripple,
    Scroll
  }
})

export default vuetify
