<template>
  <div class="home mt-5">
    <div class="card">
    	<div class="card-body">
    		<div class="row">
    			<div class="col-sm-6 offset-sm-3">
    				<div class="card">
    					<form @submit.prevent="handleSubmit" enctype="multipart/form-data">
    						<div class="card-header"><h5>Create New Product</h5></div>
    						<div class="card-body">
    							<div class="form-group">
    							  <label for="productTitle">Product Title</label>
    							  <input type="text" class="form-control" v-model="title">
    							</div>
    							<div class="form-group">
    							  <label for="productDescription">Description</label>
    							  <textarea class="form-control" v-model="description"></textarea>
    							</div>
    							<div class="form-group">
    							  <label for="productPrice">Price</label>
    							  <input type="text" class="form-control" v-model="price">
    							</div>
    							<div class="form-group">
    							  <label for="productImage">Image</label>
    							  <input type="file" class="form-control" @change="selectFile">
    							</div>
    						</div>
    						<div class="card-footer text-right">
    							<button type="submit" class="btn btn-primary btn-sm"><i class="fas fa-check-square"></i> Save</button>
    						</div>
    					</form>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
	import axios from 'axios'

	export default{
		name: 'ProductCreate',
		data(){
			return{
				title: '',
				description: '',
				price: '',
				image: null
			}
		},
		methods: {
			selectFile(event) {
			    this.image = event.target.files[0];
			},

			async handleSubmit(){
				const data = new FormData();
				data.append('title', this.title);
				data.append('description', this.description);
				data.append('price', this.price);
				data.append('image', this.image);

				await axios.post('product/save', data);
			}
		}
	}
</script>