<template>
  <div class="d-flex" id="wrapper" :class="{ toggled: isActive }">
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Start</div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light"
          >Lista Zakupów</a
        >
        <a href="#" class="list-group-item list-group-item-action bg-light"
          >Kosz</a
        >
        <a href="#" class="list-group-item list-group-item-action bg-light"
          >Ustawienia</a
        >
        <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Info card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
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