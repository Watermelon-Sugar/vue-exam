<template>
  <div class="products">
    <h1 class="products-title">{{ msg }}</h1>
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
            <span>View</span></router-link>
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
.products-title {
  font-weight: 500;
  font-size: 1.5rem;
  color: #383a3a;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 400px;
  height: auto;
  transition: 0.3s;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 15px;
  text-align: center;
}
.card img {
  width: 300px;
  height: 300px;
}
.router-link {
  text-decoration: none;
}

.view{
  margin-top: 15px;
}
.view span{
  
  font-weight: 500;
  color: #383a3a;
  font-size: 1.2rem;
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
  .view{
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
