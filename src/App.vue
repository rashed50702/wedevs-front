<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="nav-item" v-if="user" to="/dashboard">Dashboard</router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-if="!user">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item" v-if="user">
              <img class="card-img-top" src="./assets/user-avatar.png" alt="UserImage">
              <div>
                <a href="javascript:void(0)" @click="handleLogout">Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <router-view :user="user"/> -->

    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapGetters} from 'vuex'

  export default{
    // data(){
    //   return {
    //     user: null
    //   }
    // },

    // async created(){
    //   const response = await axios.get('user-profile', {
    //     headers: {
    //       Authorization: 'Bearer ' + localStorage.getItem('token')
    //     }
    //   });

    //   this.user = response.data;
    // },

    async created(){
      // const response = await axios.get('user-profile', {
      //   headers: {
      //     Authorization: 'Bearer ' + localStorage.getItem('token')
      //   }
      // });
      const response = await axios.get('user-profile');

      this.$store.dispatch('user', response.data);
    },

    methods:{
      handleLogout(){
        localStorage.removeItem('token');
        this.$store.dispatch('user', null);
        this.$router.push('/');
      }
    },
    computed:{
      ...mapGetters(['user'])
    }
  }
  
</script>
<style scoped>
.nav-item img{
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
</style>