<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'welcome' }"
            >Home<span class="sr-only"></span
          ></router-link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Clients
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" :to="{ name: 'registerclient' }"
              >Register Client</router-link
            >
            <router-link class="dropdown-item" :to="{ name: 'allclients' }"
              >All Clients</router-link
            >
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li> -->
      </ul>
      <form @submit.prevent="submitSearch" class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchValue"
          required
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  //     watch: {
  //     $route(to, from) {
  //       to.query.param;
  //     },
  //   },
  data() {
    return {
      searchValue: "",
    };
  },

  methods: {
    submitSearch() {
      this.$router
        .push({
          name: "searchclient",

          query: {
            param: this.searchValue,
          },
        })
        .catch((err) => {
          console.log("Value already searched");
        });
    },
  },
};
</script>

<style>
</style>