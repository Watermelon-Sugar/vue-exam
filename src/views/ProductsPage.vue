<template>
  <div class="container">
    <div class="products">
      <h2 class="products-title">{{ msg }}</h2>
      <div v-if="isLoading">
        <p>Loading...</p>
      </div>
      <div v-else class="card-container">
        <div class="card" v-for="product in products" :key="product.id">
          <img :src="product.thumbnail" alt="product-img" />

          <strong>
            <p>{{ product.brand }} - {{ product.title }}</p></strong
          >
          <h4>${{ product.price }}</h4>
          <h5>{{ product.description }}</h5>
          <span>#{{ product.category }}</span>

          <div class="view">
            <router-link :to="'/products/:id'" class="router-link">
              <span>View</span></router-link
            >
          </div>
        </div>
      </div>
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
.container {
  background-color: #ddd0c8;
  height: 100%;
  color: #323232;
}
.products-title {
  margin: 0;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0.5rem;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.card {
  box-shadow: 0 0 40px 20px rgba(0, 0, 0, 0.26);
  width: 400px;
  max-height: 550px;
  transition: 0.3s;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 15px;
  text-align: center;
}
.card img {
  width: 300px;
  height: 280px;
}
.router-link {
  text-decoration: none;
}
h5,
h4 {
  font-size: 1rem;
}
p {
  font-size: 1.25rem;
}
.view {
  margin-top: .9rem;
}
.view span{
  font-size: 1.2rem;
  font-weight: 500;
  color: #0c1a1a;
}

@media (max-width: 768px) {
  .card {
    width: 300px;
    height: auto;
  }
  .card img {
    width: 200px;
    height: 200px;
  }
  .view span {
    font-size: 1rem;
  }
  p {
    font-size: 1rem;
  }
  h5,
  h4 {
    font-size: 0.8rem;
  }
  .view {
    margin-top: 1rem;
  }
}

@media (max-width: 426px) {
  .products-title {
    font-size: 1.2rem;
  }
  .card {
    width: 200px;
    height: auto;
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

@media (max-width: 376px) {
  .card {
    width: 150px;
    height: auto;
  }
  .card img {
    width: 100px;
    height: 100px;
  }
  .view {
    margin-top: 5px;
  }
  .view span {
    font-size: 0.7rem;
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

@media (max-width: 321px) {
  .products-title {
    font-size: 1rem;
  }
  .card {
    width: 100px;
    height: auto;
  }
  .card img {
    width: 50px;
    height: 50px;
  }
  p {
    font-size: 0.5rem;
  }
  h5,
  h4 {
    font-size: 0.5rem;
  }
  span {
    font-size: 0.4rem;
  }
}
</style>
