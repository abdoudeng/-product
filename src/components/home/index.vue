<template>
  <div>
      <slide></slide>
      <feature></feature>
        <collection></collection>
        <product></product>
        <deal></deal>
        <listproduct></listproduct>
        <about></about>
        <blog></blog>
        <modal></modal>
		</div>
</template>

<script>
import slide from './slide.vue'
import blog from './blog.vue'
import collection from './collection.vue'
import feature from './feature.vue'
import product from './product.vue'
import deal from './deal.vue'
import listproduct from './listproduct.vue'
import about from './about.vue'
import brand from './brand.vue'
import modal from './modal.vue'

export default {
  name: 'homeComponent',
  components:{
      collection, feature,
      deal, product, listproduct,
      about, brand, slide, modal, blog
  }
}
</script>

<style>

</style>
