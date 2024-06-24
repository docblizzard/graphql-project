/* eslint-disable */
import { Store } from 'vuex';

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}>
  export default component
}

declare module '@vue/runtime-core' {
  // Custom properties on Vue instance
  interface ComponentCustomProperties {
    $store: Store<any>;
  }
}