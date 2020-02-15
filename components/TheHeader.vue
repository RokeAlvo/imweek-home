<template lang="pug">
.header
  img.header__logo(:src="require('~/assets/image/logo.png')")
  <!--  todo попросить иконку svg-->
  <svg @click="$modal.show('nav-menu')" class="header__burger" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="19" viewBox="0 0 32 19"><g><g><image width="32" height="19" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAATCAYAAADxlA/3AAAARklEQVRIS2P08vLS/fv37yWGAQKMow4YoJCHW8s46oDRECA3BNzd3f+TqxdZH9mJcNQB1Ah+kBlkR8GoA4ZPCIxWxwMdAgArHyKIizOEXgAAAABJRU5ErkJggg=="/></g></g></svg>
  modal(
    name="nav-menu"
    width="350"
    height="auto"
    :scrollable="true"
    :pivotX="1"
    :pivotY="0"
    ).menu
      button( @click="$modal.hide('nav-menu')").menu__button-close ✖
      .menu__link(@click="onClick('Организаторы')") Организаторы
      .menu__link(@click="onClick('Программа')") Программа
      .menu__link(@click="onClick('Подарки')") Подарки
      .menu__link(@click="onClick('Партнеры')") Партнеры
      .menu__link(@click="onClick('Контакты')") Контакты
      .menu__form
        FeedbackForm(button-text="Принять участие")
        p.menu__form-description Гарантируем отсутствие спама и рекламы


</template>

<script>
import FeedbackForm from './FeedbackForm'
export default {
  components: { FeedbackForm },
  methods: {
    onClick(value) {
      this.$modal.hide('nav-menu')
      switch (value) {
        case 'Организаторы':
          this.$scrollTo('#description')
          break
        case 'Программа':
          this.$scrollTo('#program')
          break
        case 'Подарки':
          this.$scrollTo('#gifts')
          break
        case 'Партнеры':
          this.$scrollTo('#partners')
          break
        case 'Контакты':
          this.$scrollTo('#contacts')
          break
      }
    },
  },
}
</script>

<style scoped lang="sass">
.header
  width: 100%
  height: 100px
  background: $bg-dark
  padding: 0 24px
  display: flex
  align-items: center
  justify-content: space-between
  &__burger
    color: #7d7d7d
    cursor: pointer
.menu::v-deep
  .v--modal-box
    display: flex
    flex-flow: nowrap column
    align-items: flex-end
    padding: 24px
  .menu__button-close
    background: transparent
    border: none
    font-size: 32px
    margin-bottom: 24px
    &:hover
      filter: opacity(0.3)
      cursor: pointer
  .menu__link
    color: black
    cursor: pointer
    font-weight: bold
    font-size: 18px
    line-height: 23px
    margin-bottom: 28px
    &:hover
      filter: opacity(0.3)
  .menu__form
    margin-top: 28px
  .menu__form-description
    font-weight: normal
    font-size: 12px
    line-height: 15px
    text-align: center
    color: #000000
    margin-top: 10px
</style>
