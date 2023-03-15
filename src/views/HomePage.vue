<template>
  <div class="home">
    <h1>Products List</h1>
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else class="card-container">
      <div class="card" v-for="product in products" :key="product.id">
        <router-link :to="'/products/:id'" class="router-link">
          <div v-if="!user">
          <img :src="product.thumbnail" alt="product-img" />

          <strong>
            <p>{{ product.brand }} - {{ product.title }}</p></strong
          >
          </div>
          <div v-if="user">
          <h4>${{ product.price }}</h4>
          <h5>{{ product.description }}</h5>
          <span>#{{ product.category }}</span>
          </div>
        </router-link>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
export default {
  name: "HomePage",
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);
    const isLoading = computed(() => store.state.isLoading);
    onMounted(() => {
      store.dispatch("fetchProducts");
    });
    return {
      user: computed(() => store.state.user),
      products, isLoading,
    };
  },
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 1.5rem;
  color: #383a3a;
}
.home {
  margin: 10px 20px;
  font-weight: 500;
  font-size: 1.5rem;
  text-decoration: none;
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
  max-height: 550px;
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
}</style>
