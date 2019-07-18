<template>
  <div class="slider-area">
		    <div class="hero-slider owl-carousel">
		        <!--Single Slider Start-->
		        <div class="single-slider"  :style="'background-image: url('+slide1+')'"> 
                    <div class="hero-slider-content">
                        <h1>let’s solve hunger together with monthly Offer</h1>
                        <h2>Tumbler  Alarm Clock</h2>
                        <div class="slider-btn">
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
		        </div>
		        <!--Single Slider End-->
		        <!--Single Slider Start-->
		        <div class="single-slider" :style="'background-image: url('+slide2+')'">   
                    <div class="hero-slider-content">
                        <h1>let’s solve hunger together with monthly Offer</h1>
                        <h2>Perfect Bottle Grinder</h2>
                        <div class="slider-btn">
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
		        </div>
		        <!--Single Slider End-->
		    </div>
		</div>
</template>

<script>
import * as slide1 from '../../assets/img/slider/home1-slider1.jpg'
import * as slide2 from '../../assets/img/slider/home1-slider2.jpg'
export default {
  name: 'slide',
  data(){
      return {
          slide1: slide1,
          slide2: slide2
      }
  }
}
</script>

<style>

</style>
