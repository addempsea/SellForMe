<template>
  <div class="auth">
    <div class="auth_form">
      <form @submit.prevent="signin">
        <h1>Login</h1>
        <div class="form_item">
          <label for="username">Email</label>
          <br />
          <input type="text" name="username" placeholder="Your email" v-model="user.email" />
        </div>
        <div class="form_item">
          <label for="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            v-model="user.password"
          />
        </div>
        <p class="api_res">{{ apiResponse.message }}</p>
        <div class="text-center">
          <button>Login</button>
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
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "LoginPage",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },

  computed: {
    ...mapGetters(["apiResponse"]),

    isValid() {
      if (this.user.email == "" || this.user.password == "") {
        return false;
      } else {
        return true;
      }
    }
  },

  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        setTimeout(() => {
          this.$router.push({ name: "add" });
        }, 2000);
      }
    }
  },

  methods: {
    ...mapActions(["login"]),

    signin() {
      if (this.isValid) {
        this.login(this.user);
      } else {
        alert("All fields are required");
      }
    }
  }
};
</script>

<style scoped>
.auth_form {
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 15rem;
  background-color: #ffffff;
}

.form_item {
  margin-bottom: 2rem;
  background-color: #ffffff;
}

form {
  background-color: #ffffff;
}

label {
  background-color: #ffffff;
  margin-left: 0em;
}

input {
  background-color: #ffffff;
  width: 100%;
  padding: 0.7em;
  border: 1px solid blue;
  border-radius: 4px;
  font-size: 16px;
  color: black;
  margin-top: 0.5rem;
}

h1 {
  background-color: #ffffff;
  color: blue;
  margin-left: 2.5em;
}

.auth_form button {
  background: blue;
  padding: 1rem 3rem;
  border: none;
  color: #fffffff;
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  transition: all 200ms ease-in;
}

.auth_form button:hover {
  color:white;
  background: purple;
}

.text-center {
  text-align: center;
  background-color: #ffffff;
}

.auth_check p {
  text-align: center;
  font-size: 16px;
  background-color: #ffffff;
}
.auth_check a {
  color: blue;
  text-decoration: none;
  background-color: #ffffff;
}
.auth_check a:hover {
  text-decoration: underline;
}

.api_res {
  background: #ffffff;
  font-size: 1.5em;
  font-family: sans-serif;
  color: green;
}

@media screen and (max-width: 768px) {
  .auth_form {
    display: flex;
    justify-content: center;
  }
}
</style>