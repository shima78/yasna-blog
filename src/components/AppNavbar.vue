<template>
  <v-card class="overflow-hidden" >
    <v-app-bar
        absolute
        style="background-color: darkblue; color: white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"

    >


      <v-toolbar-title>Yasna Blog</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn to="/login" v-if="!loggedIn">
       login
      </v-btn>
      <v-btn to="/signUp" v-if="!loggedIn">
        sign up
      </v-btn>
      <v-btn to="/home" v-if="loggedIn" @click="logOut">
        logout
      </v-btn>
      <v-btn to="/signUp" v-if="loggedIn">
        Profile
      </v-btn>


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
      return this.$store.state.auth.status.loggedIn;
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