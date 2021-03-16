<template>
    <div class="card m-auto mt-5">
      <div class="card-body">
          <div class="form-group form-inline">
            <h2 class="text-center">Sortowanie</h2>
            <select class="form-control input-lg" v-model="filterValue">
              <option value="categories">Wg kategorii </option>
              <option value="alphabetically">Alfabetycznie</option>
              <option value="own">Własne</option>
            </select>
          </div>
      </div>
    </div>

  <div class="card m-auto mt-3">
    <div class="form-check form-check-inline">
      <h2 class="form-check-inline"> Nazwa Listy </h2>
      <div class="dropdown mt-2 form-check-inline float-end">
        <i class="fas fa-ellipsis-v float-end fs-5 mt-2 mx-2 dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></i>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="#" @click="deleteList">Usuń Liste</a></li>
          <li><a class="dropdown-item" href="#">Wyczyść kupione</a></li>
        </ul>
      </div>
      <i class="fas fa-cog icon float-end fs-5 mt-2 IconCursor mx-4" @click="settings"></i>
    </div>
    <ul class="list-group list-group-flush">

      <li class="list-group-item">
        <div class="input-group">
          <i class="fas fa-plus-circle fs-5 icon blue" for="inpitPlus" ></i>
          <input type="text" class="form-control productNameInput" id="inpitPlus" placeholder="Enter Name Here" >
        </div>
      </li>

<!--      v-for-->
      <li class="list-group-item py-3 fs-5 listItem">
        <input class="form-check-input" type="checkbox" value="">
        Jabłko
        <i class="fas fa-trash float-end IconCursor" @click="deleteItem"></i>
      </li>
    </ul>
  </div>

  <div class="card mt-5 m-auto">
    <div class="card-body">
      <p class="text-center pt-2">Do Kupienia: 50.00 zł Kupione: 0.00 zł</p>
    </div>
  </div>
</template>

<script>

export default {
  name:"ListView",
  data(){
    return {
      filterValue: 'categories'
    }
  },
  methods: {
    deleteItem(){
      console.log('deleted')
    },
    settings(){
      console.log('settings')
    },
    deleteList(){
      console.log('deleteList')
    },
  }
};
</script>

<style scoped>
.card {
  width: 40rem;
}
.icon {
  padding-top: 0.6rem;
}

.IconCursor {
  cursor: pointer;
  padding-top: 6px;
}

.productNameInput{
  border:none;
  background-color: transparent;
}

productNameInput:focus {
  outline: none;
}

.blue {
  color: #00dd69;
}

</style>