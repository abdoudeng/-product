<template>
  <div class="contact-us-area pb-55">
		    <div class="container">
		        <div class="row">
		            <div class="col-lg-3 col-md-4">
		                <div class="store-information">
		                    <div class="store-title">
		                        <h4>Product</h4>
		                        <div class="communication-info">
                                    <!--Single Communication Start-->
		                            <div class="single-communication">
		                                <div class="communication-icon">
		                                    <i class="fa fa-map-marker"></i>
		                                </div>
		                                <div class="communication-text">
		                                    <span>Indecor - Responsive Bootstrap4 Template <br>United States</span>
		                                </div>
		                            </div>
		                            <!--Single Communication End-->
                                    <!--Single Communication Start-->
		                            <div class="single-communication">
		                                <div class="communication-icon">
		                                    <i class="fa fa-phone"></i>
		                                </div>
		                                <div class="communication-text">
		                                    <span>Call us: <br><a href="">(800) 123 4567</a></span>
		                                </div>
		                            </div>
		                            <!--Single Communication End-->
                                    <!--Single Communication Start-->
		                            <div class="single-communication">
		                                <div class="communication-icon">
		                                    <i class="fa fa-envelope"></i>
		                                </div>
		                                <div class="communication-text">
		                                    <span>Email us: <br><a href="mailto:demo@hastech.com">demo@hastech.com</a></span>
		                                </div>
		                            </div>
		                            <!--Single Communication End-->
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <div class="col-lg-9 col-md-8">
		                <div class="content-wrapper">
		                    <div class="page-content">
		                        <div class="contact-form">
                                    <div class="contact-form-title">
                                        <h3>Contact us</h3>
                                    </div>
		                            <form id="contact-form" action="mail.php" method="post">
		                                <div class="row">
		                                    <div class="col-lg-6">
                                                <div class="contact-form-style mb-20">
                                                    <input name="name" placeholder="Full Name" type="text">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="contact-form-style mb-20">
                                                    <input name="email" placeholder="Eail Address" type="email">
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="contact-form-style mb-20">
                                                    <input name="subject" placeholder="Subject" type="text">
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="contact-form-style">
                                                    <textarea name="message" placeholder="Message"></textarea>
                                                    <button class="default-btn" type="submit"><span>SEND MESSAGE</span></button>
                                                </div>
                                            </div>
		                                </div>
		                            </form>
		                            <p class="form-messege"></p>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style>

</style>
