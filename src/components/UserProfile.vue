<template>
  <v-card max-width="450px" class="mx-auto bg" elevation="2">
    <v-img class="" height="200px"

           gradient="150deg, rgb(185 224 255 / 58%) 0%, rgb(243 220 246 / 52%) 35%, rgb(223 255 242 / 74%) 74%">
    </v-img>
    <v-row justify="center">
      <v-col align-self="start" class="d-flex justify-center align-center pa-0" cols="12">
        <v-avatar class="profile avatar-center-height avatar-shadow" color="grey" size="164">
          <v-img :src="currentUser.image"></v-img>
        </v-avatar>
      </v-col>
    </v-row>
    <v-list-item color="black" class="profile-text-name ma-4 pt-16">
        <v-list-item-title class="text-h6">
         {{currentUser.username}}
        </v-list-item-title>
        <v-list-item-subtitle>{{currentUser.email}}</v-list-item-subtitle>
    </v-list-item>
    <p  class="pl-6 pr-6 pt-0">
      Bio: {{currentUser.bio}}
    </p>
    <v-textarea disabled label="bio" class="pa-6"> {{currentUser.bio}}</v-textarea>


  </v-card>
</template>

<script>
export default {
  name: "UserProfile",
  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user)
      return JSON.parse(JSON.stringify(this.$store.state.auth.user));
    }
  },
}
</script>

<style scoped>
.avatar-center-height {
  position: absolute;
}

.profile-text-name {
  margin-top: 70px;
}

.sutitles {
  margin: 5px;
  padding: 16px;
}
</style>