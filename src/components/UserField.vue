<template>
  <v-autocomplete
    class="user-field"
    :items="items"
    chips
    clearable
    deletable-chips
    multiple
    label="Users"
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
  props: {
    items: {
      type: Array,
      required: true
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
