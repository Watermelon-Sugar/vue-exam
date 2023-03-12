<template>
  <div class="products">
    <h1 class="products-title">{{ msg }}</h1>
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <router-link :to="'/products/:id'" class="router-link"
        ><div class="card" v-for="product in products" :key="product.id">
          <img :src="product.thumbnail" alt="product-img" />

          <strong>
            <p>{{ product.brand }} - {{ product.title }}</p></strong
          >
          <h4>${{ product.price }}</h4>
          <h5>{{ product.description }}</h5>
          <span>#{{ product.category }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ProductsPage",
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);
    const isLoading = computed(() => store.state.isLoading);
    const msg = "Products";
    onMounted(() => {
      store.dispatch("fetchProducts");
    });
    return {
      products,
      isLoading,
      msg,
    };
  },
};
</script>

<style scoped>
.products-title {
  font-weight: 500;
  font-size: 1.5rem;
  color: #383a3a;
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
