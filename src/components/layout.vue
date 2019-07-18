<template>
  <div class="layout">
    <headerComponent></headerComponent>
    <mainsearch></mainsearch>
    <breadcrum></breadcrum>
    <router-view></router-view>
    <footerComponent></footerComponent> 
  </div>
</template>

<script>
import headerComponent from './headerComponent.vue'
import mainsearch from './mainsearch.vue'
import breadcrum from './breadcrum.vue'
import footerComponent from './footerComponent.vue'

export default {
  name: 'layout',
  components:{
    footerComponent, headerComponent, breadcrum, mainsearch
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
