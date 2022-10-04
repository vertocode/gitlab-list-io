<template>
  <div>
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
    >
      <template v-slot:item.users="{ item }">
        <ul>
          <li v-for="user in item?.users" :key="user">
            {{ user }}
          </li>
        </ul>
      </template>
      <template v-slot:item.delete="{ item }">
        <v-btn color="error" @click="deleteProject(item)">Delete</v-btn>
      </template>
    </v-data-table>
  </div>
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
        {
          text: 'User(s)',
          value: 'users'
        },
        { text: 'Start date', value: 'initialDate' },
        { text: 'End date', value: 'endDate' },
        { value: 'delete' }
      ],
      projects: this.$store.state.projects
    }
  },
  methods: {
    deleteProject (project) {
      this.$store.commit('deleteProject', project)
    }
  }
}
</script>
