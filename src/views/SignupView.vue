<template>
  <div class="signbody">
    <img src="../assets/img/hh-icon.png" alt="Logo" width="" height="90" />
    <h1>Sign Up</h1>
    <div class="signup">
      <input type="text" v-model="name" placeholder="Enter Name" />
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button @click="signUp">Sign Up</button>
      <router-link to="/pages/signin" custom v-slot="{ navigate }">
        <button type="button" class="btnsignin" @click="navigate" role="link">
          Already have an account? Sign in
        </button></router-link
      >
      <div class="ermsg" v-if="errorMessage">{{ errorMessage }}</div>
      <div class="sussmsg" v-if="successMessage">{{ successMessage }}</div>
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
      errorMessage: "",
      successMessage: "",
    };
  },

  methods: {
    signUp(e) {
      e.preventDefault();
      console.log("done");
      axios
        .post(
          "http://localhost:8080/api/users/signup",
          {
            name: this.name,
            email: this.email,
            password: this.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          // User was successfully registered
          this.errorMessage = "";
          this.successMessage = "User was successfully registered.";
          this.email = "";
          this.password = "";
          this.name = "";
          this.$router.push({ name: "signin" });
        })
        .catch((error) => {
          if (error.response.status === 409) {
            // User already exists
            this.errorMessage = "User with this email already exists.";
          } else {
            // Some other error occurred
            this.errorMessage = "Error occurred while registering user.";
          }
        });
    },
  },
};
</script>

<style>
.signbody {
  text-align: center;
  margin-top: 3em;
  margin-bottom: 3em;
}

.signup input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}

.signup button {
  width: 320px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  color: #fff;
  background: #06af9b;
  border: 1px solid skyblue;
  text-align: center;
}

.signup .btnsignin {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: rgb(199, 96, 12);
  color: #fff;
  cursor: pointer;
}

.ermsg {
  color: red;
  margin-bottom: 20px;
}

.sussmsg {
  color: green;
  margin-bottom: 20px;
}
</style>
