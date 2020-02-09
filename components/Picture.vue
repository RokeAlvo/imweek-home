<template lang="pug">
    picture()
        <!--        source(-->
        <!--          :data-srcSet="img + '.webp'"-->
        <!--          type="image/webp"-->
        <!--          )-->
        source(
          :data-srcSet="webp375"
          media="(max-width: 500px)"
          type="image/webp"
        )
        source(
          :data-srcSet="img375"
          media="(max-width: 500px)"
        )
        source(
          :data-srcSet="webp"
          type="image/webp"
        )
        source(
          :data-srcSet="img"
        )
        img(
          class="lazyload"
          :data-src="img"
          :src="sqip"
          )
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      im: '~/assets/image/aleksandr-mashkarev.png'
    }
  },
  computed: {
    fileName() {
      return this.img.substring(0, this.img.lastIndexOf('.'))
    },
    ext() {
      return this.img.substring(this.img.lastIndexOf('.') + 1)
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
    }
  }
}
</script>

<style scoped lang="sass">
/*img[lazy='loading']*/
/*  filter: blur(15px)*/
img
  min-width: 300px
  min-height: 300px
</style>
