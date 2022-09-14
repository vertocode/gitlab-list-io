<template>
  <div class="navbar">
    <header>
      <div class="img-container">
        <img src="../assets/gitlab.webp" alt="GitLab" height="100px">
      </div>
    </header>
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
  </div>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      currentRoute: window.location.pathname,
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
  methods: {
    updateCurrentRoute (route) {
      console.log(route)
      this.currentRoute = route
    }
  }
}
</script>

<style lang="scss">
.navbar {
  background-color: aliceblue;
  header {
    display: flex;
    .img-container {
      margin: auto;
      img {
        margin-left: 1rem
      }
    }
  }
  main {
    width: 100%;
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
        color: black;
      }
    }
  }
}

</style>
