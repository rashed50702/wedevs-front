<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="user">
    <div class="container-fluid">
      <router-link class="nav-item" to="/home">Home</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <img class="card-img-top" src="../assets/user-avatar.png" alt="UserImage">
            <div>
              <a href="javascript:void(0)" @click="handleLogout">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script type="text/javascript">
  import {mapGetters} from 'vuex'

  export default{
    name: 'Nav',
    methods:{
      handleLogout(){
        localStorage.removeItem('token');
        this.$store.dispatch('user', null);
        this.$router.push('/');
      }
    },

    computed: {
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