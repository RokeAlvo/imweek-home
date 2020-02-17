<template lang="pug">
  .pagination
    .pagination__cards-block
      .pagination__card(
        v-for="(day, index) in days"
        :key="day.day"
        :class="{'pagination__card_active': value===index}"
        @click="onClickDay(index)"
        )
        transition(name="fade")
          .day.pagination__day
            .day__day {{ day.day }}
            .day__date {{ day.date }}
        transition(name="fade")
          .pagination__title(v-if="value===index") {{ dayTopics[index] }}
        .pagination__tab
    .pagination__line
</template>

<script>
import dayTitle from '~/assets/day-topics.json'
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isLg: Boolean,
    }
  },
  computed: {
    days() {
      return [
        { day: this.isLg ? 'Воскресенье' : 'Вс', date: '29.03' },
        { day: this.isLg ? 'Понедельник' : 'Пн', date: '30.03' },
        { day: this.isLg ? 'Вторник' : 'Вт', date: '31.03' },
        { day: this.isLg ? 'Среда' : 'Ср', date: '01.04' },
        { day: this.isLg ? 'Четверг' : 'Чт', date: '02.04' },
        { day: this.isLg ? 'Пятница' : 'Пт', date: '03.04' },
        { day: this.isLg ? 'Суббота' : 'Сб', date: '04.04' },
      ]
    },
    dayTopics() {
      return dayTitle
    },
  },
  mounted() {
    window.onresize = () => {
      this.isLg = window.innerWidth > 992
    }
  },
  methods: {
    onClickDay(e) {
      this.$emit('input', e)
      // this.value = e
    },
  },
}
</script>

<style scoped lang="sass">
.pagination
  @include respond-to(lg)
    display: flex
    flex-flow: row nowrap
    align-items: stretch
  &__cards-block
    display: flex
    flex-flow: nowrap row
    justify-content: space-between
    @media screen and (max-width: 330px)
      justify-content: space-around
    @include respond-to(lg)
      flex-flow: column nowrap
      order: 1
  &__card
    display: flex
    flex-flow: column nowrap
    align-items: center
    cursor: pointer
    @include respond-to(lg)
      margin-bottom: 13px
      padding-left: 40px
      align-items: flex-start
      &:last-child
        margin-bottom: 0
      &_active
        border-left: 2px solid $bg-accent
        z-index: 2
        transition: 0.5s
        .pagination__title
          display: block
        .day__day, .day__date
          color: inherit
    &_active .pagination__tab
      /*width: 14px*/
      width: 0
      height: 0
      border: 10px solid transparent
      border-bottom: 10px solid $bg-accent
      @include respond-to(lg)
        display: none
    &_active .pagination__day
      background: $bg-accent
      color: $text-accent-color
      @include respond-to(lg)
        background: transparent
        color: black
  &__day
    max-width: 45px
    max-height: 45px
    width: 45px
    height: 45px
    transition: 0.5s
    @include respond-to(lg)
      max-height: unset
      max-width: unset
      width: 200px
      height: auto
  &__title
    display: none
    @include respond-to(lg)
      display: none
      text-transform: none
      font-size: 14px
      font-weight: 400
      width: 100%
  &__line
    width: 100%
    border: 2px solid $bg-accent
    background-color: $bg-accent
    @include respond-to(lg)
      width: 0
      min-height: 100%
      order: 0
      position: relative
      left: 2px
      border: 1px solid rgba(black, 0.3)
      background: inherit
.day
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: center
  font-size: 15px
  font-weight: 400
  text-transform: uppercase
  border: 1px solid #c8c8c8
  @include respond-to(lg)
    flex-flow: row wrap
    border: none
    justify-content: flex-start
    text-transform: none
    align-items: baseline
  &__day, &__date
    text-align: center
    @include respond-to(lg)
      font-size: 18px
      font-weight: 600
      color: rgba(black, 0.3)
      text-align: left
  &__day
    font-size: 18px
    font-weight: 500
    letter-spacing: -0.18px
    line-height: 20px
    @include respond-to(lg)
      margin-bottom: 0.5em
  &__date
    letter-spacing: -0.15px
    @include respond-to(lg)
      margin-left: 5px
</style>
