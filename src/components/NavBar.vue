<template>
  <nav>
    <template v-if="isAuthenticated">
      <div>
        <router-link to="/">Home</router-link>
      </div>

      <div v-if="!user" class="right">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>

      <div v-if="user" class="right">
        <router-link to="/products">Products</router-link>
        <span>Logged in as {{ user.email }}</span>
        <button @click="handleClick">Logout</button>
      </div>
    </template>
  </nav>
  <router-view />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const handleClick = () => {
      store.dispatch("logout");
    };
    return {
      handleClick,
      user: computed(() => store.state.user),
      isAuthenticated: computed(() => store.state.isAuthenticated),
    };
  },
};
</script>
<style scoped>
nav {
  padding: 20px;
  background-color: #dcd0c3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

nav a {
  font-weight: bold;
  color: #383a3a;
  font-size: 1rem;
  text-decoration: none;
  padding: 10px;
  display: flex;
  margin-right: 8px;
}
nav a.router-link-exact-active {
  color: #d16644;
  background-color: #8e8f92;
  border-radius: 10px;
}
.right {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
span {
  font-size: 0.75rem;
  color: #d16644;
}
button {
  margin-left: 5px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: #a38f85;
  color: #cdc6c3;
  cursor: pointer;
}

@media (max-width: 425px) {
  nav a {
    font-size: 0.75rem;
    padding: 8px;
    margin-right: 7px;
  }
  span {
    font-size: 0.7rem;
  }
}

@media (max-width: 375px) {
  nav {
    padding: 15px;
  }
  nav a {
    font-size: 0.7rem;
    padding: 7px;
    margin-right: 6px;
  }
  span {
    font-size: 0.65rem;
  }
}
</style>
