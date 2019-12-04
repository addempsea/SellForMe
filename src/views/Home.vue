<template>
  <div>
    <div class="container">
      <h3>
        Buy and sell for free on SellForMe <br>
        Post ads for Cars, Phones, Shoes, Clothes and many more. <br>
        Anything you want, there is somebody that wants to sell.
      </h3>
    </div>
    <div class="item_display">
      <div>
        <div class="item_card">
          <div>
            <i>edit</i>
            <i>delete</i>
          </div>
          <div>
            <img src="" alt="">
          </div>
          <div>
            <p>name and desc</p>
            <p>price</p>
          </div>
          <div>
            <button>
              <a href="">Contact me</a>
            </button>
          </div>
        </div>
      </div>
       <div>
        <p>gggg</p>
      </div>
       <div>
        <p>gggg</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  
};
</script>
<style scoped>
.container {
  background: url("../assets/image 1.jpg");
  font-size: 40px;
  text-align: center;
  padding: 5rem
  /* background-color: black */
}

h3{
  font-size: 40px;
  text-align: center;
  background: none;
  
}

.item_display {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 2em;
  
}
</style>
