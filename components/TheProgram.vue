<template lang="pug">
  section
    .the-program
      h2.title.the-program__title(id="program") Программа конференции
      Pagination.the-program__pagination(v-model="activeDay")
      ProgramCard(:program="programOfDay" :title="dayTopic").the-program__program-card
      Button.the-program__button(type="button" @click="nextDay()") Программа следующего дня
      modal(name="modal-speakers" @before-open="beforeOpen" width="100%" height="auto" :scrollable="true").modal-speakers
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
  display: flex
  flex-flow: nowrap column
  &__title
    margin-bottom: 30px
    padding: 0 30px
  &__pagination
    margin-bottom: 12px
  &__button
    max-width: calc(100% - 48px)
    width: 100%
    margin: 0 auto 30px
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
    .hooper-next,
    .hooper-prev
      padding: 0
  /*top: 30px*/
  &::v-deep .v--modal-top-right
    z-index: 9999
    position: fixed
    top: 18px
    right: 18px
  &::v-deep  .hooper
    height: auto
</style>
