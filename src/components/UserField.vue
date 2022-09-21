<template>
  <v-autocomplete
    class="user-field"
    :items="items"
    chips
    clearable
    deletable-chips
    multiple
    label="Users"
    :search-input.sync="input"
  >
    <template v-slot:append-item v-if="items.length === 0">
      <v-list-item>
        <v-list-item-title class="text--disabled loader-message">
          Loading more Users...
        </v-list-item-title>
        <img width="40px" src="../assets/loader.gif" alt="loader">
      </v-list-item>
    </template>
  </v-autocomplete>
</template>

<script>

export default {
  data () {
    return {
      input: ''
    }
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  watch: {
    async input (value) {
      this.$emit('search', value)
    }
  }
}
</script>

<style lang="scss">
.loader-message {
  font-size: 20px;
  padding-right: 5px;
}
</style>
