<template lang="pug">
  section
    .the-program(id="program")
      h2.title.the-program__title Программа конференции
      Pagination.the-program__pagination(v-model="activeDay")
      ProgramCard(:program="programOfDay" :title="dayTopic").the-program__program-card
      Button.the-program__button(type="button" @click="nextDay()") Программа следующего дня
      modal(
        name="modal-speakers"
        @before-open="beforeOpen"
        width="100%" height="auto" :maxWidth="650" :scrollable="true").modal-speakers
        div(slot="top-right")
          button.modal-speakers__button-close( @click="$modal.hide('modal-speakers')") ✖
        hooper(:settings="hooperSettings" :initialSlide="activeSpeaker" )
            slide(v-for="speaker in program" :key="speaker.name")
              ModalEvents(:speaker="speaker")
            hooper-navigation(slot="hooper-addons")
</template>

<script>
import VueScrollTo from 'vue-scrollto/nuxt'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import Pagination from './Pagination'
import ProgramCard from './ProgramCard'
import Button from './Button'
import ModalEvents from './ModalEvents'
import Program from '~/assets/program.json'
import dayTopics from '~/assets/day-topics.json'

export default {
  components: {
    Pagination,
    ProgramCard,
    Button,
    VueScrollTo,
    ModalEvents,
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      activeDay: 0,
      activeSpeaker: NaN,
    }
  },
  computed: {
    program() {
      return Program
    },
    programOfDay() {
      return this.program.filter((e) => +e.date === this.activeDay + 1)
    },
    dayTopic() {
      return dayTopics[this.activeDay]
    },
    hooperSettings() {
      return {
        itemsToShow: 1,
        centerMode: true,
        infiniteScroll: true,
        wheelControl: false,
        touchDrag: false,
        // pagination: 'fraction',
      }
    },
  },
  methods: {
    nextDay() {
      this.activeDay = this.activeDay === 6 ? 0 : this.activeDay + 1
      this.$scrollTo('#program')
    },
    beforeOpen(e) {
      this.activeSpeaker = this.program.findIndex((speaker) => {
        return speaker.name === e.params.activeSpeaker
      })
    },
  },
}
</script>

<style scoped lang="sass">
.the-program
  position: relative
  display: flex
  flex-flow: nowrap column
  padding: 30px 24px
  max-width: 1140px
  @include respond-to(lg)
    margin: auto
    padding: 80px 40px
    flex-flow: row wrap
  &__title
    position: relative
    margin-bottom: 30px
    padding: 0 30px
    @include respond-to(lg)
      text-align: left
      width: 100%
      &:before
        content: 'ПРОГРАММА'
        top: -40px
        left: 0
        color: rgba(0, 0, 0, .05)
        font-size: 80px
        position: absolute
  &__pagination
    margin-bottom: 12px
    @include respond-to(lg)
      align-self: flex-start
      max-width: 230px
  &__button
    width: 100%
    max-width: 450px
    margin: auto
    @include respond-to(lg)
      display: none
.modal-speakers
  &__button-close
    background: transparent
    border: none
    color: white
    font-size: 24px
    z-index: 999999
  &::v-deep
    .v--modal-box
      height: auto
      @include respond-to(md)
        max-width: 700px
        margin: auto
      @include respond-to(xl)
        max-width: 1140px
        top: 0
    .hooper-next,
    .hooper-prev
      padding: 0
      svg
        fill: $bg-accent
      @include respond-to(md)
        svg
          width: 60px
          height: 60px
    .hooper-next
      @include respond-to(md)
        right: -18px
    .hooper-prev
      @include respond-to(md)
        left: -18px
  /*top: 30px*/
  &::v-deep .v--modal-top-right
    z-index: 9999
    position: fixed
    top: 18px
    right: 18px
  &::v-deep  .hooper
    height: auto
</style>
