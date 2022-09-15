<template>
  <v-app class="app">
    <nav-bar />
    <div class="container-main">
      <v-card>
        <div class="container-card">
          <router-view />
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
.app {
  .container-main {
    height: 75%;
    width: 800px;
    margin: auto;
    .container-card {
      padding: 30px;
    }
  }
}
</style>
