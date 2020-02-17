<template lang="pug">
  .the-representative-companies
    h2.title.the-representative-companies__title Выступают представители компаний
    .the-representative-companies__logo
      Picture(:options="imgOptions" :img="'/image/company-logo/Vkontakte.png'")
      Picture(:options="imgOptions" :img="'/image/company-logo/yandex.png'")
      Picture(:options="imgOptions" :img="'/image/company-logo/mytarget.png'")
      Picture(:options="imgOptions" :img="'/image/company-logo/ramblerco.png'")
      Picture(:options="imgOptions" :img="'/image/company-logo/ok.png'")

</template>

<script>
import Picture from './Picture'
export default {
  components: {
    Picture,
  },
  computed: {
    imgOptions() {
      return { webp375: false, img375: false }
    },
  },
}
</script>

<style scoped lang="sass">
.the-representative-companies
  padding: 54px 0 24px 0
  max-width: 1482px
  margin: auto
  @include respond-to(md)
    padding: 60px 40px 30px
  &__title
    margin-bottom: 43px
    padding: 0 24px
  &__logo
    display: flex
    flex-flow: wrap row
    justify-content: space-around
    align-items: flex-start
    align-content: flex-end
    @include respond-to(md)
      align-items: center
      margin-left: -24px
    .picture
      margin-bottom: 28px
      @include respond-to(md)
        min-width: 170px
        margin-left: 24px
    .picture:nth-child(3)
      align-self: flex-end

// style
</style>
