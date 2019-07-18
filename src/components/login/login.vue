<template>
  <div class="login-register-area pb-50">
		    <div class="container">
		        <div class="row">
                    <!--Login Form Start-->
		            <div class="col-md-6 col-12">
		                <div class="customer-login-register">
		                    <div class="form-login-title">
		                        <h2>Login</h2>
		                    </div>
		                    <div class="login-form">
		                        <div>
		                            <div class="form-fild">
		                                <p><label>Username or email address <span class="required">*</span></label></p>
		                                <input name="username" v-model="loginform.username" value="" type="text">
		                            </div>
		                            <div class="form-fild">
		                                <p><label>Password <span class="required">*</span></label></p>
		                                <input name="password" v-model="loginform.password" value="" type="password">
		                            </div>
		                            <div class="login-submit">
		                                <button type="submit" @click="login" class="form-button">Login</button>
		                                <label>
		                                    <input class="checkbox" name="rememberme" value="" type="checkbox">
		                                    <span>Remember me</span>
		                                </label>
		                            </div>
		                            <div class="lost-password">
		                                <a href="#">Lost your password?</a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <!--Login Form End-->
		            <!--Register Form Start-->
		            <div class="col-md-6 col-12">
		                <div class="customer-login-register register-pt-0">
		                    <div class="form-register-title">
		                        <h2>Register</h2>
		                    </div>
		                    <div class="register-form config-2">
		                        <div>
		                            <div class="form-fild">
		                                <p><label>Username or email address <span class="required">*</span></label></p>
		                                <input name="username" v-model="registerform.username" value="" type="text">
		                            </div>
		                            <div class="form-fild">
		                                <p><label>Password <span class="required">*</span></label></p>
		                                <input name="password" v-model="registerform.password" value="" type="password">
		                            </div>
		                            <div class="register-submit">
		                                <button type="submit" @click="register" class="form-button">Register</button>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <!--Register Form End-->
		        </div> 
		    </div>
		</div>
</template>

<script>
export default {
  name: 'login',
  data(){
	  return {
		  registerform:{
			  username: '',
			  password: ''
		  },
		  loginform: {
			  username: '',
			  password: ''
		  }
	  }
  },
  methods: {
	  login(){
		  this.$.ajax({
			  method: 'get',
			  url:'http://127.0.0.1:7001/api/login',
			  data:{
				  username: this.loginform.username,
				  password: this.loginform.password
			  }
		  }).then((res)=>{
			  console.log(res)
			  window.localStorage.setItem('user', res.loginname)
			  this.$router.push('/')
		  })
	  },
	  register(){
		  this.$.ajax({
			  method: 'post',
			  url:'http://127.0.0.1:7001/api/login',
			  data:{
				  username: this.registerform.username,
				  password: this.registerform.password
			  }
		  }).then((res)=>{
			  console.log(res)
		  })
	  }
  }
}
</script>

<style>

</style>
