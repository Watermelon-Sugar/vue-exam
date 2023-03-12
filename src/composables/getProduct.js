import { useStore } from "vuex";
import { onMounted, computed } from "vue";

export function getProduct() {
  const store = useStore();
  const product = computed(() => store.state.product);
  const isLoading = computed(() => store.state.isLoading);
  const error = computed(() => store.state.error);

  onMounted(() => {
    store.dispatch("fetchProduct");
  });
  return { product, isLoading, error };
}

export default getProduct;
