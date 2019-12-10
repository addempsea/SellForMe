<template>
  <nav class="navbar">
    <div>
      <router-link :to="{name: 'home'}" class="logo">SELLFORME</router-link>
    </div>
    <div class="search">
      <form @submit.prevent>
        <input type="text" placeholder="Search..." name="search" v-model="query" />
        <button class="navbar_button" @click.prevent="filter">Search</button>
      </form>
    </div>
    <ul class="navbar_menu" v-if="!loggedIn">
      <li>
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'register' }">Register</router-link>
      </li>
    </ul>
    <ul class="navbar_menu" v-else>
      <li>
        <router-link :to="{ name: 'add' }">Add</router-link>
      </li>
      <li>
        <a href="#" @click="signout">Logout</a>
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      query: ""
    };
  },
  computed: {
    ...mapGetters(["loggedIn"])
  },
  methods: {
    ...mapActions(["logout", "search"]),

    signout() {
      this.logout();
      this.$router.push({ name: "home" });
    },

    filter() {
      this.search(this.query);
      this.$router.push({ name: "search" });
    }
  }
};
</script>
<style scoped>
.navbar {
  box-shadow: 2px 4px 4px rgba(210, 105, 30, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 4.75rem;
  align-items: center;
  font-family: "Catamaran", sans-serif;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  position: -webkit-sticky;
}
.logo {
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
  color: #905e5e;
  text-decoration: none;
  background-color: #ffffff;
}
.search input {
  width: 400px;
  font-size: 16px;
  padding: 0.75rem 2rem;
  border: 1px solid #905e5e;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #ffffff;
}
.search form {
  display: flex;
  padding: 1rem;
  background-color: #ffffff;
}
.navbar_button {
  background: #905e5e;
  padding: 1rem 3rem;
  border: none;
  color: #ffffff;
  font-size: 16px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
}
.navbar_menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  background-color: #ffffff;
}
.navbar_menu li {
  margin: 0.5rem 2rem;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: border-bottom 500ms ease-in-out;
  background-color: #ffffff;
}
.navbar_menu a {
  color: #905e5e;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  background-color: #ffffff;
}
.navbar_menu li:hover {
  border-bottom: 2px solid #905e5e;
}
@media screen and (max-width: 768px) {
  .search {
    display: none;
  }
  .navbar {
    padding: 1rem;
  }
  .navbar_menu li {
    margin: 0.5rem 1rem;
  }
}
</style>