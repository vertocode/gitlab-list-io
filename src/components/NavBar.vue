<template>
  <v-theme-provider root>
    <div class="navbar">
    <header>
      <div class="img-container">
        <v-row class="ma-5">
          <v-col cols="4">
            <div>
              <img src="../assets/gitlab.webp" alt="GitLab" height="100px">
            </div>
          </v-col>
          <v-col cols="4">
            <main>
              <ul>
                <li v-for="option in optionsNav" :key="option.name" >
                  <router-link
                    :style="option.route === currentRoute ? 'text-decoration: underline;' : ''"
                    :to="option.route"
                  >
                    <span @click="updateCurrentRoute(option.route)">{{ option.name }}</span>
                  </router-link>
                </li>
              </ul>
            </main>
          </v-col>
          <v-col cols="4">
            <div class="theme-switch float-end">
              <v-switch
                v-model="$vuetify.theme.dark"
                :prepend-icon="themeIcon"
                hide-details
                inset
              />
            </div>
          </v-col>
        </v-row>
      </div>
    </header>
    </div>
  </v-theme-provider>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      currentRoute: this.$route.path,
      optionsNav: [
        {
          name: 'Register',
          route: '/'
        },
        {
          name: 'Project List',
          route: '/list'
        }
      ]
    }
  },
  computed: {
    themeIcon () {
      return this.$vuetify.theme.dark ? 'mdi-weather-night' : 'mdi-brightness-6'
    }
  },
  methods: {
    updateCurrentRoute (route) {
      this.currentRoute = route
    }
  }
}
</script>

<style lang="scss">
.navbar {
  header {
    .img-container {
      margin: auto;
    }
  }
  main {
    display: flex;
  }
  ul {
    margin: 20px auto;
    a {
      margin: auto 1rem auto 2rem;
      text-decoration: none;
      font-weight: bold;
      font-family: "Droid Sans Mono",sans-serif;
      font-size: 1.5rem;
    }
    li {
      float: left;
      list-style: none;
      margin: auto 20px;
      a {
        font-family: "Droid Sans Mono", serif;
      }
    }
  }
}

</style>
