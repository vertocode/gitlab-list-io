<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="projects"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>

export default {
  name: 'List',
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Project Name',
          align: 'start',
          value: 'name'
        },
        { text: 'Start date', value: 'initialDate' },
        { text: 'End date', value: 'endDate' },
        { text: 'Users', value: 'users' }
      ],
      projects: this.$store.state.projects
    }
  }
}
</script>
