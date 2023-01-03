<template>
  <div class="container">
    <section class="product my-5">
      <div class="product__photo">
        <div class="photo-container">
          <div class="photo-main">
            <img :src="productDetails.thumbnail" />
          </div>
        </div>
      </div>

      <div class="product__info">
        <div class="title">
          <h1>{{ productDetails.title }}</h1>
          <span>Rating: {{ productDetails.rating }}/5.0</span>
        </div>
        <div class="price">
          R$ <span>{{ productDetails.price }}</span>
        </div>

        <div class="description">
          <h3>DETAILS</h3>
          <p class="desc">{{ productDetails.description }}</p>
        </div>
        <button class="buy--btn">ADD TO CART</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productID: this.$route.params.id,
      productDetails: {}, // to be filled with api data of product details
    };
  },

  mounted() {
    fetch(`https://dummyjson.com/products/${this.productID}`)
      .then((res) => res.json())
      .then((data) => (this.productDetails = data));
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-rows: 1fr;
  font-family: "Raleway", sans-serif;
  background-color: #eee;
}
h3 {
  font-size: 0.7em;
  letter-spacing: 1.2px;
  color: #a6a6a6;
}
img {
  max-width: 100%;
  filter: drop-shadow(1px 1px 3px #a6a6a6);
}
/* ----- Product Section ----- */
.product {
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  margin: auto;
  padding: 2.5em 0;
  min-width: 600px;
  background-color: white;
  border-radius: 5px;
}
/* ----- Photo Section ----- */
.product__photo {
  position: relative;
}
.photo-container {
  position: absolute;
  left: -2.5em;
  display: grid;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
}
.photo-main {
  border-radius: 6px 6px 0 0;
  background: radial-gradient(#e5f89e, #ccc);
}

.photo-main img {
  position: absolute;
  left: -3.5em;
  top: 6rem;
  max-width: 110%;
  filter: saturate(150%) contrast(120%) hue-rotate(10deg)
    drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
  border-radius: 20px;
}

/* ----- Informations Section ----- */
.product__info {
  padding: 0.8em 0;
}
.title h1 {
  margin-bottom: 0.1em;
  color: #4c4c4c;
  font-size: 1.5em;
  font-weight: 900;
}
.title span {
  font-size: 0.7em;
  color: #a6a6a6;
}
.price {
  margin: 1.5em 0;
  color: #ff3f40;
  font-size: 1.2em;
}
.price span {
  padding-left: 0.15em;
  font-size: 2.9em;
}
.description {
  clear: left;
  margin: 2em 0;
}
.description h3 {
  margin-bottom: 1em;
}
.description ul {
  font-size: 0.8em;
  list-style: square;
  margin-left: 1em;
}
.description li {
  text-indent: -0.6em;
  margin-bottom: 0.5em;
}
.buy--btn {
  padding: 1.5em 3.1em;
  border: none;
  border-radius: 7px;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #fff;
  background-color: #ff3f40;
  box-shadow: 2px 2px 25px -7px #4c4c4c;
  cursor: pointer;
}
.buy--btn:active {
  transform: scale(0.97);
}

/* footer styles */
.footer-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  background: lightgray;
  padding: 2rem 0;
  margin-bottom: 0;
}
.copyright {
  background: #6f00ff;
  text-align: center;
  padding: 1rem 0;
  color: #fff;
}
</style>
