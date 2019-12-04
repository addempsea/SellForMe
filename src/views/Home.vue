<template>
  <div>
    <div class="container">
      <h3>
        Buy and sell for free on SellForMe
        <br />Post ads for Cars, Phones, Shoes, Clothes and many more.
        <br />Anything you want, there is somebody that wants to sell.
      </h3>
    </div>
    <div class="item_display">
      <div v-for="item in getItems" :key="item._id" class="item_holder">
        <div class="edit">
          <span><i class="fa fa-pencil" aria-hidden="true"></i></span>
          <span><i class="fa fa-trash" aria-hidden="true"></i></span>
        </div>
        <div class="image">
          <img :src=item.image_url :alt=item.name>
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
    ...mapGetters(["getItems"])
  },

  methods: {
    ...mapActions(["fetchItems"])
  },

  created() {
    return this.fetchItems();
  }
};
</script>
<style scoped>
.container {
  background: url("../assets/image 1.jpg");
  font-size: 40px;
  text-align: center;
  padding: 5rem;
  
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

/* i {
  background: #ffff;
} */

.edit {
  display: flex;
  justify-content: space-between;
  /* background: #ffff; */
}

.image {
  display: flex;
  justify-content: center;
  
}
.item_holder {
  max-width: 100%;
  background: #ffff;
}
</style>
