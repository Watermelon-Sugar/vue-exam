<template>
  <div class="signup">
    <form @submit.prevent="handleSubmit">
      <h1>Signup Page</h1>
      <div class="formGroup">
        <label for="email">Email</label>
        <input type="text" name="email" v-model="email" autocomplete="email" required />
      </div>
      <div class="formGroup">
        <label for="password">Password</label>
        <input
          type="password"
          name="newPassword"
          v-model="password"
          autocomplete="password"
          required
        />
      </div>
      <button type="submit">Signup</button>
      <div v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "SignupPage",
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        await store.dispatch("signup", {
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } catch (err) {
        error.value = err.message;
      }
    };

    return { handleSubmit, email, password, error };
  },
};
</script>

<style scoped>
.signup {
  text-align: center;
}

.formGroup {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
label {
  margin-right: 15px;
  font-weight: 400;
  font-size: 1rem;
  color: #383a3a;
}

input {
  font-weight: 400;
  height: 0.75rem;
  border: 1px solid #e2e2;
  box-shadow: 0px 2px 2px rgba(33, 37, 41, 0.5), 0px 0px 1px rgba(33, 37, 41, 0.8);
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #383a3a;
}
input:focus {
  outline: none;
  border: 1px solid #e2e2;
}

button {
  width: 150px;
  padding: 0.5rem;
  background-color: #dcd0c3;
  border: none;
  border-radius: 0.25rem;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.025rem;
  color: #d16644;
  cursor: pointer;
}
</style>
