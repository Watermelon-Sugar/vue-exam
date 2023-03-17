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
  margin-top: 6.25rem;
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
  color: #bfa181;
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
@media (max-width: 768px) {
  .container{
    margin-top: 4rem;
  }
  .signup {
  width: 350px;
  height: 400px;
  }
  h1 {
    font-size: 1.8rem;
  }
  label {
    font-size: 1rem;
  }
  input {
    max-width: 300px;
    margin: 1.5rem;
    font-size: 1rem;
  }

  button{
    margin: 3rem 0;
    padding: .7rem 1.5rem;
  }

}
@media (max-width: 375px) {
    .container {
  margin-top: 3rem;
}
  .signup {
    width: 250px;
    height: 350px;
  }
  h1 {
    font-size: 1.25rem;
  }
 
  input {
    max-width: 220px;
    margin: 1rem 1rem;
    font-size: 1rem;
  }

  input::placeholder {
 font-size: .8rem;
}

  button{
    margin: 2rem 0;
    padding: .7rem 1.3rem;
  }
}
@media (max-width: 320px) {
    .container {
  margin-top: 2.5rem;
}
  .signup {
    width: 220px;
    height: 320px;
  }
  h1 {
    font-size: 1.1rem;
  }
 label{
  
  margin-left: 1rem;
 }
  input {
    max-width: 190px;
    margin: .6rem 1rem;
  }
  input::placeholder {
 font-size: .75rem;
}
  button{
    padding: .7rem .8rem;
    font-size: .7rem;
    margin: 1.7rem 0;
  }
}
@media (max-width: 280px) {
   .signup {
    width: 200px;
    height:280px;
  }
  h1 {
    font-size: 1rem;
  }
  label {
    font-size:.9rem;
  }
  input {
    max-width: 170px;
    margin: .6rem 1rem;
  }
  input::placeholder {
 font-size: .7rem;
}
  button{
    padding: .5rem .6rem;
    margin: 1.4rem 0;
    font-size: .65rem;
  }
}
@media (max-width: 240px) {
  .signup {
    width: 150px;
    height: 250px;
  }
  h1 {
    font-size: .8rem;
  }
 label{
  font-size: .8rem;
  margin-left: .5rem;
 }
  input {
    max-width: 130px;
    margin: 0rem .6rem;
  }
input::placeholder {
 font-size: .54rem;
}
  button{
    padding: .4rem .5rem;
    margin: .8rem 0;
    font-size: .55rem;
  }
}
</style>
