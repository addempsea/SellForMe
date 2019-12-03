<template class='temp'>
  <div class="auth">
    <div class="auth_form">
      <!-- <div class="response" :class="[apiResponse ? apiResponse.type: '']" v-show="showResponse">
        {{ apiResponse.message}}
      </div>-->
      <form @submit.prevent="add">
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
          <input
            type="url"
            name="image_url"
            placeholder="Image url"
            v-model="item.image_url"
          />
        </div>

       <div class="text-center">
          <button>
            Add
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: 'edit',
    data() {
        return {
            item: {
                name: '',
                price: '',
                contact: '',
                image_url: ''
            },
        }
    },
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