<template>
  <v-app class="app">
    <nav-bar />
    <div class="container-main">
      <v-card>
        <router-view />
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
    width: 70%;
    margin: auto;
  }
}
</style>
