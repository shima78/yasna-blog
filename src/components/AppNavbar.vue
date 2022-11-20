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

      <v-btn to="/login">
       login
      </v-btn>

      <v-btn to="/signUp">
        sign up
      </v-btn>


    </v-app-bar>
      <v-container style="height: 1500px;margin-top: 4em " >
        <router-view/>
      </v-container>

  </v-card>
</template>
<script>
export default {
  name: "AppNavbar",
  components:{

  },
}
</script>

<style scoped>

</style>