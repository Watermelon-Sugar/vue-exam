<template>
  <div class="home">
    <h1>Products List</h1>
    <div v-for="product in products" :key="product.id">
      <div class="card">
        <img :src="product.thumbnail" alt="product-img" />

        <strong>
          <p>{{ product.brand }} - {{ product.title }}</p></strong
        >

        <div v-if="user">
          <h4>${{ product.price }}</h4>
          <span>{{ product.description }}</span>
          <h6>#{{ product.category }}</h6>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "HomePage",
  setup() {
    const products = computed(() => store.state.products);
    const store = useStore();
    return {
      user: computed(() => store.state.user),
      products,
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
h5,
h4 {
  font-size: 1.25rem;
  color: #383a3a;
}
p {
  font-size: 1rem;
  color: #726a77;
}
span {
  color: #d16644;
  font-size: 1rem;
}
h6 {
  font-size: 1rem;
}
</style>
