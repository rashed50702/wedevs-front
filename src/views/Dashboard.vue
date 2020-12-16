<template>
  <div class="home mt-5">
    <div class="card">
    	<div class="card-header">
    		<router-link class="btn btn-sm btn-primary" to="/product/create"><i class="fas fa-plus-square"></i> Create Product</router-link>
    	</div>
    	<div class="card-body">
    		<div class="row">
    			<div class="col-sm-12">
    				<table class="table">
    				  <thead>
    				    <tr>
    				      <th scope="col">#</th>
    				      <th scope="col">Title</th>
    				      <th scope="col">Description</th>
    				      <th scope="col">Price</th>
    				      <th scope="col" class="text-center">Image</th>
    				      <th scope="col" class="text-center">Action</th>
    				    </tr>
    				  </thead>
    				  <tbody>
    				    <tr v-for="(product, index) in products" :key="index">
    				      <td class="align-middle">{{index  + 1}}</td>
    				      <td class="align-middle">{{product.title}}</td>
    				      <td class="align-middle">{{product.description}}</td>
    				      <td class="align-middle">{{product.price}}</td>
    				      <td class="align-middle">
    				      	<img src="../assets/default-product.jpg" alt="Image" v-if="product.image == null" class="rounded mx-auto d-block">
    				      	<img :src="'http://127.0.0.1:8000/images/products/'+product.image" alt="Image" v-if="product.image != null" class="rounded mx-auto d-block">
    				      </td>
    				      <td class="align-middle text-center">
    				      	<a href="/product" class="border border-secondary p-1"><i class="fas fa-pencil-alt"></i></a>
    				      	<a href="/product" class="border border-danger p-1 ml-2"><i class="fas fa-trash"></i></a>
    				      </td>
    				    </tr>
    				  </tbody>
    				</table>
    			</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
	import axios from 'axios'
	import {mapGetters} from 'vuex'

	export default{
		name: 'Dashboard',
		// props: ['user']
		computed:{
			...mapGetters(['user'])
		},
		// watch: {
		//     user: {
		//         handler(user) {
		//             console.log('user: ', user); //Debug
		//         },
		//         // deep: true
		//     }
		// },






		data(){
			return {
				products: []
			}
		},
		async created(){
			const response = await axios.get('products');
			this.products = response.data;

			console.log(response.data);
		}


		// async created(){
		// 	const response = await axios.get('user-profile', {
		// 		headers: {
		// 			Authorization: 'Bearer ' + localStorage.getItem('token')
		// 		}
		// 	});

		// 	this.user = response.data;
		// }
		// async created(){
		// 	const response = await axios.get('user-profile');
		// 	this.user = response.data;

		// 	// console.log(response);
		// }
	}
</script>
<style scoped>
td img{
	width: 80px;
	height: 70px;
}
</style>