<template lang="pug">
  .program-card
    transition-group(name="fade")
      h3.program-card__title(:key="title") {{ title }}
      EventCard.program-card__event(
        v-for="programEvent in program"
        :key="programEvent.date+programEvent.time"
        :programEvent="programEvent"
        )

</template>

<script>
import EventCard from './EventCard'
export default {
  components: {
    EventCard,
  },
  props: {
    program: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.program-card
  display: flex
  flex-flow: column nowrap
  padding: 0 15px
  @media screen and (max-width: 359px)
    padding: 0
  &__title
    margin-bottom: 37px
    color: $bg-accent
    font-size: 18px
    font-weight: 500
    line-height: 18px
    letter-spacing: -0.17px
// style
</style>
