<template>
  <div class="vue-tempalte">
    <div class="tempwidth">
      <div class="ermsg" v-if="errorMessage">{{ errorMessage }}</div>
    <h3>Sign In</h3>
    <form @submit.prevent="submitForm" class="">
      

      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" name="email" id="email" class="form-control form-control-lg" :class="{ 'is-invalid': formErrors.email }" required>
        <div class="invalid-feedback" v-if="formErrors.email">{{ formErrors.email[0] }}</div>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" name="password" id="password" class="form-control form-control-lg" :class="{ 'is-invalid': formErrors.password }" required>
        <div class="invalid-feedback" v-if="formErrors.password">{{ formErrors.password[0] }}</div>
      </div>
      <div class="btclass">
      <router-link to="/pages/signUp" custom v-slot="{ navigate }">
            <button
              @click="navigate"
              type="button"
              class="btn btn-light text-dark me-2"
              role="link"
            >
              Don't have account? Register
            </button></router-link>
      <button type="submit" class="btn btn-dark btn-lg btn-block">{{ submitButtonText }}</button>
      
    </div> 
          
    </form>
  </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
data() {
return {
  name: '',
  email: '',
  password: '',
  submitButtonText: 'Sign In ',
  errorMessage:"",
  formErrors: {},
};
},

methods: {

submitForm(e) {
 e.preventDefault();
  axios.post("http://localhost:8080/api/users/signin", {
          email: this.email,
          password: this.password
  },
  {
			headers: {
				"Content-Type":"application/json"	
      }
			})
    .then(response => {
  
      if (response.status==200){
        localStorage.setItem("user-info",JSON.stringify(response.data))
        
        this.$router.push({name:'home'})
        
      }
      
    })
    .catch(error => {
      this.errorMessage = 'please check your Id and password';

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
  margin: 10px;
  padding: 20px;
}
.ermsg{
color: red;
}
</style>
