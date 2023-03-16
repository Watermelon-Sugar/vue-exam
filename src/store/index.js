import { createStore } from "vuex";
import axios from "axios";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
const store = createStore({
  state: {
    user: null,
    product: [],
    products: [],
    productsApi: "https://dummyjson.com/products",
    productApi: "https://dummyjson.com/products/1",
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchProducts(context) {
      context.commit("setLoading", true);
      try {
        const res = await axios.get(context.state.productsApi);
        context.commit("setProducts", res.data.products);
        context.commit("setLoading", false);
      } catch (error) {
        context.commit("setError", error);
        context.commit("setLoading", false);
      }
    },
    async fetchProduct(context) {
      context.commit("setLoading", true);
      try {
        const res = await axios.get(context.state.productApi);
        context.commit("setProduct", res.data);
        context.commit("setLoading", false);
      } catch (error) {
        context.commit("setError", error);
        context.commit("setLoading", false);
      }
    },
    async signup({ commit }, details) {
      const { email, password } = details;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email already in use");
            break;
          case "auth/invalid-email":
            alert("Invalid email address");
            break;
          case "auth/weak-password":
            alert("Password is too weak");
            break;
          case "auth/operation-not-allowed":
            alert("Operation not allowed");
            break;
          default:
            alert("Something went wrong");
        }
        return;
      }
      commit("setUser", auth.currentUser);
    },
    async login({ commit }, details) {
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/invalid-email":
            alert("Invalid email address");
            break;
          case "auth/wrong-password":
            alert("Wrong password");
            break;
          default:
            alert("Something went wrong");
        }
        return;
      }
      commit("setUser", auth.currentUser);
    },
    async logout(context) {
      await signOut(auth);
      context.commit("setUser", null);
    },
  },
});

const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    store.commit("setUser", user);
    store.commit("setIsAuthenticated", true);
  } else {
    store.commit("setUser", null);
    store.commit("setIsAuthenticated", false);
  }
  unsubscribe()
});

export default store;
