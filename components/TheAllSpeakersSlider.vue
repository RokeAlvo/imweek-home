<!--suppress UnterminatedStatementJS -->
<template lang="pug">
  .speaker-slider
    .speaker-slider__border
    hooper(:settings="hooperSettings").speaker-slider__slider
      slide
        figure.speaker-slider__item
          Picture(img="/image/speakers-slide/slide1.768.png" :webp375="false" :img375="false")
          figcaption
            <p>Дамир <br> Халилов</p>
            <p>Илья <br> Балахнин</p>
            <p>Игорь <br> Манн</p>
            <p>Александр <br> Левитас</p>
            <p>Денис <br> Каплунов</p>
      slide
        figure.speaker-slider__item
          Picture(img="/image/speakers-slide/slide2.768.png" :webp375="false" :img375="false")
          figcaption
            <p>Андрей <br> Гавриков</p>
            <p>Михаил <br> Христосенко</p>
            <p>Кирилл <br> Куницкий</p>
            <p>Дмитрий <br> Кот</p>
            <p>Светлана <br> Ковалева</p>
      slide
        figure.speaker-slider__item
          Picture(img="/image/speakers-slide/slide3.768.png" :webp375="false" :img375="false")
          figcaption
            <p>Дмитрий <br> Севальнев</p>
            <p>Руслан <br> Осин</p>
            <p>Дмитрий <br> Ткаченко</p>
            <p>Влад <br> Титов</p>
            p(@click="$scrollTo('#program')").link-to-program и еще 42 спикера
      hooper-navigation(slot="hooper-addons")
</template>

<script lang>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'
import Picture from './Picture'
// const Picture = () => import('./Picture')

export default {
  components: {
    Picture,
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {}
  },
  computed: {
    hooperSettings() {
      return {
        itemsToShow: 1,
        centerMode: true,
        infiniteScroll: true,
        // pagination: 'fraction',
      }
    },
  },
}
</script>

<style scoped lang="sass">
.speaker-slider
  /*background: #f7f8fb*/
  position: relative
  color: #050505
  width: 100%
  &__border
    position: absolute
    border: 3px solid $bg-accent
    border-left: none
    border-right: none
    width: 100%
    height: 200px
    top: 55px
    background: radial-gradient(50% 35% at 50% 20%, #333333, #050505)
    @include respond-to(xl)
      height: 264px
      top: 75px
    @include respond-to(xxxl)
      border: 3px solid $bg-accent
  .hooper
    height: auto
    max-width: 768px
    margin-left: auto
    @include respond-to(lg)
      max-width: 1024px
  &__item
    width: 768px
    max-width: 768px
    margin-left: auto
    //width: 100%
    //max-width: 100%
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    @include respond-to(xl)
      width: 1024px
      max-width: 1024px
    &::v-deep img
      width: auto
      @include respond-to(xl)
        width: 1024px
    & figcaption
      color: #9c9c9c
      font-family: "Fira Sans", sans-serif
      font-size: 18px
      font-weight: 400
      text-transform: uppercase
      margin-top: 20px
      display: flex
      flex-flow: nowrap row
      justify-content: space-around
      width: 100%
      p
        text-align: center
      @include respond-to(lg)
        font-size: 20px
  &::v-deep
    .hooper-next, .hooper-prev
      top: 252px
      background: $bg-dark
      height: 45px
      width: 45px
      border-radius: 50%
      border: 3px solid $bg-accent
      line-height: 100%
      margin: 0 24px
      @include respond-to(xl)
        top: 340px
      svg
        position: relative
        fill: $text-accent-color
        top: -5px
        left: -5px
.link-to-program
  position: relative
  bottom: 100px
  right: 25px
  max-width: 90px
  cursor: pointer
</style>
