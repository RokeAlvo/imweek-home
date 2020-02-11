<!--suppress UnterminatedStatementJS -->
<template lang="pug">
  .speaker-slider
    hooper(:settings="hooperSettings" ref="hooper" @slide="onFirstSlide")
      slide(v-for="speaker in speakersToShow" :key="speaker")
        figure.speaker-slider__item
          Picture(:img="speaker")
          figcaption Илья Балахнин
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
    HooperNavigation
  },
  data() {
    return {
      speakersData: [
        'aleksandr-mashkarev.png',
        'alexander-levitas.png',
        'alexey-molchanov.png',
        'alexey-panov.png',
        'anastasiya-gorkaya.png',
        'andrey-gavrikov.png',
        'andrey-karpov.png',
        'anton-petrochenkov.png',
        'damir-halilov.png',
        'denis-kabalkin.png',
        'denis-kaplunov.png',
        'dmitriy-kot.png',
        'dmitriy-sevalnev.png',
        'dmitriy-tkachenko.png',
        'dmitry-johov.png',
        'dmitry-katyshik.png',
        'dmitry-naumovec.png',
        'elena-kozlova.png',
        'evgeniya-kobets.png',
        'filipp-tsarevskiy.png',
        'guzel-sharafutdinova.png',
        'igor-mann.png',
        'ilya-balahnin.png',
        'ilyana-levina.png',
        'irina-shamina.png',
        'kirill_kunitskiy.png',
        'konstantin-naychukov.png',
        'kristina-lapitskaya.png',
        'ruslan-baybekov.png',
        'ruslan-osin.png',
        'sergey-spivak.png',
        'stas-polomar.png',
        'svetlana-kovaleva.png',
        'taras-levchik.png',
        'timofey-kvachev.png',
        'valeriya-smolina.png',
        'valeriya-zhibrik.png',
        'valeriy-domashenko.png',
        'valeriy-krasko.png',
        'viktor-komarov.png',
        'viktor-sakson.png',
        'vlad-titov.png',
        'yan-stashkevich.png',
        'yuliya-gerz.png'
      ],
      allSpeakersIsLoaded: false
      // speakers: []
    }
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
    },
    speakersToShow() {
      return this.speakers.map((file) => '/image/speakers/' + file)
    },
    speakers() {
      if (!this.allSpeakersIsLoaded) {
        return this.speakersData.slice(0, 2)
      }
      return this.speakersData
    }
  },
  methods: {
    onFirstSlide() {
      if (!this.allSpeakersIsLoaded) {
        this.allSpeakersIsLoaded = true
      }
    },
    updateState() {
      this.allSpeakersIsLoaded = true
    }
  }
  // created() {
  //   this.speakers = this.speakersData.slice(0, 2)
  // }
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
      font-family: "Fira Sans", sans-serif
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
