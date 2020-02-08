<template>
  <main class="page">
    <!--    <Filters class="page__aside" />-->
    <div class="page__content">
      <ContentCard title="Фильмы">
        <p>{{ fromVuex }} </p>
        <content-card title="вложенная карточка">
          aa
        </content-card>
      </ContentCard>
    </div>
  </main>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ContentCard from '~/components/ContentCard.vue'

@Component({
  components: {
    ContentCard
  }
})
export default class Page extends Vue {
  get fromVuex () {
    return this.$store.state.peoples.name
  }
}
</script>
<style lang="sass" scoped>
.page
  color: $bg-color
  &__content
    margin: 20px
</style>
