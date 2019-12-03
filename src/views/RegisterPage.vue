<template class='temp'>
  <div class="auth">
    
    <div class="auth_form">
      <!-- <div class="response" :class="[apiResponse ? apiResponse.type: '']" v-show="showResponse">
        {{ apiResponse.message}}
      </div> -->
      <form @submit.prevent="register">
        <h1>CREATE AN ACCOUNT</h1>
        <div class="form_item">
          <label for="username">Name</label> <br> 
          <input type="text" name="username" placeholder="Your name" v-model="user.name">
        </div>
        <div class="form_item">
          <label for="username">Email</label> <br> 
          <input type="text" name="username" placeholder="Your email" v-model="user.email">
        </div>
        <div class="form_item">
          <label for="password">Password</label> <br> 
          <input type="password" name="password" placeholder="Your Password" v-model="user.password">
        </div>
        
        <!-- <input type="text" v-model="user.username"> -->
        <div class="text-center">
          <button :disabled="loading">
            <span v-if="loading">Loading..</span>
            <span v-else>Register</span>
          </button>
        </div>
        <div class="auth_check">
          <p>
            Have an account already?
            <router-link :to="{name: 'login'}">Login</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
export default {
    name: 'Register',

    data() {
        return {
            user: {
                email: '',
                password: '',
                name: ''
            },

        // inputType: 'password',
        // loading: false,
        // showResponse: false

        }
    },

    methods: {
       ...mapActions([
            'signup'
        ]),
        register() {
            this.signup(this.user)
        }
    }
}
</script>

<style scoped>
.auth_form {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 6rem;
  background-color: #fff9f9
}

.form_item {
  margin: 2rem 0;
  background-color: #fff9f9
}

form {
    background-color: #fff9f9
}

label {
    background-color: #fff9f9;
    
}

input {
    background-color: #fff9f9;
    width: 120%;
    padding: 0.7em;
    border: 1px solid #905E5E;
    border-radius: 4px;
    font-size: 16px;
    color: black;
    margin-top: 0.5rem;
}

h1 {
    background-color: #fff9f9;
    color: #905E5E;
    margin-left: 2.5em;
}

.auth_form button {
  background: #DFCCCC;
  padding: 1rem 3rem;
  border: none;
  color: #ffffff;
  font-size: 16px;
  border-radius: 4px;
  width: 120%;
  cursor: pointer;
  transition: all 200ms ease-in;
}

.auth_form button:hover {
  color: #905E5E;
  background: #DFCCCC;
}

.text-center {
  text-align: center;
   background-color: #fff9f9;
}

.auth_check p {
  text-align: center;
  font-size: 16px;
   background-color: #fff9f9;
}
.auth_check a {
  color:  #905E5E;
  text-decoration: none;
  background-color: #fff9f9;
}
.auth_check a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  .auth {
    grid-template-columns: 1fr;
  }
  .auth_form {
    padding: 1rem;
  }
  .auth_form h1 {
    font-size: 1.5rem;
  }
}

</style>