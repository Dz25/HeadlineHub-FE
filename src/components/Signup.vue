<template>
  <div class="vue-tempalte">
    <div class="tempwidth">
      
      <div class="ermsg" v-if="errorMessage">{{ errorMessage }}</div>
      <div  class="sussmsg" v-if="successMessage">{{ successMessage }}</div>
      <h3>Sign In</h3>
      
      <form @submit.prevent="submitForm" class="">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            v-model="name"
            type="text"
            name="name"
            id="name"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': formErrors.name }"
            required
            autofocus
          />
          <div class="invalid-feedback" v-if="formErrors.name">
            {{ formErrors.name[0] }}
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="email"
            type="email"
            name="email"
            id="email"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': formErrors.email }"
            required
          />
          <div class="invalid-feedback" v-if="formErrors.email">
            {{ formErrors.email[0] }}
          </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            name="password"
            id="password"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': formErrors.password }"
            required
          />
          <div class="invalid-feedback" v-if="formErrors.password">
            {{ formErrors.password[0] }}
          </div>
        </div>
        <div class="btclass">
          <router-link to="/pages/signin" custom v-slot="{ navigate }">
            <button
              @click="navigate"
              type="button"
              class="btn btn-light text-dark me-2"
              role="link"
            >
              already have an account?Sign in 
            </button></router-link>
            <button type="submit" class="btn btn-dark btn-lg btn-block">
          {{ submitButtonText }}
        </button>
            
            </div>
        
      </form>
      
  
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      submitButtonText: "Register",
      formErrors: {},
      errorMessage:"",
      successMessage:""
    };
  },

  methods: {
    submitForm(e) {
      e.preventDefault();

      axios
        .post("http://localhost:8080/api/users/signup", {
          name: this.name,
          email: this.email,
          password: this.password,
        }, {
			headers: {
				"Content-Type":"application/json"
      }
			})
        .then((response) => {
          
              // User was successfully registered
          this.errorMessage = '';
          this.successMessage = 'User was successfully registered.';
          this.user.email = '';
          this.user.password = '';
          this.user.name = '';
           // Redirect to login page after 3 seconds
           setTimeout(() => {
            this.$router.push({name:'signup'})
          }, 3000);
          
        })
        .catch((error) => {
          if (error.response.status === 409) {
            // User already exists
            this.errorMessage = 'User with this email already exists.';
          } else {
            // Some other error occurred
            this.errorMessage = 'Error occurred while registering user.';
          }
        });
    },
  },
};
</script>

<style>
.tempwidth{
width: 400px;
margin-left: 33%;
}
.btclass{
  margin-top: 10px;
  
}
.ermsg{
color: red;
}
.sussmsg{
  color: green;
}
</style>
