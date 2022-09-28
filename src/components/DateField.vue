<template>
  <div class="date-field">
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          :label="label"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        no-title
        scrollable
      >
        <v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          @click="menu = false"
        >
          Cancel
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="saveDate({ date, dateKey })"
        >
          OK
        </v-btn>
      </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: '',
    menu: false,
    modal: false,
    menu2: false
  }),
  props: {
    dateKey: {
      type: String,
      default: '',
      required: true
    },
    label: {
      type: String,
      default: 'Date',
      required: false
    }
  },
  methods: {
    saveDate (payload) {
      this.$refs.menu.save(payload.date)
      this.$emit('saveDate', payload)
    }
  }
}
</script>

<style lang="scss">
.register {
  .date-fields {
    .date-field {
      width: max-content;
      margin-top: 14px;
    }
  }
}
</style>
