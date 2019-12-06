<template>
    <div class="whole">
      <div class="container">
        <h3>
          Buy and sell for free on SellForMe
          <br />Post ads for Cars, Phones, Shoes, Clothes and many more.
          <br />Anything you want, there is somebody that wants to sell.
        </h3>
      </div>
      <div class="item_display">
        <div v-for="item in getItem" :key="item._id" class="item_holder">
          <div class="edit" v-if="loggedIn">
            <span><i class="fa fa-pencil" aria-hidden="true" @click="edit(item._id)"></i></span>
            <span><i class="fa fa-trash" aria-hidden="true" @click="deleteItem(item._id)"></i></span>
          </div>
          <div class="image">
            <img :src=item.image_url :alt=item.name>
          </div>
          <div class="item_name">
            <p> {{item.name}} </p>
          </div>
          <div class="item_price">
            <p> ${{item.price}} </p>
          </div>
          <div class="item_contact">
            <button>
              
              <a :href="`https://api.whatsapp.com/send?phone=234${item.contact}`" target="__blank">Contact me</a>
              
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapGetters(["getItem", 'loggedIn'])
  },

  methods: {
    ...mapActions(["fetchItems", "deleteItem"]),

    edit(id) {
      this.$router.push({
        name: "edit",
        params: { id: id }
      });
    }
    
  },

  created() {
    return this.fetchItems();
  }
};

</script>
<style scoped>

.whole {
  background: #F9F5F5
}

.container {
  background: url("../assets/image 1.jpg");
  font-size: 40px;
  text-align: center;
  padding: 5rem;
  margin-top: 20px;
}

h3 {
  font-size: 40px;
  text-align: center;
  background: none;
}

.item_display {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 2em;
  grid-gap: 30px;
  
}


.edit {
  display: flex;
  justify-content: space-between;
  margin: 1em;
  cursor: pointer;
}

.image {
  display: flex;
  justify-content: center;
  margin: 1em;
  
}
.item_holder {
  max-width: 100%;
  background: #ffff;
}
.item_name {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #905E5E;
  mix-blend-mode: multiply;
  opacity: 0.5;
}

.item_price {
  text-align: center;
  font-style: normal;
  font-weight: 600;
}

.item_contact {
  text-align: center;
  margin-bottom: 1em;
}
.item_contact a {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  
  text-decoration: none;
  text-align: center;

  color: #FFFBFB;
}
.item_contact button {
 background: #B89797;
 border: none;
}

@media screen and (max-width: 768px) {
 .item_display {
   display: block;
 }
}
</style>
