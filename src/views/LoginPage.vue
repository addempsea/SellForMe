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
  background-color: #fff9f9;
}

.form_item {
  margin-bottom: 2rem;
  background-color: #fff9f9;
}

form {
  background-color: #fff9f9;
}

label {
  background-color: #fff9f9;
  margin-left: 0em;
}

input {
  background-color: #fff9f9;
  width: 120%;
  padding: 0.7em;
  border: 1px solid #905e5e;
  border-radius: 4px;
  font-size: 16px;
  color: black;
  margin-top: 0.5rem;
}

h1 {
  background-color: #fff9f9;
  color: #905e5e;
  margin-left: 2.5em;
}

.auth_form button {
  background: #dfcccc;
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
  color: #905e5e;
  background: #dfcccc;
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
  color: #905e5e;
  text-decoration: none;
  background-color: #fff9f9;
}
.auth_check a:hover {
  text-decoration: underline;
}

.api_res {
  background: #fff9f9;
  font-size: 1.5em;
  font-family: cursive;
  color: green;
}

@media screen and (max-width: 768px) {
  .auth_form {
    padding: 1rem;
  }
  .auth_form h1 {
    font-size: 1.5rem;
  }
}
</style>