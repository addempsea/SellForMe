<template>
  <div class="auth">
    <div class="details">
      <div>
        <h1>Login to Start Selling</h1>
      </div>
    </div>
    <div class="auth_form">
      <div class="response" :class="[apiResponse ? apiResponse.type: '']" v-show="showResponse">
        {{ apiResponse.message}}
      </div>
      <form @submit.prevent="login">
        <h1>Login</h1>
        <div class="form_item">
          <label for="username">Username</label>
          <input type="text" name="username" placeholder="Your Username" v-model="user.username">
        </div>
        <div class="form_item">
          <label for="password">Password</label>
          <input type="password" name="password" placeholder="Your Password" v-model="user.password">
        </div>
        <div class="text-center">
          <button :disabled="loading">
            <span v-if="loading">Loading..</span>
            <span v-else>Login</span>
          </button>
        </div>
        <div class="auth_check">
          <p>
            Dont have an account?
            <router-link :to="{name: 'register'}">Register</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>