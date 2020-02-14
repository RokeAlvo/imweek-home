<template lang="pug">
  .event-card(@click="openModal(programEvent.name)")
    Picture.event-card__image(:img="img", :options="{lazy: false, sqip: false}")
    .event-card__description
      p.event-card__speaker-name {{ programEvent.name }}
      p.event-card__speaker__company {{ programEvent.company }}
      p.event-card__speaker-role {{ programEvent.role }}
      h4.event-card__title {{ programEvent.title }}
      p.event-card__time {{ programEvent.time }}
</template>

<script>
import Picture from './Picture'
export default {
  components: {
    Picture,
  },
  props: {
    programEvent: {
      type: Object,
      required: true,
    },
  },
  computed: {
    img() {
      return '/image/speakers/' + this.programEvent.img
    },
  },
  methods: {
    openModal(e) {
      this.$modal.show('modal-speakers', { activeSpeaker: e })
    },
  },
}
</script>

<style scoped lang="sass">
$margin: 0.7em

.event-card
  display: flex
  flex-flow: nowrap row
  width: 100%
  margin-bottom: 50px
  cursor: pointer
  &__image
    max-height: 140px
    width: 100px
    min-height: 140px
    min-width: 100px
  &__image::v-deep img
    height: 100%
    width: auto
    object-fit: cover
  &__description
    margin-left: 30px
    color: $text-secondary-color
    font-size: 17px
    font-weight: 500
    letter-spacing: -0.17px
    line-height: 17.01px
  &__speaker-name
    margin-bottom: $margin
  &__speaker__company
    font-weight: 300
  &__speaker-role
    margin-bottom: $margin
    font-weight: 300
  &__title
    text-transform: uppercase
    margin-bottom: $margin
  &__time
    color: $bg-accent
</style>
