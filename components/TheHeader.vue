<template lang="pug">
.header
  img.header__logo(:src="require('~/assets/image/logo.png')")
  <!--  todo попросить иконку svg-->
  <svg class="header__burger" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="19" viewBox="0 0 32 19"><g><g><image width="32" height="19" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAATCAYAAADxlA/3AAAARklEQVRIS2P08vLS/fv37yWGAQKMow4YoJCHW8s46oDRECA3BNzd3f+TqxdZH9mJcNQB1Ah+kBlkR8GoA4ZPCIxWxwMdAgArHyKIizOEXgAAAABJRU5ErkJggg=="/></g></g></svg>
</template>

<script lang="ts">
export default {}
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
  // style
</style>
