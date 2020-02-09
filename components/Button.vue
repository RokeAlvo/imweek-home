<template lang="pug">
button.button(type="button")
  slot.button__content
</template>

<script>
export default {}
</script>

<style scoped lang="sass">
.button
  width: 271px
  height: 65px
  justify-content: center
  align-items: center
  background-color: $bg-accent
  font-size: 18px
  border: none
  color: $text-accent-color
  &_big-font
    font-size: 24px
    font-weight: 400
// style
</style>
