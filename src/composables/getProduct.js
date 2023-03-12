import { ref } from "vue";
import { onMounted } from "vue";

export function getProduct() {
  const product = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchProduct = async () => {
    isLoading.value = true;
    try {
      const res = await fetch(`https://dummyjson.com/products/1`);
      if (!res.ok) {
        throw new Error("Could not fetch product");
      }
      const data = await res.json();
      product.value = data;
      isLoading.value = false;
    } catch (err) {
      error.value = err.message;
      isLoading.value = false;
    }
  };

  onMounted(fetchProduct);

  return { product, isLoading, error };
}
