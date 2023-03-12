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
    async signup(context, { email, password }) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("Could not complete signup");
      }
    },
    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("Could not complete login");
      }
    },
    async logout(context) {
      await signOut(auth);
      context.commit("setUser", null);
    },
  },
});

const unsubscribe = onAuthStateChanged(auth, (user) => {
  store.commit("setIsAuthenticated", true);
  store.commit("setUser", user);
  unsubscribe();
});

export default store;
