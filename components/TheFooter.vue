<template lang="pug">
  section.the-footer
    transition(name='fade')
      .the-footer__wraper(v-if="visible")
        nav.nav.the-footer__nav
          nuxt-link(to="https://imweek.ru/master-group.html").nav__link Мастер группа
          nuxt-link(to="https://imweek.ru/presents.html").nav__link Подарки
          nuxt-link(to="https://blog.imweek.ru/").nav__link Блог
          nuxt-link(to="https://blog.imweek.ru/webinars/").nav__link Вебинары
          nuxt-link(to="https://imweek.ru/partners.html").nav__link Спикерам, партнерам и СМИ
        .the-footer__politics-list
          .the-footer__politics
            nuxt-link(to="https://imweek.ru/documents/privacy-policy.pdf") Политика конфиденциальности
          .the-footer__politics
            nuxt-link(to="https://imweek.ru/documents/terms-conditions.pdf") Условия предоставления услуг
            span &nbsp;и&nbsp;
            nuxt-link(to="https://imweek.ru/documents/oferta.pdf") Оферта
</template>

<script>
import inViewport from 'vue-in-viewport-mixin'
import Picture from './Picture'
import FeedbackForm from './FeedbackForm'

export default {
  components: { Picture, FeedbackForm },
  mixins: [inViewport],
  data() {
    return {
      visible: false,
    }
  },
  watch: {
    'inViewport.now'(visible) {
      this.visible = visible
    },
  },
}
</script>

<style scoped lang="sass">
.the-footer
  padding: 32px 24px
  background: $bg-dark
  &__wraper
    width: 100%
    height: 100%
    max-width: 1140px
    margin: auto
    display: flex
    align-items: center
    flex-flow: column nowrap
    @include respond-to(xl)
      flex-flow: row-reverse
      justify-content: space-between
  &__nav
    display: flex
    justify-content: center
    max-width: 210px
    @include respond-to(md)
      width: 100%
      max-width: 980px
      justify-content: space-between
    @include respond-to(xl)
      width: 720px
  &__politics-list
    @include respond-to(md)
      display: flex
      justify-content: space-between
      width: 100%
    @include respond-to(xl)
      width: auto
      flex-flow: column
      align-items: flex-start
  &__politics
    color: #474747
    font-size: 15px
    font-weight: 400
    line-height: 20px
    letter-spacing: -0.15px
    text-decoration: none
    text-align: center
    a
      text-decoration: none
      color: inherit
.nav
  display: flex
  flex-flow: row wrap
  justify-content: space-around
  @include respond-to(md)
    justify-content: space-between
  &__link
    text-decoration: none
    cursor: pointer
    text-transform: uppercase
    text-align: center
    color: #ffffff
    font-size: 15px
    font-weight: 500
    margin-bottom: 0.7em
    &:hover
      color: $bg-accent
</style>
