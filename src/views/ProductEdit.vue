<template>
  <div class="home mt-5">
    <div class="card">
    	<div class="card-body">
    		<div class="row">
    			<div class="col-sm-6 offset-sm-3">
    				<div class="card">
    					<form @submit.prevent="handleSubmit" enctype="multipart/form-data">
    						<div class="card-header"><h5>Edit Product</h5></div>
    						<div class="card-body">
    							<div class="form-group">
    							  <label for="productTitle">Product Title <span class="text-danger">*</span></label>
    							  <input type="text" class="form-control" v-model="product.title">
    							</div>
    							<div class="form-group">
    							  <label for="productDescription">Description</label>
    							  <textarea class="form-control" v-model="product.description"></textarea>
    							</div>
    							<div class="form-group">
    							  <label for="productPrice">Price <span class="text-danger">*</span></label>
    							  <input type="text" class="form-control" v-model="product.price">
    							</div>
    							<div class="form-group">
    							  <label for="productImage">Image</label>
    							  <input type="file" class="form-control" @change="selectFile">
    							</div>
    						</div>
    						<div class="card-footer text-right">
    							<button type="submit" class="btn btn-primary btn-sm"><i class="fas fa-check-square"></i> Update</button>
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
    import {mapGetters} from 'vuex'

	export default{
		name: 'ProductEdit',
        computed:{
            ...mapGetters(['user'])
        },
		data(){
			return{
                id: this.$route.params.id,
                product: {},
				title: '',
				description: '',
				price: '',
				image: null
			}
		},
        async created(){
            if (this.user == null) {
                this.$router.push('/');
            }

            const response = await axios.get('products/' + this.id);
            this.product = response.data;
        },
		methods: {
			selectFile(event) {
			    this.image = event.target.files[0];
			},

			async handleSubmit(){
				const data = new FormData();
				data.append('title', this.product.title);
				data.append('description', this.product.description);
				data.append('price', this.product.price);
				data.append('image', this.image);
                data.append('_method', 'PUT');

				await axios.post('products/' + this.id, data)
                            .then(response => {
                                this.$toast.success(response.data.message);
                            })
                            .catch(error => {
                                // console.log(error.response.data.message);
                                this.$toast.error(error.response.data.message);
                            });

			}
		}
	}
</script>