<template lang="pug">
  section
    .the-program
      h2.title.the-program__title Программа конференции
      Pagination.the-program__pagination(v-model.lazy="activeDay")
      h1 {{ activeDay }}
</template>

<script>
import Pagination from './Pagination'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      activeDay: 0
    }
  },
  computed: {
    asd() {
      console.log(this.activeDay)
      return ''
    }
  },
  methods: {
    // onChangeActiveDay(e) {
    //   console.log('dddd', e)
    //   this.activeDay = e
    // }
  }
}
</script>

<style scoped lang="sass">
.the-program
  display: flex
  flex-flow: nowrap column
  &__title
    margin-bottom: 30px
</style>
