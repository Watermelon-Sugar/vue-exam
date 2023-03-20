<template>
  <div class="container">
    <div class="product">
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else class="card-container">
        <div class="card">
          <img :src="productImage" alt="" />
          <strong>
            <p>{{ productBrand }} - {{ productTitle }}</p>
          </strong>
          <h4>${{ productPrice }}</h4>
          <h5>{{ productDescription }}</h5>
          <span>#{{ productCategory }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentProduct: {}
        }
    },
    created() {
        const currentProductId = this.$route.params.id
        this.currentProduct = this.$store.getters['getProducts'].find(prod => prod.id = currentProductId)
        console.log(this.currentProduct)
    },
    computed: {
        productImage() {
            return this.currentProduct.images[0]
        },
        productBrand() {
            return this.currentProduct.brand
        },
productTitle() {
            return this.currentProduct.title
        },
        productCategory() {
            return this.currentProduct.category
        },
        productDescription() {
            return this.currentProduct.description
        },
        productPrice() {
            return this.currentProduct.price
        }
    }
}

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-container {
  display: flex;
  justify-content: center;
}
.card {
  box-shadow: 0 0 40px 20px rgba(0, 0, 0, 0.26);
  width: 400px;
  max-height: 550px;
  transition: 0.3s;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 1rem;
  text-align: center;
  margin-top: 3rem;
}
img {
  width: 300px;
  height: 300px;
}

h5,
h4 {
  font-size: 1rem;
}
p {
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .card {
    width: 300px;
    height: 350px;
  }
  .card img {
    width: 200px;
    height: 200px;
  }
  p {
    font-size: 1rem;
  }
  h5,
  h4 {
    font-size: 0.8rem;
  }
}
@media (max-width: 425px) {
  .card {
    width: 250px;
    height: 300px;
  }

  .card img {
    width: 150px;
    height: 150px;
  }
  p {
    font-size: 0.8rem;
  }
  h5,
  h4 {
    font-size: 0.6rem;
  }
}

@media (max-width: 375px) {
  .card {
    width: 200px;
    height: 200px;
  }
  .card img {
    width: 100px;
    height: 100px;
  }
  p {
    font-size: 0.7rem;
  }
  h5,
  h4 {
    font-size: 0.5rem;
  }
  span {
    font-size: 0.5rem;
  }
}
</style>
