<template lang="pug">
  .program-card
    transition-group(name="fade-in")
      h3.program-card__title(:key="program[0].date") {{ title }}
       <!--        transition-group(name="fade")-->
      .program-card__wraper(:key="program[0].date + 2")
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
  @include respond-to(lg)
    flex: 1
  &__wraper
    @media screen and (max-width: 359px)
      padding: 0
    display: flex
    flex-flow: row wrap
    justify-content: flex-end
  &__title
    display: block
    margin-bottom: 37px
    color: $bg-accent
    font-size: 18px
    font-weight: 500
    line-height: 18px
    letter-spacing: -0.17px
    width: 100%
    @include respond-to(lg)
      display: none
  &__event
    max-width: 350px
    margin-bottom: 20px
    @include respond-to(xl)
      max-width: 370px
// style
</style>
