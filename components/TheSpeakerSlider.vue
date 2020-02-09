<template lang="pug">
  .speaker-slider
    hooper(:settings="hooperSettings")
      slide
        figure.speaker-slider__item
          Picture(:img="'/image/aleksandr-mashkarev.png'")
          figcaption Илья Балахнин
      slide
        figure.speaker-slider__item
          Picture(:img="'/image/alexander-levitas.png'")
          figcaption Илья Балахнин
      slide
        figure.speaker-slider__item
          Picture(:img="'/image/alexey-molchanov.png'")
          figcaption Илья Балахнин
      slide
        figure.speaker-slider__item
          Picture(:img="'/image/alexey-panov.png'")
          figcaption Илья Балахнин
      slide
        figure.speaker-slider__item
          Picture(:img="'/image/anastasiya-gorkaya.png'")
          figcaption Илья Балахнин
      slide
        figure.speaker-slider__item
          Picture(:img="'/image/andrey-gavrikov.png'")
          figcaption Илья Балахнин
      slide
        figure.speaker-slider__item
          Picture(:img="'/image/andrey-karpov.png'")
          figcaption Илья Балахнин
      hooper-navigation(slot="hooper-addons")
</template>

<script lang>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'
import Picture from './Picture'

export default {
  components: {
    Picture,
    Hooper,
    Slide,
    HooperNavigation
  },
  computed: {
    hooperSettings() {
      return {
        itemsToShow: 1,
        centerMode: true,
        infiniteScroll: true,
        // pagination: 'fraction',
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 3
          },
          1000: {
            itemsToShow: 6,
            pagination: 'fraction'
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="sass">
.speaker-slider
  /*background: #f7f8fb*/
  color: #050505
  width: 100%
  .hooper
    height: auto
  &__item
    width: 100%
    height: 100%
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    &::v-deep img
      height: 200px
      width: auto
    & figcaption
      color: #9c9c9c
      font-family: "Fira Sans"
      font-size: 18px
      font-weight: 400
      line-height: 16.03px
      text-transform: uppercase
      margin-top: 20px
  &::v-deep
    .hooper-next
      height: 45px
      width: 45px
      border-radius: 50%
      border: 3px solid $bg-accent
      line-height: 100%
      margin-right: 24px
    .hooper-prev
      display: none
  &::v-deep .hooper-next svg
    position: relative
    fill: $text-accent-color
    top: -5px
    left: -5px
// style
</style>
