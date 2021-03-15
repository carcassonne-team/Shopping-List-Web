<template>
  <div class="d-flex" id="wrapper" :class="{ toggled: isActive }">
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Start</div>
      <div class="list-group list-group-flush">
        <div class="card text-dark bg-primary mb-3 mt-3" style="max-width: 18rem">
          <div class="card-header text-center white">
            Chcesz skorzystać z wszystkich funkcji Shopping List ZMP?
          </div>
          <div class="card-body text-center">
            <button type="button" class="btn btn-success text-center">
              ZAŁÓŻ KONTO
            </button>
            <button type="button" class="btn btn-primary text-center pt-3">
              ZALOGUJ SIĘ
            </button>
          </div>
        </div>
        <a href="#" class="list-group-item list-group-item-action bg-light"
          ><i class="fas fa-shopping-cart"></i> Lista Zakupów</a
        >
        <a href="#" class="list-group-item list-group-item-action bg-light"
          ><i class="fas fa-trash"></i> Kosz</a
        >
        <a href="#" class="list-group-item list-group-item-action bg-light"
          ><i class="fas fa-cog"></i> Ustawienia</a
        >
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
          <button type="button" class="btn btn-primary">
            <router-link to="/login" class="btn white">Log In</router-link>
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
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    switchBar() {
      this.isActive = !this.isActive;
    },
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