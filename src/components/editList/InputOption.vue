<template>
  <li class="list-group-item">
    <label for="browser">
      <slot></slot>
    </label>
    <form @submit.prevent="">
      <input list="browsers" name="browser" id="browser" class="form-control"
             v-model.trim="itemName" @keyup.enter.prevent="selectCategory(itemName)">
      <datalist id="browsers" >
        <option v-for="(item,i) in listItem" :key="i">{{ item.name }}</option>
      </datalist>
    </form>
  </li>
</template>

<script>

export default {
  name:"InputOption",
  data(){
    return {
      itemName: "",
    }
  },
  props: ['listItem'],
  methods: {
    selectCategory(cat){
      this.$emit('item-name', cat);
      this.itemName = "";
    },
  }
};
</script>