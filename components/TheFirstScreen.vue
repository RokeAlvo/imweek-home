<template lang="pug">
.first-screen
  TheHeader.first-screen__header
  .first-screen__date
    p
      em c 29 марта&nbsp;
      em по 4 апреля
      em 2020
  h2.first-screen__title Неделя интернет маркетинга
    media(:query="{minWidth: 768}")
      p.first-screen__description Первая в мире бесплатная онлайн-конференция по маркетингу, заявленная на установление рекорда Гиннесса.
  media(:query="{minWidth: 1200}")
    .first-screen__form
      h4.first-screen__form-title Быстрая регистрация
      FeedbackForm(button-text="Принять участие").first-screen__form-inputs
      p.first-screen__form-promo Гарантируем отсутствие спама и рекламы
  h3.first-screen__promo
    em Бесплатная&nbsp;
    | онлайн конференция
  modal(
    name="form-first-screen"
    width="100%"
    height="auto"
    )
    .first-screen__form
      button.first-screen__form-button-close(type="button" @click="$modal.hide('form-first-screen')") ✖
      h4.first-screen__form-title Быстрая регистрация
      FeedbackForm(button-text="Принять участие").first-screen__form-inputs
      p.first-screen__form-promo Гарантируем отсутствие спама и рекламы
  media(:query="{maxWidth: 767}")
    Button.button.button_big-font.first-screen__button(type="button" @click="$modal.show('form-first-screen')")
      p Быстрая регистрация
      img.first-screen__arrow(:src="require('~/assets/image/arrow.png')")
  media(:query="{maxWidth: 767}")
    TheSpeakerSlider.first-screen__slider
    .first-screen__separator
    .first-screen__all-speaker
      em 56
      em спикеров
  media(:query="{minWidth: 768}")
    TheAllSpeakersSlider.first-screen__slider

</template>

<script>
import Media from 'vue-media'
import Picture from './Picture'
import TheHeader from './TheHeader'
import Button from './Button'
import TheSpeakerSlider from './TheSpeakerSlider'
import FeedbackForm from './FeedbackForm'
import TheAllSpeakersSlider from './TheAllSpeakersSlider'

export default {
  name: 'TheFirstScreen',
  components: {
    TheAllSpeakersSlider,
    FeedbackForm,
    Picture,
    TheHeader,
    Button,
    TheSpeakerSlider,
    Media,
  },
}
</script>

<style scoped lang="sass">
.first-screen
  position: relative
  display: flex
  flex-wrap: wrap
  width: 100%
  max-width: 1482px
  margin: auto
  color: $main-text-color
  background: $bg-dark
  font-family: "Fira Sans", sans-serif
  &__header
    @include respond-to(lg)
      padding: 0 40px
    @include respond-to(xxxl)
      padding: 0
  &__date
    width: 180px
    height: 150px
    display: flex
    align-items: center
    background-color: $bg-accent
    color: $text-accent-color
    font-size: 23px
    font-weight: 500
    text-transform: uppercase
    letter-spacing: 0.31px
    line-height: 29.38px
    padding: 0 0 0 24px
    em
      width: 100%
      display: block
      letter-spacing: -0.3px
    em:nth-child(1)
      font-size: 25px
      line-height: 32.65px
    em:nth-child(2)
      line-height: 29.38px
    em:nth-child(3)
      font-size: 63px
      line-height: 55.5px
    @include respond-to(md)
      width: 232px
      height: 215px
      font-size: 32px
      line-height: normal
      margin: 0
      padding: 0
      justify-content: center
      em:nth-child(1)
        font-size: 32px
        line-height: normal
      em:nth-child(2)
        line-height: normal
      em:nth-child(3)
        font-size: 91px
        line-height: 76px
  &__title
    flex: 1
    font-size: 28px
    font-weight: 700
    padding: 0 14px
    display: flex
    align-items: center
    flex-flow: column nowrap
    justify-content: center
    p
      text-transform: none
      margin-top: 30px
      color: #7b7b7b
      font-size: 23px
      font-weight: 400
    @media screen and (max-width: 370px)
      text-align: center
      margin-top: 40px
    @include respond-to(md)
      font-size: 44px
      text-transform: uppercase
      align-items: flex-start
      justify-content: flex-start
      padding: 0 24px
  &__form
    background-color: #323232
    padding: 62px 52px
    top: calc(50% - 325px / 2)
    display: flex
    flex-flow: column nowrap
    align-items: flex-start
    justify-content: center
    max-width: 460px
    @include respond-to(xl)
      padding: 15px 24px
  &__form-button-close
    color: white
    background: transparent
    border: none
    position: absolute
    right: 24px
    top: 24px
    width: 24px
    height: 24px
    font-size: 24px
  &__form-title
    color: #ffffff
    font-size: 24px
    font-weight: 400
    text-transform: uppercase
    margin-bottom: 20px
  &__form-inputs
    margin-bottom: 20px
    @include respond-to(xl)
      display: flex
      flex-flow: row
      justify-content: space-between
      min-width: 410px
  &__form-inputs::v-deep  button
    @include respond-to(xl)
      margin-left: 5px
  &__form-promo
    color: #9c9c9c
    font-size: 16px
    font-weight: 400
    text-align: center
  &__promo
    width: 100%
    margin: 40px 0 31px
    font-size: 28px
    font-weight: 400
    text-transform: uppercase
    text-align: center
    em
      color: $bg-accent
    @include respond-to(md)
      display: none
    @include respond-to(lg)
      position: absolute
      left: 40px
      bottom: 125px
      max-width: 300px
      font-size: 40px
      display: flex
      flex-flow: row wrap
      z-index: 9
      justify-content: flex-start
      text-align: left
    @include respond-to(xl)
      bottom: 160px
  &__arrow
    position: absolute
    right: -34px
    top: -40px
    @media screen and (max-width: 370px)
      right: -24px
  &__button
    position: relative
    margin: auto
    padding: 0 12px
  &__slider
    margin-bottom: 53px
    @include respond-to(xl)
      margin-top: 40px
  &__separator
    height: 3px
    background-color: $bg-accent
    width: 100%
    position: absolute
    bottom: 90px
  &__all-speaker
    position: absolute
    bottom: 140px
    left: 24px
    display: flex
    flex-flow: column
    height: 103px
    color: #474747
    font-size: 21px
    font-weight: 400
    text-transform: uppercase
    em
      display: block
    em:nth-child(1)
      display: block
      font-size: 99px
      letter-spacing: -0.73px
      line-height: 0.8
</style>
