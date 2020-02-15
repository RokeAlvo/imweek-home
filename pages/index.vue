<template lang="pug">
    .page
      the-first-screen
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
}
</script>

<style scoped lang="sass">
.page
  width: 100vw
</style>
