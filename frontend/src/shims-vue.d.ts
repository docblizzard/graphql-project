/* eslint-disable */
import { Store } from 'vuex';

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  // Custom properties on Vue instance
  interface ComponentCustomProperties {
    $store: Store<any>; // Adjust 'any' to match your Vuex store state type
  }
}