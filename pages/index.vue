<template lang="pug">
  .page
    the-first-screen
</template>

<script>
import TheFirstScreen from '~/components/TheFirstScreen'
export default {
  components: {
    TheFirstScreen
  }
}
</script>

<style scoped lang="sass">
.page
  display: flex
  width: 100vw
</style>
