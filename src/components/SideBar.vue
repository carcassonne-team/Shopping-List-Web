<template>
  <div class="d-flex" id="wrapper" :class="{ toggled: isActive }">
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Start</div>
      <div class="list-group list-group-flush">
        <is-not-logged></is-not-logged>
        <side-menu></side-menu>
      </div>
    </div>
    <div id="page-content-wrapper">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-success border-bottom"
      >
        <button class="btn" id="menu-toggle" @click="switchBar">
          <i class="fas fa-bars"></i>
        </button>
        <router-link class="navbar-brand fs-3 text-center white" to="/"
          >Shopping List ZMP</router-link
        >

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <button type="button" class="btn btn-primary" v-if="!false">
            <router-link to="/login" class="btn white">Log In</router-link>
          </button>
          <button type="button" class="btn btn-primary" v-if="false" @click="handleLogout">
            <router-link to="/logout" class="btn white">Log Out</router-link>
          </button>
        </div>
      </nav>
      <div class="container-fluid">
          <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import isNotLogged from './sideBar/isNotLogged';
import sideMenu from './sideBar/sideMenu';
export default {
  data() {
    return {
      isActive: false,
    };
  },
  components: {isNotLogged,sideMenu},
  methods: {
    switchBar() {
      this.isActive = !this.isActive;
    },
    handleLogout(){
      console.log('logout')
    }
  },
};
</script>

<style scoped>
#wrapper {
  overflow-x: hidden;
  background-color: #ddd;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
}

.dropdownImage {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

.white {
  color: #fff;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

.collapse {
  padding-right: 20px;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>