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
        <input-option @item-name="getItem" :listItem="products">
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
export default {
  name: "ListView",
  data() {
    return {
      filterValue: "categories",
      category: null,
      item: null,
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
    getItem(item) {
      this.item = item;
      this.category = "";
      this.$store
        .dispatch("addProduct", { product_list_id: this.id, product_id: item })
        .then((res) => console.log(res));
    },
    getCategories() {
      this.$store.dispatch("getCategories");
    },
    getProducts() {
      this.$store.dispatch("products");
    },
    getBasket() {
      this.$store.dispatch("getBasket", this.id);
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
    this.getCategories();
    this.getProducts();
    this.getBasket();
    this.loading = false;
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