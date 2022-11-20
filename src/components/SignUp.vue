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
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="Name"
        required
    ></v-text-field>

    <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
    ></v-text-field>

    <v-text-field
        v-model="password"
        :rules="passwordRules"
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
        Sign Up
      </v-btn>
    </v-card-item>


  </v-card>
</template>
<script>
import router from '../router/router'
export default {
  data() {
    return {
      show:false,
      email: null,
      valid: true,
      loading: false,
      successful: null,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
      ],
      name: null,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      password: null,
      passwordRules: [
        v => !!v || 'Password is required',
        v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
      ],
      confirm: null,

    }
  },

  methods: {
    async submitForm() {
      // checks all inputs
      const resp = await this.$refs.form.validate();
      console.log(resp)
      if (resp.valid) {
        // if ANY fail validation
        this.message = "";
        this.successful = false;
        this.loading = true;
        const user ={
            username : this.name,
            email: this.email,
            password: this.password
        }
        this.$store.dispatch("auth/register", user).then(
            (data) => {
              this.message = data.message;
              console.log("data",data)
              this.successful = true;
              this.loading = false;
              router.push('/home')

            },
            (error) => {
              this.message =
                  (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                  error.message ||
                  error.toString();
              this.successful = false;
              this.loading = false;
              console.log(error.response.data.errors)
              alert("email " + error.response.data.errors.email[0])
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