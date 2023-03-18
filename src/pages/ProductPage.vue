<template>
  <div class="container">
    <div class="product">
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else class="card-container">
        <div class="card">
          <img :src="product.thumbnail" alt="product-img" />
          <strong>
            <p>{{ product.brand }} - {{ product.title }}</p>
          </strong>
          <h4>${{ product.price }}</h4>
          <h5>{{ product.description }}</h5>
          <span>#{{ product.category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProduct } from "@/composables/getProduct.js";
export default {
  name: "ProductPage",

  setup() {
    const { product, isLoading, error } = getProduct();
    return { product, isLoading, error };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-container {
  display: flex;
  justify-content: center;
}
.card {
box-shadow: 0 0 40px 20px rgba(0, 0, 0, 0.26);
  width: 400px;
  max-height: 550px;
  transition: 0.3s;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 1rem;
  text-align: center;
  margin-top: 3rem;
}
img {
  width: 300px;
  height: 300px;
}

h5,
h4 {
  font-size: 1rem;
}
p {
  font-size: 1.25rem;
}


@media (max-width: 768px) {
  .card {
    width: 300px;
    height: 350px;
  }
  .card img {
    width: 200px;
    height: 200px;
  }
  p {
    font-size: 1rem;
  }
  h5,
  h4 {
    font-size: 0.8rem;
  }
}
@media (max-width: 425px) {
  .card {
    width: 250px;
    height: 300px;
  }

  .card img {
    width: 150px;
    height: 150px;
  }
  p {
    font-size: 0.8rem;
  }
  h5,
  h4 {
    font-size: 0.6rem;
  }
}

@media (max-width: 375px) {
  .card {
    width: 200px;
    height: 200px;
  }
  .card img {
    width: 100px;
    height: 100px;
  }
  p {
    font-size: 0.7rem;
  }
  h5,
  h4 {
    font-size: 0.5rem;
  }
  span {
    font-size: 0.5rem;
  }
}
</style>
