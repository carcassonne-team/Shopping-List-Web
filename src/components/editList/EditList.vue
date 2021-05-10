<template>
  <div v-if="loading">
    <loading></loading>
  </div>

  <div v-else>
    <div class="card m-auto mt-3 mt-5">
      <div class="form-check form-check-inline">
        <h2 class="form-check-inline">List name</h2>
        <div class="dropdown mt-2 form-check-inline float-end">
          <i
            class="fas fa-ellipsis-v float-end fs-5 mt-2 mx-2 dropdown-toggle"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></i>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a class="dropdown-item" href="#" @click="deleteList"
                >Delete List</a
              >
            </li>
            <li><a class="dropdown-item" href="#">Clear bought</a></li>
          </ul>
        </div>
      </div>
      <ul class="list-group list-group-flush">
        <input-option @item-name="addProduct" :listItem="products">
          Select Product:
        </input-option>

        <li
          class="list-group-item py-3 fs-5 listItem"
          v-for="(product, i) in basket"
          :key="i"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :value="product.id"
            v-model="productInBasket"
          />
          {{ product.product.name }}
          <i
            class="fas fa-trash float-end IconCursor"
            @click="deleteItem(product.id)"
          ></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import InputOption from "../editList/InputOption";
import AlertSuccess from '../Alerts/AlertSuccess'

export default {
  name: "ListView",
  data() {
    return {
      filterValue: "categories",
      productInBasket: [],
      id: parseInt(this.$route.params.id),
      loading: false,
    };
  },
  components: { InputOption },
  methods: {
    async deleteItem(index) {
      await this.$store
        .dispatch("deleteProductFromList", index)
        AlertSuccess.successAlert("Product has been deleted");
        this.$store.dispatch("getProductOnList", this.id);
    },
    async deleteList() {
      await this.$store
        .dispatch("deleteList", this.id)
        AlertSuccess.successAlert("List has been deleted");
        this.$router.push('/');
    },
    async addProduct(item) {
      await this.$store
        .dispatch("addProductToList", { product_list_id: this.id, product_id: item })
        AlertSuccess.successAlert(this.$store.getters.productStatus);
        this.$store.dispatch("getProductOnList", this.id);
    },
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    products() {
      return this.$store.getters.products;
    },
    basket() {
      return this.$store.getters.basket;
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("getCategories");
    this.$store.dispatch("products");
    this.$store.dispatch("getProductOnList", this.id);
    setTimeout(() => {
      this.loading = false
    },2000)
  },
};
</script>

<style scoped>
.card {
  max-width: 40rem;
}

.IconCursor {
  cursor: pointer;
  padding-top: 6px;
}

</style>