<template lang="pug">
  section.the-first-screen the-first-screen
    Picture(:img="'/image/aleksandr-mashkarev.png'")
    Picture(:img="'/image/alexander-levitas.png'")
    Picture(:img="'/image/alexey-molchanov.png'")
    Picture(:img="'/image/alexey-panov.png'")
    Picture(:img="'/image/anastasiya-gorkaya.png'")
    Picture(:img="'/image/andrey-gavrikov.png'")
    Picture(:img="'/image/andrey-karpov.png'")
    Picture(:img="'/image/anton-petrochenkov.png'")
    Picture(:img="'/image/damir-halilov.png'")
    Picture(:img="'/image/denis-kabalkin.png'")
    Picture(:img="'/image/denis-kaplunov.png'")
    Picture(:img="'/image/dmitriy-kot.png'")
    Picture(:img="'/image/dmitriy-sevalnev.png'")
    Picture(:img="'/image/dmitriy-tkachenko.png'")
    Picture(:img="'/image/dmitry-johov.png'")
    Picture(:img="'/image/dmitry-katyshik.png'")
    Picture(:img="'/image/dmitry-naumovec.png'")
    Picture(:img="'/image/elena-kozlova.png'")
    Picture(:img="'/image/evgeniya-kobets.png'")
    Picture(:img="'/image/filipp-tsarevskiy.png'")
    Picture(:img="'/image/guzel-sharafutdinova.png'")
    Picture(:img="'/image/igor-mann.png'")
    Picture(:img="'/image/ilya-balahnin.png'")
    Picture(:img="'/image/ilyana-levina.png'")
</template>

<script>
import Picture from './Picture'

export default {
  name: 'TheFirstScreen',
  components: {
    Picture
  }
}
</script>

<style scoped lang="sass">
.the-first-screen
  color: $main-text-color
</style>
