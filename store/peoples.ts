import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'peoples',
  stateFactory: true,
  namespaced: true
})
export default class Peoples extends VuexModule {
  wheels: number = 2
  name: string = 'Это из хранилища'

  @Mutation
  incrWheels (extra: number) {
    this.wheels += extra
  }

  get axles ():number {
    return this.wheels / 2
  }
}
