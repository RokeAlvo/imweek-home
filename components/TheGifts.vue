<template lang="pug">
  section.the-gifts
    transition(name='fade')
      .the-gifts__wraper(v-if="visible")
        Picture(img ="/image/gifts.png" :options="{webp375: false, img375: false}").the-gifts__logo
        h4.header-on-dark.the-gifts__promo Получите набор полезных подарков
        .the-gifts__items
          .gift.the-gifts__item
            .gift__symbol 10
            .gift__description книг по бизнесу
          .gift.the-gifts__item
            .gift__symbol 6
            .gift__description видео-уроков по маркетингу
          .gift.the-gifts__item
            .gift__symbol 7
            .gift__description инструкций и чек-листов
          .gift.the-gifts__item
            .gift__symbol %
            .gift__description скидки на курсы и сервисы
          .gift.the-gifts__item
            .gift__symbol +
            .gift__description многое другое
        FeedbackForm.the-gifts__form(buttonText="Получить подарки")
        .the-gifts__description *Все подарки придут в автоматическом письме в течение двух дней
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
.the-gifts
  &__wraper
    width: 100%
    height: 100%
    display: flex
    align-items: center
    flex-flow: column nowrap
    background: $bg-dark
    padding: 40px 24px
  &__logo
    width: 94px
    height: 94px
    margin-bottom: 30px
  &__promo
    margin-bottom: 37px
  &__items
    display: flex
    flex-flow: row wrap
    justify-content: space-around
  &__form
    margin-bottom: 36px
    max-width: 100%
  &__description
    color: #848484
    font-size: 18px
    font-weight: 400
    line-height: 20px
    text-align: center
.gift
  display: flex
  flex-flow: column nowrap
  align-items: center
  max-width: 107px
  margin-bottom: 25px
  &__symbol
    color: $bg-accent
    font-size: 50px
    font-weight: 700
    line-height: 1
  &__description
    color: #ffffff
    font-size: 15px
    font-weight: 400
    line-height: 15px
    text-align: center
// style
</style>
