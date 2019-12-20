<template class='temp'>
  <div class="auth">
    <div class="auth_form">
      <form @submit.prevent="addItems">
        <h1>Add New Item</h1>
        <div class="form_item">
          <label for="name">Name of Item</label>
          <br />
          <input type="text" name="name" placeholder="name of item" v-model="item.name" />
        </div>
        <div class="form_item">
          <label for="Price">Price</label>
          <br />
          <input type="number" name="price" placeholder="price of item" v-model="item.price" />
        </div>
        <div class="form_item">
          <label for="password">Contact</label>
          <br />
          <input
            type="string"
            name="contact"
            placeholder="enter your whatsapp number"
            v-model="item.contact"
          />
        </div>
        <div class="form_item">
          <label for="Image Url">Image URL</label>
          <br />
          <input type="url" name="image_url" placeholder="Image url" v-model="item.image_url" />
        </div>
        <p class="api_res">{{ apiResponseAdd.message }}</p>
        <div class="text-center">
          <button>Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "edit",
  data() {
    return {
      item: {
        name: "",
        price: "",
        contact: "",
        image_url: ""
      }
    };
  },

  computed: {
    ...mapGetters(["apiResponseAdd"]),
    isValid() {
      if (
        this.item.price == "" ||
        this.item.contact == "" ||
        this.item.name == "" ||
        this.item.image_url == ""
      ) {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    ...mapActions(["addItem"]),

    addItems() {
      if (this.isValid) {
        this.addItem(this.item);
        this.item = "";
      } else {
        alert("All fields are required");
      }
    }
  }
};
</script>

<style scoped>
.auth_form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 6rem;
  background-color: #fff9f9;
}

.form_item {
  margin: 2rem 0;
  background-color: #fff9f9;
}

form {
  background-color: #fff9f9;
}

label {
  background-color: #fff9f9;
}

input {
  background-color: #fff9f9;
  width: 100%;
  padding: 0.7em;
  border: 1px solid blue;
  border-radius: 4px;
  font-size: 16px;
  color: black;
  margin-top: 0.5rem;
}

h1 {
  background-color: #fff9f9;
  color: blue;
  margin-left: 2.5em;
}

.auth_form button {
  background: blue;
  padding: 1rem 3rem;
  border: none;
  color: #ffffff;
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
  background-color: #fff9f9;
}

.auth_check p {
  text-align: center;
  font-size: 16px;
  background-color: #fff9f9;
}
.auth_check a {
  color: blue;
  text-decoration: none;
  background-color: #fff9f9;
}
.auth_check a:hover {
  text-decoration: underline;
}
.text-center {
  margin-bottom: 0.5rem;
}

.api_res {
  background: #fff9f9;
  font-size: 1.5em;
  font-family: sans-serif;
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