<template>
  <div class="container">
    <div class="signup">
      <div class="signup-box">
        <form @submit.prevent="handleSubmit">
          <h1>Signup Page</h1>
          <div class="formGroup">
            <label for="email">Email </label>
            <input
              type="email"
              name="email"
              autocomplete="off"
              v-model="email"
              placeholder="Email"
              required
            />
          </div>
          <div class="formGroup">
            <label for="password">Password </label>
            <input
              type="password"
              autocomplete="off"
              minlength="6"
              name="password"
              v-model="password"
              placeholder="Enter a minimum of 6 characters"
              required
            />
          </div>
          <div class="btn">
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "SignUpPage",
  setup() {
    const email = ref("");
    const password = ref("");
    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      await store.dispatch("signup", {
        email: email.value,
        password: password.value,
      });
      router.push("/");
    };

    return { handleSubmit, email, password };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background-color: #ddd0c8;
  color: #323232;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  color: #323232;
  background-color: #ddd0c8;
}
.signup {
  width: 400px;
  height: 500px;
  box-shadow: 0 0 40px 20px rgba(0, 0, 0, 0.26);
}

.signup-box {
  position: relative;
  width: 100%;
  height: 100%;
}
h1 {
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}
.formGroup {
  margin-bottom: 1.5rem;
}
label {
  margin-left: 1.25rem;
  font-weight: 400;
  font-size: 1.25rem;
  color: #323232;
}

input {
  appearance: none;
  border: none;
  outline: none;
  background: transparent;
  display: block;
  width: 100%;
  max-width: 350px;
  margin: 2rem auto;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
  opacity: 0.8;
  transition: 0.4s;
  color: #323232;
  border-bottom: 2px solid #323232;
}

input::placeholder {
  color: inherit;
}

input:focus {
  opacity: 1;
}
.btn {
  text-align: center;
}
button {
  background-color: #bfa181;
  color: #323232;
  font-weight: 700;
  margin: 4rem 0;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
  border: #bfa181;
}
@media (max-width: 425px) {
  .signup {
    width: 300px;
    height: 400px;
  }
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  label {
    font-size: 1rem;
  }
  input {
    max-width: 250px;
    margin: 1.5rem;
    font-size: 1rem;
  }

  button{
    margin: 2.5rem 0;
    padding: .7rem 1.5rem;
  }
}
@media (max-width: 375px) {
  .signup {
    width: 280px;
    height: 380px;
  }
  h1 {
    font-size: 1.4rem;
  }
 
  input {
    max-width: 250px;
    margin: 1.5rem 1rem;
    font-size: 1rem;
  }

  input::placeholder {
 font-size: .9rem;
}

  button{
    padding: .7rem 1.3rem;
  }
}
@media (max-width: 320px) {
  .signup {
    width: 240px;
    height: 350px;
  }
  h1 {
    font-size: 1.3rem;
  }
 label{
  
  margin-left: 1rem;
 }
  input {
    max-width: 210px;
    margin: 1.2rem 1rem;
  }

  button{
    margin: 2rem 0;
  }
}
@media (max-width: 240px) {
  .signup {
    width: 180px;
    height: 330px;
  }
  h1 {
    font-size: 1rem;
  }
 label{
  font-size: .95rem;
  margin-left: .5rem;
 }
  input {
    max-width: 160px;
    margin: 1rem .6rem;
  }
input::placeholder {
 font-size: .8rem;
}
  button{
    padding: .4rem .8rem;
    margin: 2rem 0;
  }
}
</style>
