<template lang="pug">
  .picture
      picture()
          source(
            v-if="currentOptions.webp375"
            :data-srcSet="webp375"
            :srcset="webp375"
            media="(max-width: 500px)"
            type="image/webp"
          )
          source(
            v-if="currentOptions.img375"
            :data-srcSet="img375"
            :srcSet="img375"
            media="(max-width: 500px)"
          )
          source(
            v-if="currentOptions.webp"
            :data-srcSet="webp"
            :srcSet="webp"
            type="image/webp"
          )
          source(
            :data-srcSet="img"
            :srcSet="img"
          )
          img(
            :class="{lazyload: currentOptions.lazy}"
            :data-src="img"
            :src="imgSrc"
            )
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      default() {
        return {
          webp: true,
          webp375: true,
          img375: true,
          sqip: true,
          lazy: true,
        }
      },
    },
  },
  computed: {
    currentOptions() {
      return {
        webp: true,
        webp375: true,
        img375: true,
        sqip: true,
        lazy: true,
        ...this.options,
      }
    },
    fileName() {
      return this.img.substring(0, this.img.lastIndexOf('.'))
    },
    ext() {
      return this.img.substring(this.img.lastIndexOf('.') + 1)
    },
    imgSrc() {
      return this.currentOptions.sqip ? this.sqip : this.img
    },
    sqip() {
      return this.fileName + '.sqip.svg'
    },
    webp() {
      return this.fileName + '.webp'
    },
    img375() {
      return this.fileName + '.375.' + this.ext
    },
    webp375() {
      return this.fileName + '.375.' + 'webp'
    },
  },
}
</script>

<style scoped lang="sass">
img
  max-width: 100%
  width: 100%
  /*min-width: 100%*/
  /*min-height: 100%*/
</style>
