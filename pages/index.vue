<template lang="pug">
    .page(:class="{'webp': webp}")
      .page__first-screen
        TheFirstScreen
      TheRepresentativeCompanies
      TheGuinnessSection(
        :in-viewport-root-margin="'50% 0%'"
        :in-viewport-once='true'
        )
      TheDescription(
        :in-viewport-root-margin="'50% 0%'"
        :in-viewport-once='true'
        )
      TheProgram(
        :in-viewport-root-margin="'50% 0%'"
        :in-viewport-once='true'
        )
      TheGifts(
        :in-viewport-root-margin="'50% 0%'"
        :in-viewport-once='true'
        )
      ThePartners(
        :in-viewport-root-margin="'50% 0%'"
        :in-viewport-once='true'
      )
      TheContacts(
        :in-viewport-root-margin="'50% 0%'"
        :in-viewport-once='true'
      )
      TheFooter(
        :in-viewport-root-margin="'50% 0%'"
        :in-viewport-once='true'
      )
</template>

<script>
import Media from 'vue-media'
import TheRepresentativeCompanies from '../components/TheRepresentativeCompanies'
import TheGuinnessSection from '../components/TheGuinnessSection'
import TheDescription from '../components/TheDescription'
import TheProgram from '../components/TheProgram'
import TheGifts from '../components/TheGifts'
import ThePartners from '../components/ThePartners'
import TheContacts from '../components/TheContacts'
import TheFooter from '../components/TheFooter'
import TheFirstScreen from '~/components/TheFirstScreen'
export default {
  components: {
    TheFooter,
    TheContacts,
    ThePartners,
    TheFirstScreen,
    TheRepresentativeCompanies,
    TheGuinnessSection,
    TheDescription,
    TheProgram,
    TheGifts,
    Media,
  },
  data() {
    return {
      webp: {
        type: Boolean,
      },
    }
  },
  mounted() {
    let a
    checkWebp('alpha', (feature, result) => {
      a = result
    })
    if (a) {
      this.webp = true
    }
  },
}

// check_webp_feature:
//   'feature' can be one of 'lossy', 'lossless', 'alpha' or 'animation'.
//   'callback(feature, result)' will be passed back the detection result (in an asynchronous way!)
function checkWebp(feature, callback) {
  const kTestImages = {
    lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
    lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
    alpha:
      'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
    animation:
      'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
  }
  const img = new Image()
  img.onload = function() {
    const result = img.width > 0 && img.height > 0
    callback(feature, result)
  }
  img.onerror = function() {
    callback(feature, false)
  }
  img.src = 'data:image/webp;base64,' + kTestImages[feature]
}
</script>

<style scoped lang="sass">
.page
  width: 100%
  overflow: hidden
  &__first-screen
    margin: auto
    background: $bg-dark
</style>
