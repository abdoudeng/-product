import homeComponent from './components/home/index.vue'
import faq from './components/faq/faq.vue'
import about from './components/about/aboutus.vue'
import errorpage from './components/errorpage/errorpage.vue'
import cart from './components/cart/cart.vue'
import blog from './components/blog/blog.vue'
import checkout from './components/checkout/checkout.vue'
import compare from './components/compare/compare.vue'
import login from './components/login/login.vue'
import shop from './components/shop/shop.vue'
import myaccount from './components/myaccount/myaccount.vue'
import contact from './components/contact/contact.vue'
import admin from './components/admin/admin.vue'
import Blog from './components/admin/blog.vue'
import profile from './components/admin/profile.vue'
import user from './components/admin/user.vue'
import product from './components/admin/product.vue'

var routes = [
    {
        path:'/',
        component: homeComponent
    },
    {
        path:'/faq',
        component: faq
    },
    {
        path:'/about',
        component: about
    },
    {
        path:'/contact',
        component: contact
    },
    {
        path:'/myaccount',
        component: myaccount
    },
    {
        path:'/login',
        component: login
    },
    {
        path:'/errorpage',
        component: errorpage
    },
    {
        path:'/checkout',
        component: checkout
    },
    {
        path:'/cart',
        component: cart
    },
    {
        path:'/compare',
        component: compare
    },
    {
        path:'/shop',
        component: shop
    },
    {
        path:'/blog',
        component:  blog,
    },
    {
        path:'/admin',
        component: admin,
        children:[
            {
                path:'/blog',
                component: Blog
            },
            {
                path:'/product',
                component: product
            },
            {
                path:'/profile',
                component:profile
            },
            {
                path:'/user',
                component: user
            }
        ]
    }
    
]
export default routes