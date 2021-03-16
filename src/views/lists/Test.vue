<template>
  <div class="container">
    <div class="row">
      <div id="filter-panel" class="collapse filter-panel">
        <div class="panel panel-default">
          <div class="panel-body">
            <form class="form-inline" role="form">
              <div class="form-group">
                <label class="filter-col" style="margin-right:0;" for="pref-perpage">Rows per page:</label>
                <select id="pref-perpage" class="form-control">
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option selected="selected" value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="400">400</option>
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                </select>
              </div> <!-- form group [rows] -->
              <div class="form-group">
                <label class="filter-col" style="margin-right:0;" for="pref-search">Search:</label>
                <input type="text" class="form-control input-sm" id="pref-search">
              </div><!-- form group [search] -->
              <div class="form-group">
                <label class="filter-col" style="margin-right:0;" for="pref-orderby">Order by:</label>
                <select id="pref-orderby" class="form-control">
                  <option>Descendent</option>
                </select>
              </div> <!-- form group [order by] -->
              <div class="form-group">
                <div class="checkbox" style="margin-left:10px; margin-right:10px;">
                  <label><input type="checkbox"> Remember parameters</label>
                </div>
                <button type="submit" class="btn btn-default filter-col">
                  <span class="glyphicon glyphicon-record"></span> Save Settings
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#filter-panel">
        <span class="glyphicon glyphicon-cog"></span> Advanced Search
      </button>
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
  transition: margin 0.25s ease-out;
  position: absolute;
  right: 0;
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

.routerBtn {
  text-decoration: none;
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
    margin-left: 15rem;
  }
}
</style>