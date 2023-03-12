<template>
  <div class="product">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
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
.product {
  margin: 30px 0px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 400px;
  transition: 0.3s;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 15px;
  text-align: center;
  position: relative;
  left: 38%;
}
img {
  width: 100%;
}
.router-link {
  text-decoration: none;
}
h5,
h4 {
  font-size: 1rem;
  color: #383a3a;
}
p {
  font-size: 1.25rem;
  color: #726a77;
}
span {
  color: #d16644;
}
</style>
