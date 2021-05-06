<template>
  <side-bar>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center">WPISZ KOD DOSTEPU DO LISTY</h5>
        <div class="pt-3">
        <input type="text" class="form-control text-center" id="code" aria-describedby="code" v-model="code" @input="code = $event.target.value.toUpperCase()">
        <div id="emailHelp" class="form-text text-center">Kod umożliwi ci przejście do innej listy zakupowej</div>
      </div>
        <div class="text-center">
          <a href="#" class="btn btn-primary center mt-3" @click="listHandle">Przejdź do Listy</a>
        </div>
      </div>
    </div>
  </side-bar>
</template>

<script>
import SideBar from '../../components/sideBar/SideBar';

export default {
  data(){
    return{
      code: ''
    }
  },
  components: {SideBar},
  methods:{
    async listHandle(){
      await this.$store.dispatch('shareCode', this.code);
    }
  }
}
</script>

<style scoped>
.card{
  margin-top: 20vh;
  min-height: 30vh;
}

.form-control{
  max-width: 30rem;
  font-size: 35px;
  margin: 0 auto;
  float: none;
}

.center {
  margin: auto;
  float: none;
}
</style>