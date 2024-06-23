<template>
  <TopMenu></TopMenu>
  <router-view></router-view>
</template>
  
<script lang="ts">
import TopMenu from '../components/Page/layout/TopMenuComponent.vue'
import { defineComponent } from 'vue';
export default defineComponent({
  components:{
    TopMenu,
  },
  data() {
    return {
      }
  },
  methods: {}
})
</script>

<style scoped>
</style>