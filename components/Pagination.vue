<template lang="pug">
  .pagination
    .pagination__cards-block
      .pagination__card(
        v-for="(day, index) in days"
        :key="day.day"
        :class="{'pagination__card_active': value===index}"
        @click="onClickDay(index)"
        )
        .day.pagination__day
          .day__day {{ day.day }}
          .day__date {{ day.date }}
        .pagination__tab
    .pagination__line
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    days() {
      return [
        { day: 'Вс', date: '29.03' },
        { day: 'Пн', date: '30.03' },
        { day: 'Вт', date: '31.03' },
        { day: 'Ср', date: '01.04' },
        { day: 'Чт', date: '02.04' },
        { day: 'Пт', date: '03.04' },
        { day: 'Сб', date: '04.04' },
      ]
    },
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
  padding: 0 15px
  @media screen and (max-width: 330px)
    padding: 0
  &__cards-block
    display: flex
    flex-flow: nowrap row
    justify-content: space-between
    @media screen and (max-width: 330px)
      justify-content: space-around
  &__card
    display: flex
    flex-flow: column nowrap
    align-items: center
    cursor: pointer
    &_active .pagination__tab
      /*width: 14px*/
      width: 0
      height: 0
      border: 10px solid transparent
      border-bottom: 10px solid $bg-accent
    &_active .pagination__day
      background: $bg-accent
      color: $text-accent-color
  &__day
    max-width: 45px
    max-height: 45px
    width: 45px
    height: 45px
    transition: 0.5s
  &__line
    width: 100%
    border: 2px solid $bg-accent
    background-color: $bg-accent
.day
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: center
  font-size: 15px
  font-weight: 400
  text-transform: uppercase
  border: 1px solid #c8c8c8
  &__day, &__date
    text-align: center
  &__day
    font-size: 18px
    font-weight: 500
    letter-spacing: -0.18px
    line-height: 20px
  &__date
    letter-spacing: -0.15px
</style>
