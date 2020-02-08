<template>
  <div class="content-card card">
    <h3 class="content-card__title">
      {{ title }}
    </h3>
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ContentCard extends Vue {
  @Prop(String) readonly title: string | undefined
}
</script>

<style lang="sass">
.content-card
  max-width: 360px
  padding: 16px
  flex-wrap: wrap
  &__title
    display: flex
    justify-content: center
    width: 100%
    margin-bottom: 1em
</style>
