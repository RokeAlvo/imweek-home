<template lang="pug">
.the-description
  transition(name='fade')
    .the-description__wraper(v-if="visible")
      h2.title.the-description__title Вас ждет качественно новый формат онлайн мероприятий
      article.article.the-description__content
        .article__title Здравствуйте!
        .article__subtitle Меня зовут Евгений Кузин.
        .article__subtitle Я организатор и идейный лидер Недели Интернет Маркетинга.
        .article__content Я намерен доказать, что онлайн-конференции могут быть полезными: с тщательно продуманной программой, опытными спикерами, информативными докладами, отсутствием рекламы и абсолютно бесплатным участием! Моя цель – организовать лучшую маркетинговую конференцию в мире!
      figure.the-description__video
        iframe(
          src="https://www.youtube.com/embed/jQhmZ-GzkSk"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          )
        figcaption.the-description__video-caption Посмотрите это небольшое видео и убедитесь, почему такое событие обязательно стоит посетить.
</template>

<script lang>
import inViewport from 'vue-in-viewport-mixin'

export default {
  components: {},
  mixins: [inViewport],
  data() {
    return {
      visible: false
    }
  },
  watch: {
    'inViewport.now'(visible) {
      this.visible = visible
    }
  }
}
</script>

<style scoped lang="sass">
.the-description
  &__wraper
    display: flex
    flex-flow: column nowrap
    align-items: center
    padding: 50px 0
  &__title
    padding: 0 24px
    margin-bottom: 34px
  &__content
    width: 100%
    display: flex
    flex-flow: column nowrap
    align-items: center
    padding: 0 24px
    margin-bottom: 35px
  &__video
    width: 100%
    iframe
      width: 100vw
      height: calc(100vw / 16 * 9)
      margin-bottom: 35px
  &__video-caption
    font-family: "Fira Sans", sans-serif
    color: $text-secondary-color
    text-align: center
    font-size: 20px
    font-weight: 500
    letter-spacing: -0.18px
    line-height: 120%
.article
  font-family: "Fira Sans", sans-serif
  color: $text-secondary-color
  text-align: center
  &__title
    font-size: 25px
    font-weight: 500
    letter-spacing: -0.25px
    line-height: 25px
    margin-bottom: 0.7em
  &__subtitle
    font-size: 20px
    font-weight: 500
    letter-spacing: -0.18px
    line-height: 120%
  &__content
    padding-top: 1em
    font-size: 18px
    font-weight: 300
    letter-spacing: -0.18px
    line-height: 25px
</style>
