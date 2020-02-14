<template lang="pug">
  .modal-events
    figure
      .modal-events__picture
        Picture(:img="img")
      figcaption
        .modal-events__name {{ speaker.name }}
        .modal-events__company {{ speaker.company }}
        .modal-events__role {{ speaker.role }}
    .text.modal-events__speaker-history.text-padding {{ speaker.speakerHistory }}
    .modal-events__date-time.text-padding
      span.modal-events__date {{ date }} c&nbsp;
      span.modal-events__time {{ speaker.startTime}} до {{ speaker.endTime }}
    .modal-events__title.text-padding {{ speaker.title }}
    .text.modal-events__description.text-padding {{ speaker.description }}
    .modal-events__promo.text-padding Зарегистрируйтесь, что бы обеспечить своей компании рост в 2020 году
    FeedbackForm(buttonText="зарегистрироваться").modal-events__form.text-padding
</template>

<script>
import Picture from './Picture'
import FeedbackForm from './FeedbackForm'
export default {
  components: { Picture, FeedbackForm },
  props: {
    speaker: {
      type: Object,
      required: true,
    },
  },
  computed: {
    img() {
      return '/image/speakers/' + this.speaker.img
    },
    date() {
      let date
      switch (this.speaker.date) {
        case 0:
          date = '29.03'
          break
        case 1:
          date = '30.03'
          break
        case 2:
          date = '31.03'
          break
        case 3:
          date = '01.04'
          break
        case 4:
          date = '02.04'
          break
        case 5:
          date = '03.04'
          break
        case 6:
          date = '04.04'
          break
        default:
          date = '29.03'
          break
      }
      return date
    },
  },
}
</script>

<style scoped lang="sass">
.modal-events
  position: relative
  figure
    position: relative
    margin-bottom: 30px
  &__picture
    position: relative
    background: radial-gradient(circle at 50% 26%, #adadad, #282828 60%), #282828
    /*background: rgba(#151515, 0.3)*/
    filter: brightness(60%)
  figcaption
    position: absolute
    bottom: 20px
    left: 0
  &__name
    color: $bg-accent
    font-size: 28px
    font-weight: 700
    line-height: 1.4
    text-transform: uppercase
    padding-left: 35px
    margin-bottom: 0.2em
  &__company
    font-size: 25px
    font-weight: 500
    color: $main-text-color
    line-height: 28px
    padding-left: 20px
    border-left: 15px solid $bg-accent
  &__role
    color: $main-text-color
    font-size: 15px
    font-weight: 400
    line-height: 25px
    padding-left: 35px
  &__speaker-history
    margin-bottom: 1em
  &__date-time
    font-size: 18px
    font-weight: 500
    margin-bottom: 1em
  &__time
    color: $bg-accent
  &__title
    font-size: 22px
    font-weight: 500
    margin-bottom: 1em
  &__description
    margin-bottom: 1em
  &__promo
    font-size: 16px
    font-weight: 700
    margin-bottom: 1em
  &__form
    width: 100%
    max-width: 100%
    margin-bottom: 1em

.text
  color: #333333
  font-size: 15px
  font-weight: 300
  line-height: 25px

.text-padding
  padding: 0 24px

// style
</style>
