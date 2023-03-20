import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";

export function getProduct() {
  const store = useStore();
  const route = useRoute();

  const productId = computed(() => route.params.id);

  const product = computed(() =>
    store.getters.getProducts.find((product) => product.id === productId.value)
  );

  const productImg = computed(() => product.value.images[0]);
  const productTitle = computed(() => product.value.title);
  const productPrice = computed(() => product.value.price);
  const productDescription = computed(() => product.value.description);
  const productCategory = computed(() => product.value.category);
  const productBrand = computed(() => product.value.brand);

  const isLoading = computed(() => store.state.isLoading);
  const error = computed(() => store.state.error);

  return {
    productImg,
    productTitle,
    productPrice,
    productDescription,
    productCategory,
    productBrand,
    isLoading,
    error,
  };
}

export default getProduct;
