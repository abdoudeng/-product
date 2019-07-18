<template>
  <div class="layout">
     <div class="header-menu-area text-center">
                                <nav>
                                    <ul class="main-menu">
                                        <li><router-link to="/admin/user">User </router-link>
                                        </li>
                                        <li><router-link to="/admin/profile">Profile</router-link>
                                        </li>
                                        <li><router-link to="/admin/blog">Blog</router-link>
                                        </li>
                                        <li><router-link to="/admin/product">Product</router-link></li>
                                        
                                    </ul>
                                </nav>
                            </div>
    <router-view></router-view>
  </div>
</template>

<script>
import blog from './blog.vue'
import product from './product.vue'
import profile from './profile.vue'
import user from './user.vue'

export default {
  name: 'layout',
  components:{
      blog, product, profile, user
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
