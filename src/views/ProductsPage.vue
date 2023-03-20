<template>
  <div>
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <div class="container">
        <Swiper
          :grabCursor="true"
          :a11y="true"
          :modules="modules"
          :spaceBetween="50"
          :slidesPerView="1"
          :navigation="true"
          :pagination="{ clickable: true }"
          :onSwiper="onSwiper"
          :onSlideChange="onSlideChange"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
        >
          <SwiperSlide v-for="product in products" :key="product.id">
            <img :src="product.thumbnail" alt="product-img" />
            <div class="view">
              <router-link
                :to="{ name: 'Product', params: { id: product.id } }"
                class="router-link"
                ><span>View</span></router-link
              >
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      
    <router-view />
    </div>

  </div>
</template>

<script>
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ProductsPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      return swiper;
    };
    const onSlideChange = () => {
      return;
    };

    const store = useStore();
    const products = computed(() => store.state.products);
    const isLoading = computed(() => store.state.isLoading);

    const msg = "Products";
    onMounted(() => {
      store.dispatch("fetchProducts");
    });
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y],
      products,
      isLoading,
      msg,
      
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 600px;
  height: 500px;
  padding: 50px;
}
.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
}

.container {
  display: flex;
  justify-content: center;
  color: #323232;
}

.router-link {
  text-decoration: none;
}

.view {
  position: absolute;
  bottom: 10%;
}
.view span {
  font-size: 1.5rem;
  font-weight: 700;
  color: #b78700;
}

@media (max-width: 768px) {
  .swiper {
    width: 500px;
    height: 400px;
  }
  .view span {
    font-size: 1.25rem;
  }
}

@media (max-width: 425px) {
  .swiper {
    width: 350px;
    height: 300px;
  }
  .view span {
    padding: 20px;
    font-size: 0.85rem;
  }
}

@media (max-width: 320px) {
  .view {
    bottom: 10%;
  }
}

@media (max-width: 280px) {
  .view {
    bottom: 15%;
  }
}

@media (max-width: 240px) {
  .view {
    bottom: 20%;
  }
}
</style>
