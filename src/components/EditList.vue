<template>
  <div v-if="loading">
    <loading></loading>
  </div>

  <div v-else>
    <div class="card m-auto mt-5">
      <div class="card-body">
        <div class="form-group form-inline">
          <h2 class="text-center">Sortowanie</h2>
          <select class="form-control input-lg" v-model="filterValue">
            <option value="categories">Wg kategorii</option>
            <option value="alphabetically">Alfabetycznie</option>
            <option value="own">Własne</option>
          </select>
        </div>
      </div>
    </div>

    <div class="card m-auto mt-3">
      <div class="form-check form-check-inline">
        <h2 class="form-check-inline">Nazwa Listy</h2>
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
                >Usuń Liste</a
              >
            </li>
            <li><a class="dropdown-item" href="#">Wyczyść kupione</a></li>
          </ul>
        </div>
      </div>
      <ul class="list-group list-group-flush">
        <input-option @item-name="addProduct" :listItem="products">
          Wybierz Produkt:
        </input-option>

        <li
          class="list-group-item py-3 fs-5 listItem"
          v-for="(product, i) in basket"
          :key="i"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :value="product.product.name"
          />
          {{ product.product.name }}
          <i
            class="fas fa-trash float-end IconCursor"
            @click="deleteItem(product.id)"
          ></i>
        </li>
      </ul>
    </div>

    <div class="card mt-5 m-auto">
      <div class="card-body">
        <p class="text-center pt-2">Do Kupienia: 50.00 zł Kupione: 0.00 zł</p>
      </div>
    </div>
  </div>
</template>

<script>
import InputOption from "./editList/InputOption";
import AlertSuccess from './Alerts/AlertSuccess'

export default {
  name: "ListView",
  data() {
    return {
      filterValue: "categories",
      id: parseInt(this.$route.params.id),
      loading: false,
    };
  },
  components: { InputOption },
  methods: {
    deleteItem(index) {
      console.log(index);
    },
    deleteList() {
      console.log("usun liste");
    },
    async addProduct(item) {
      await this.$store
        .dispatch("addProduct", { product_list_id: this.id, product_id: item })
        AlertSuccess.successAlert(this.$store.getters.productStatus);
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
    this.$store.dispatch("getBasket", this.id);
    setTimeout(() => {
      this.loading = false
    },1000)
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