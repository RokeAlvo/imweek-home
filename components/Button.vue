<template lang="pug">
button.button(type="button" @click="$emit('click')")
  slot.button__content
</template>

<script>
export default {}
</script>

<style scoped lang="sass">
.button
  /*width: 271px*/
  min-height: 65px
  justify-content: center
  align-items: center
  background-color: $bg-accent
  font-size: 18px
  border: none
  color: $text-accent-color
  cursor: pointer
  &_big-font
    font-size: 24px
    font-weight: 400
// style
</style>
