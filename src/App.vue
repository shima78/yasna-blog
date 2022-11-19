<template>
  <v-app >
      <AppNavbar/>

  </v-app>
</template>

<script>

import AppNavbar from "@/components/AppNavbar"
export default {
  name: 'App',

  components: {

    AppNavbar
  },

  data: () => ({
    //
  }),
}
</script>
