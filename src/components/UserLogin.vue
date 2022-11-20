<template>
  <v-card
      class="mx-auto pa-md-6 justify-center"
      style="margin-bottom:1em"
      max-width="600px"
      elevation="8"
      tile
  >
    <v-form
        ref="form"
        lazy-validation
    >
      <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
      ></v-text-field>

      <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          counter
          @click:append="show = !show"
      ></v-text-field>
    </v-form>

    <v-card-item class="align-center justify-center">
      <v-btn
          outlined
          :loading="loading"
          color="primary"
          class="justify-center align-center "
          @click="submitForm"
      >
        Login
      </v-btn>
    </v-card-item>


  </v-card>
</template>
<script>
import router from "../router/router"

export default {
  data() {
    return {
      show:false,
      email: null,
      valid: true,
      loading: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
      ],
      password: null,

    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      router.push("/home");
    }
  },
  methods: {
    async submitForm() {
      // checks all inputs
      const resp = await this.$refs.form.validate();
      if (resp.valid) {
        // if ANY fail validation

        this.loading = true;
        const user ={
          email: this.email,
          password: this.password
        }
        this.$store.dispatch("auth/login", user).then(
            () => {
              router.push("/profile");
            },
            (error) => {
              this.loading = false;
              this.message =
                  (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                  error.message ||
                  error.toString();
              console.log(error)
            }
        );
      } else {
        alert('Form failed validation')
      }
    },
  },
}
</script>
<style scoped>

</style>