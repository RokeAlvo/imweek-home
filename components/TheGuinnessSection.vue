<template lang="pug">
  section.the-guinness-section
    transition(name='fade')
      .the-guinness-section__wraper(v-if="visible")
        .the-guinness-section__logo
          Picture(img ="/image/guinness-logo.png" :options="{webp375: false, img375: false}")
        h4.header-on-dark.the-guinness-section__promo
          span Не упустите единственное в своем роде событие&nbsp;-
          span крупнейшую бесплатную маркетинговую конференцию в мире
        p.the-guinness-section__description Для установления нового рекорда Гиннесса нужны Вы и еще 14 999 онлайн-зрителей
        FeedbackForm.the-guinness-section__form(buttonText="Регистрируйтесь прямо сейчас!")
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
.the-guinness-section
  &__wraper
    width: 100%
    height: 100%
    display: flex
    align-items: center
    flex-flow: column nowrap
    background: $bg-dark
    padding: 40px 24px
    //noinspection CssUnknownTarget
    @include respond-to(md)
      background: #000 url('../assets/image/microphone.png')
  &__logo
    display: flex
    justify-content: center
    margin-bottom: 40px
  &__promo
    display: flex
    flex-flow: nowrap column
    align-items: center
    margin-bottom: 30px
    span:nth-child(1)
      margin-bottom: 0.5em
    span:nth-child(2)
      font-size: 20px
      line-height: 1
      color: $bg-accent
      @include respond-to(md)
        font-size: 30px
  &__description
    color: #848484
    font-size: 18px
    font-weight: 400
    line-height: 1.1
    text-align: center
    padding: 0 24px
    margin-bottom: 30px
    @include respond-to(md)
      font-size: 24px
  &__form
    display: flex
    max-width: 720px
    width: 100%
    flex-flow: column nowrap
    @include respond-to(md)
      flex-flow: row nowrap
    &::v-deep
      button
        @include respond-to(md)
          margin-left: 10px
          max-width: 400px
.webp .the-guinness-section__wraper
  background: #000 url('../assets/image/microphone.webp')
</style>
