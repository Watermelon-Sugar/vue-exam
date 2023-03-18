<template>
  <div class="container">
    <div class="home">
      <h1>Welcome to Lac Shop!</h1>
      <div v-if="!user">
        <h4>
          <router-link to="/signup" class="router-link">Signup</router-link>
          if you do not have an existing account.
        </h4>
        <h4>
          <router-link to="/login" class="router-link">Login</router-link>
          if you already have an account with us.
        </h4>
      </div>

      <div v-if="user">
        <h2>
          Welcome, {{ user.email }}, click
          <router-link to="/products" class="here">here</router-link> to view the catalog.
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "HomePage",
  setup() {
    const store = useStore();

    return {
      user: computed(() => store.state.user),
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  padding-top: 13rem;
}
.here {
  text-decoration: none;
  color: #b78700;
}
.router-link {
  text-decoration: none;
  font-size: 1.8rem;
  color: #b78700;
}
h1 {
  font-size: 3rem;
}
h4 {
  font-size: 1.3rem;
}

@media (max-width: 768px) {
  .container {
    padding-top: 10rem;
  }
  h1 {
    font-size: 2.5rem;
  }
  h4 {
    font-size: 1.2rem;
  }
}

@media (max-width: 426px) {
  .container {
    padding-top: 11rem;
  }
  h1 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1rem;
  }
  .router-link {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1.4rem;
  }
}

@media (max-width: 375px) {
  .container {
    padding-top: 12rem;
  }
  h1 {
    font-size: 1.8rem;
  }
  h4 {
    font-size: 0.85rem;
  }
  .router-link {
    font-size: 1.2rem;
  }
  h2 {
    font-size: 1.2rem;
  }
}

@media (max-width: 320px) {
  h1 {
    font-size: 1.65rem;
  }
  h4 {
    font-size: 0.75rem;
  }
  .router-link {
    font-size: 1rem;
  }
  h2 {
    font-size: 1.1rem;
  }
}

@media (max-width: 280px) {
  h1 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 0.7rem;
  }
  .router-link {
    font-size: 0.9rem;
  }
}

@media (max-width: 240px) {
  h1 {
    font-size: 1.25em;
  }
  h4 {
    font-size: 0.6rem;
  }
  .router-link {
    font-size: 0.8rem;
  }
  h2 {
    font-size: 0.75rem;
  }
}
</style>
