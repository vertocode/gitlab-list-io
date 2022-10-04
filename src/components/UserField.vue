<template>
  <v-autocomplete
    class="user-field"
    :items="allItems"
    chips
    dense
    deletable-chips
    multiple
    label="Users *"
    :rules="[Boolean(value.length) || 'At least 1 user added is required']"
    :search-input.sync="input"
    v-model="value"
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
      input: '',
      value: []
    }
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    allItems () {
      return [...this.items, ...this.value]
    }
  },
  watch: {
    async input (value) {
      this.$emit('search', value)
    },
    async value (value) {
      this.$emit('setUser', value)
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
