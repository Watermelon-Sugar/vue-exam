<template>
  <div>
    <nav>
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
    </nav>
    <router-view />
  </div>
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
    };
  },
};
</script>
<style scoped>
nav {
  padding: 20px;
  background-color: #323232;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

nav a {
  font-weight: bold;
  color: #cdc6c3;
  font-size: 1rem;
  text-decoration: none;
  padding: 10px;
  display: flex;
  margin-right: 8px;
}
nav a.router-link-exact-active {
  color: #bfa181;
  border-bottom: 2px solid #bfa181;
}
.right {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
span {
  font-size: 0.75rem;
  color: #ddd0c8;
}

button {
  margin-left: 0.5rem;
  padding: 0.5rem;
  border: #bfa181;
  border-radius: 0.5rem;
  background-color: #bfa181;
  color: #323232;
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
@media (max-width: 320px) {
  nav a {
    font-size: 0.65rem;
    padding: 6px;
    margin-right: 20px;
  }
  span {
    font-size: 0.6rem;
  }
}

@media(max-width: 280px) {
  nav {
    padding: 10px;
  }
  nav a {
    font-size: 0.6rem;
    padding: 5px;
    margin-right: 0;
  }
  span {
    font-size: 0.55rem;
  }
  button {
    font-size: .6rem;
    margin-left: 0.5rem;
    padding: 0.4rem;
  }
}
@media (max-width: 240px) {
  nav a {
    font-size: 0.55rem;
    padding: 4px;
    margin-right: 13px;
  }
  span {
    font-size: 0.5rem;
  }
  button {
    font-size: 0.5rem;
  }
}
</style>
