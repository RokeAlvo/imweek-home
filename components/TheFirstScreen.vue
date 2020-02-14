<template lang="pug">
.first-screen
  TheHeader.first-screen__header
  .first-screen__date
    p
      em c 29 марта&nbsp;
      em по 4 апреля
      em 2020
  h2.first-screen__title Неделя интернет маркетинга
  h3.first-screen__promo
    em Бесплатная&nbsp;
    | онлайн конференция
  Button.button.button_big-font.first-screen__button
    p Быстрая регистрация
    img.first-screen__arrow(:src="require('~/assets/image/arrow.png')")
  TheSpeakerSlider.first-screen__slider
  .first-screen__separator
  .first-screen__all-speaker
    em 56
    em спикеров

</template>

<script>
import Picture from './Picture'
import TheHeader from './TheHeader'
import Button from './Button'
import TheSpeakerSlider from './TheSpeakerSlider'

export default {
  name: 'TheFirstScreen',
  components: {
    Picture,
    TheHeader,
    Button,
    TheSpeakerSlider,
  },
}
</script>

<style scoped lang="sass">
.first-screen
  position: relative
  display: flex
  flex-wrap: wrap
  width: 100%
  color: $main-text-color
  background: $bg-dark
  font-family: "Fira Sans", sans-serif
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
  &__title
    flex: 1
    font-size: 28px
    font-weight: 700
    padding: 0 14px
    display: flex
    align-items: center
    @media screen and (max-width: 370px)
      text-align: center
      margin-top: 40px
  &__promo
    width: 100%
    margin: 40px 0 31px
    font-size: 28px
    font-weight: 400
    text-transform: uppercase
    text-align: center
    em
      color: $bg-accent
  &__arrow
    position: absolute
    right: -34px
    top: -40px
    @media screen and (max-width: 370px)
      right: -24px
  &__button
    position: relative
    margin: auto
  &__slider
    margin-bottom: 53px
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
