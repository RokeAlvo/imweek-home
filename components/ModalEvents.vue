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
  @include respond-to(md)
    display: flex
    flex-flow: row wrap
  @include respond-to(xl)
    display: grid
    grid-template-columns: 520px auto
    grid-template-rows: auto
    grid-template-areas: "img history" "img date" "img title" "img description" "img promo" "img form"
    margin-bottom: 1em
    /*padding-bottom: 10px*/
    /*height: 100%*/
  figure
    position: relative
    margin-bottom: 30px
    @include respond-to(md)
      max-width: 314px
      margin-bottom: 0
      min-width: 314px
      min-height: 314px
    @include respond-to(xl)
      grid-area: img
      max-width: unset
  &__picture
    position: relative
    background: radial-gradient(circle at 50% 26%, #adadad, #282828 60%), #282828
    filter: brightness(60%)
    @include respond-to(xl)
      height: 520px
      &::v-deep
        .picture
          height: 100%
        img
          height: 100%
          object-fit: cover
        picture
          height: 100%
  figcaption
    position: absolute
    bottom: 20px
    left: 0
    @include respond-to(xl)
      top: 400px
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
    @include respond-to(md)
      padding: 24px !important
      margin: 0
      flex: 1
    @include respond-to(xl)
      grid-area: history
  &__date-time
    font-size: 18px
    font-weight: 500
    margin-bottom: 1em
    width: 100%
    @include respond-to(xl)
      grid-area: date
  &__time
    color: $bg-accent
  &__title
    font-size: 22px
    font-weight: 500
    margin-bottom: 1em
  &__description
    margin-bottom: 1em
    @include respond-to(xl)
      grid-area: description
  &__promo
    font-size: 16px
    font-weight: 700
    margin-bottom: 1em
    @include respond-to(md)
      margin-top: auto
    @include respond-to(xl)
      grid-area: promo
  &__form
    width: 100%
    max-width: 100%
    margin-bottom: 1em
    @include respond-to(md)
      display: flex
      flex-flow: nowrap row
      &::v-deep button
        margin-left: 10px
    @include respond-to(xl)
      margin-bottom: 0
      grid-area: form
      align-self: end
      &::v-deep
        input,
        button
          margin-bottom: 0
.text
  color: #333333
  font-size: 15px
  font-weight: 300
  line-height: 25px
  @include respond-to(md)
    font-size: 16px

.text-padding
  padding: 0 24px
  @include respond-to(md)
    padding: 0 40px
  @include respond-to(xl)
    padding: 0 24px
// style
</style>
