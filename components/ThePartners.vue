<template lang="pug">
  section.the-partners
    transition(name='fade')
      .the-partners__wraper(v-if="visible")
        h2.title.the-partners__title Генеральный партнер
        .the-partners__logos
          Picture(img ="/image/partners/convert-monster.png" :options="{webp375: false, img375: false}").the-partners__logo
</template>

<script>
import inViewport from 'vue-in-viewport-mixin'
import Picture from './Picture'
import FeedbackForm from './FeedbackForm'

export default {
  components: { Picture, FeedbackForm },
  mixins: [inViewport],
  data() {
    return {
      visible: false,
    }
  },
  watch: {
    'inViewport.now'(visible) {
      this.visible = visible
    },
  },
}
</script>

<style scoped lang="sass">
.the-partners
  padding: 50px 24px
  &__wraper
    width: 100%
    height: 100%
    display: flex
    align-items: center
    flex-flow: column nowrap
  &__title
    margin-bottom: 30px
  &__logos
    display: flex
    flex-flow: wrap row
    justify-content: space-around
</style>
