import FirstComponent from "./FirstComponent.vue"

export default {
  install: ( app ) => {
    app.component( 'first-component', FirstComponent )
  }
}