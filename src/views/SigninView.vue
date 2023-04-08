<template>
  <div class="signbody">
    <img src="../assets/img/hh-icon.png" alt="Logo" width="" height="90" />
    <h1>Sign In</h1>
    <div class="signin">
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button @click="signIn">Sign in</button>
      <router-link to="/pages/signup" custom v-slot="{ navigate }">
        <button type="button" class="btnsignin" @click="navigate" role="link">
          Don't have an account? Sign up
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
      submitButtonText: "Sign In ",
      errorMessage: "",
      formErrors: {},
    };
  },

  methods: {
    signIn(e) {
      e.preventDefault();
      axios
        .post(
          "http://localhost:8080/api/users/signin",
          {
            email: this.email,
            password: this.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.status == 200) {
            localStorage.setItem("userName", response.data.name);
            console.log(response.data.name);
            localStorage.setItem("userID", response.data.id);

            this.email = "";
            this.password = "";
            this.$router.push({ name: "home" });
          }
        })
        .catch(() => {
          this.errorMessage = "please check your Id and password";
        });
    },
  },
};
</script>

<style>
.signbody {
  margin-top: 3em;
  margin-bottom: 3em;
  text-align: center;
}

.signin input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}

.signin button {
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

.signin .btnsignin {
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
