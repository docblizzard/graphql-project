<template>
  <TopMenu></TopMenu>
  <router-view></router-view>
</template>
  
<script>
import TopMenu from '../components/Page/layout/TopMenuComponent.vue'
export default {
  components:{
    TopMenu,
  },
  data() {
    return {
      }
  },
  methods: {}
}
</script>

<style scoped>
</style>