<template lang="pug">
  .page
    the-first-screen
    TheRepresentativeCompanies
    TheGuinnessSection(
      :in-viewport-root-margin="'0% 0%'"
      )
    TheDescription(
      :in-viewport-root-margin="'0% 0%'"
      )
    TheProgram(
      :in-viewport-root-margin="'0% 0%'"
      )
</template>

<script>
import TheRepresentativeCompanies from '../components/TheRepresentativeCompanies'
import TheGuinnessSection from '../components/TheGuinnessSection'
import TheDescription from '../components/TheDescription'
import TheProgram from '../components/TheProgram'
import TheFirstScreen from '~/components/TheFirstScreen'

export default {
  components: {
    TheFirstScreen,
    TheRepresentativeCompanies,
    TheGuinnessSection,
    TheDescription,
    TheProgram
  }
}
</script>

<style scoped lang="sass">
.page
  width: 100vw
</style>
