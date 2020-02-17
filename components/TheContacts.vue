<!--suppress HtmlUnknownTarget -->
<template lang="pug">
  section.the-contacts#contacts
    transition(name='fade')
      .the-contacts__wraper(v-if="visible")
        img.the-contacts__logo(:src="require('~/assets/image/logo.png')")
        .the-contacts__contacts-wraper
          dl.col
            a(href="mailto:support@imweek.ru").the-contacts__contact-item
              dt.the-contacts__for-hoom Для слушателей:
              dd.the-contacts__contact support@imweek.ru
            a(href="mailto:partners@imweek.ru").the-contacts__contact-item
              dt.the-contacts__for-hoom Для спикеров и партнеров:
              dd.the-contacts__contact partners@imweek.ru
          dl.col
            a(href="mailto:kuzin@imweek.ru").the-contacts__contact-item
              dt.the-contacts__for-hoom Написать лично организатору:
              dd.the-contacts__contact kuzin@imweek.ru
            a(href="mailto:skype:live:.cid.ad196b27dab503b2?chat").the-contacts__contact-item
              dt.the-contacts__for-hoom Skype:
              dd.the-contacts__contact IMWEEK
          .the-contacts__socials
            a(href="https://vk.com/imweek")
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="17" viewBox="0 0 29 17"><g><g><path d="M14.306 16.828h1.724s.521-.057.788-.344c.245-.263.237-.757.237-.757s-.034-2.314 1.04-2.655c1.06-.336 2.42 2.237 3.86 3.226 1.09.748 1.919.585 1.919.585l3.854-.055s2.016-.124 1.06-1.709c-.079-.13-.557-1.172-2.866-3.315-2.417-2.243-2.093-1.88.818-5.76C28.513 3.683 29.222 2.24 29 1.623c-.21-.589-1.515-.433-1.515-.433l-4.34.027s-.321-.044-.56.099c-.233.14-.382.465-.382.465S21.516 3.61 20.6 5.163c-1.932 3.281-2.705 3.455-3.021 3.25-.735-.475-.551-1.907-.551-2.924 0-3.18.482-4.506-.94-4.849-.471-.114-.819-.189-2.025-.201-1.548-.016-2.859.005-3.6.368-.494.242-.875.78-.643.812.287.038.936.175 1.28.643.445.605.43 1.964.43 1.964s.255 3.742-.597 4.207c-.585.319-1.387-.332-3.11-3.309-.883-1.524-1.55-3.21-1.55-3.21s-.128-.314-.357-.483c-.278-.204-.666-.269-.666-.269l-4.124.027s-.62.017-.846.286c-.203.24-.017.735-.017.735s3.229 7.552 6.884 11.358c3.353 3.49 7.159 3.26 7.159 3.26z"/></g></g></svg>
            a(href="https://www.facebook.com/imweek.ru")
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22">
              <g>
                <g>
                <path d="M7.757 21.373v-9.698h3.255l.488-3.78H7.757V5.482c0-1.094.303-1.84 1.873-1.84l2.002-.001V.26C11.286.214 10.097.111 8.715.111c-2.886 0-4.862 1.762-4.862 4.997v2.787H.589v3.78h3.264v9.698z"/>
                </g>
              </g>
              </svg>
            a(href="https://instagram.com/imweek")
              <svg viewBox="0 0 512 512" width="23" height="23" xmlns="http://www.w3.org/2000/svg"><path d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm-117.40625 395.996094c-77.195312 0-139.996094-62.800782-139.996094-139.996094s62.800782-139.996094 139.996094-139.996094 139.996094 62.800782 139.996094 139.996094-62.800782 139.996094-139.996094 139.996094zm143.34375-246.976563c-22.8125 0-41.367188-18.554687-41.367188-41.367187s18.554688-41.371094 41.367188-41.371094 41.371094 18.558594 41.371094 41.371094-18.558594 41.367187-41.371094 41.367187zm0 0"/><path d="m256 146.019531c-60.640625 0-109.980469 49.335938-109.980469 109.980469 0 60.640625 49.339844 109.980469 109.980469 109.980469 60.644531 0 109.980469-49.339844 109.980469-109.980469 0-60.644531-49.335938-109.980469-109.980469-109.980469zm0 0"/><path d="m399.34375 96.300781c-6.257812 0-11.351562 5.09375-11.351562 11.351563 0 6.257812 5.09375 11.351562 11.351562 11.351562 6.261719 0 11.355469-5.089844 11.355469-11.351562 0-6.261719-5.09375-11.351563-11.355469-11.351563zm0 0"/></svg>
            a(href="https://www.youtube.com/channel/UC-xqC-gJMVjekUjyy0Ul98A")
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="27" height="20" viewBox="0 0 512 512" style="enable-background:new 0 0 27 20;" xml:space="preserve">
              <g>
              <g>
              <path d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80
                |c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904
                |C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728
                |c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816
                |c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096
                |C512,181.088,504.704,138.592,490.24,113.92z M192,352V160l160,96L192,352z"/>
                </g>
              </g>
              </svg>
            a(href="https://t.me/imweek_ru")
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22"><g><g><path  d="M25.663 1.687L21.9 20.297c-.275 1.318-1.072 1.634-2.176 1.025l-6.002-4.434a278.012 278.012 0 0 1-2.887 2.786c-.5.442-.684.618-1.166.612-.458-.007-.678-.286-.946-1.027l-2.207-6.767-5.77-1.8c-.931-.3-.971-1.543.288-1.907L24.06.068c1.056-.48 2.006.003 1.603 1.62zM9.65 18.912l.559-4.887 10.886-9.79c.291-.335.089-.818-.557-.385L7.42 12.08z"/><path  d="M25.663 1.687L21.9 20.297c-.275 1.318-1.072 1.634-2.176 1.025l-6.002-4.434a278.012 278.012 0 0 1-2.887 2.786c-.5.442-.684.618-1.166.612-.458-.007-.678-.286-.946-1.027l-2.207-6.767-5.77-1.8c-.931-.3-.971-1.543.288-1.907L24.06.068c1.056-.48 2.006.003 1.603 1.62zM9.65 18.912l.559-4.887 10.886-9.79c.291-.335.089-.818-.557-.385L7.42 12.08z"/></g></g></svg>
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
.the-contacts
  padding: 32px 24px
  background: #191919
  &__wraper
    width: 100%
    height: 100%
    display: flex
    align-items: flex-start
    flex-flow: column nowrap
    @include respond-to(md)
      flex-flow: row wrap
    @include respond-to(xl)
      max-width: 1140px
      margin: auto
  &__logo
    display: flex
    flex-flow: wrap row
    justify-content: space-around
    margin-bottom: 40px
  &__contact-item
    display: block
    text-decoration: none
    color: #848484
    font-size: 16px
    font-weight: 400
    cursor: pointer
    margin-bottom: 1em
    &:hover .the-contacts__contact
      color: $bg-accent
  &__contact
    color: #ffffff
  &__contacts-wraper
    @include respond-to(md)
      flex: 1
      display: flex
      flex-flow: row wrap
      max-width: 600px
    @include respond-to(xl)
      max-width: unset
  &__socials
    width: 188px
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-self: center
    a:hover svg
      fill: $bg-accent
    @include respond-to(md)
      margin-left: 70px
  &__socials svg
    fill: #404040
.col
  @include respond-to(md)
    margin-left: 70px
</style>
