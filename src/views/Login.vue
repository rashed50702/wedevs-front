<template>
  <div class="login mt-5">
  	<div class="row">
  		<div class="col-sm-4 offset-sm-4">
  			<div class="card">
  				<div class="card-header text-center"><h3>Admin Login</h3></div>
  				<div class="card-body">
  					<form @submit.prevent="handleSubmit">
  					  <div class="form-group">
  					    <label for="exampleInputEmail1">Email address</label>
  					    <input type="email" class="form-control" v-model="email" required="required">
  					    <p v-if="error" class="text-danger">{{error}}</p>
  					  </div>
  					  <div class="form-group">
  					    <label for="exampleInputPassword1">Password</label>
  					    <input type="password" class="form-control" v-model="password" required="required">
  					  </div>
  					  <button type="submit" class="btn btn-primary">Submit</button>
  					</form>
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
	import axios from 'axios'
	export default{
		name: 'Home',
		data(){
			return{
				email: '',
				password: '',
				error:''
			}
		},
		methods:{
			async handleSubmit(){
				try{
					const response = await axios.post('login', {
						email: this.email,
						password: this.password
					});


					localStorage.setItem('token', response.data.access_token);
					// console.log(response);
					this.$store.dispatch('user', response.data.user);
					this.$router.push('/home');
				}catch(e){
					this.error = "These credentials do not match our records!"
				}
			}
		}
	}
</script>