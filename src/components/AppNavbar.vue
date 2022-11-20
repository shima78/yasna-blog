<template>
  <v-card class="overflow-hidden" >
    <v-app-bar
        absolute
        style="background-color: darkblue; color: white"
        elevate-on-scroll
    >
      <v-toolbar-title @click="$router.push('/home')">Yasna Blog</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-card-item v-if="loggedIn">
        <v-btn to="/home" @click="logOut">
          logout
        </v-btn>
        <v-btn to="/profile" >
          Profile
        </v-btn>
      </v-card-item>
     <v-card-item v-else>
       <v-btn to="/login" >
         login
       </v-btn>
       <v-btn to="/signUp">
         sign up
       </v-btn>

     </v-card-item>


    </v-app-bar>
      <v-container style="height: 1500px;margin-top: 4em " >
        <router-view/>
      </v-container>

  </v-card>
</template>
<script>
import router from '../router/router'
import store from '../store/index'
export default {
  name: "AppNavbar",
  computed: {
    loggedIn() {
      return  this.$store.state.auth.status.loggedIn
    },
  },
  methods: {
    logOut() {
      store.dispatch('auth/logout')
      router.push('/login')
    }
  }

}
</script>

<style scoped>

</style>