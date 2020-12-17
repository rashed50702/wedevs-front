<template>
  <div class="home mt-5">
    <div class="card">
    	<div class="card-header">
    		<router-link class="btn btn-sm btn-primary" to="/products/create"><i class="fas fa-plus-square"></i> Create Product</router-link>
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
    				      	<img :src="image_src+'/'+product.image" alt="Image" v-if="product.image != null" class="rounded mx-auto d-block">
    				      </td>
    				      <td class="align-middle text-center">
    				      	<router-link class="border border-secondary p-1" :to="'/products/'+product.id+'/edit'"><i class="fas fa-pencil-alt"></i></router-link>
    				      	<a href="javascript:void(0)" class="border border-danger text-danger p-1 ml-1" @click="handleDelete(product.id)"><i class="fas fa-trash-alt"></i></a>
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
		name: 'Home',
		computed:{
			...mapGetters(['user'])
		},

		data(){
			return {
				products: [],
                image_src: 'https://wedevsback.rashedulhasan.com/images/products'
			}
		},
		async created(){
			this.loadProducts();
			// console.log(this.user);
			if (this.user == null) {
				this.$router.push('/');
			}
		},
		methods:{
			async loadProducts(){
				const response = await axios.get('products');
				this.products = response.data;
			},

		  	handleDelete(id){
		  		if(confirm("Do you really want to delete?")){
		  	   		axios.delete('products/'+id);
		  	   		this.$toast.success("Deleted successfully");
		  	   		this.loadProducts();
		  		}
		  	}
		}
	}
</script>
<style scoped>
td img{
	width: 80px;
	height: 70px;
}
</style>