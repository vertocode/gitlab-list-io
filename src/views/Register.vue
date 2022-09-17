<template>
  <div class="register">
    <h1 class="text-md-center">Register your new GitLab project here!</h1>
    <v-form>
      <v-text-field
        v-model="projectInfo.name"
        class="mb-5"
        :counter="30"
        :rules="nameRules"
        label="Project Name *"
        required
      ></v-text-field>
      <v-textarea
        v-model="projectInfo.description"
        auto-grow="auto-grow"
        solo
        name="input-7-4"
        label="Description of your project"
      ></v-textarea>
      <v-row>
        <v-col cols="8">
          <v-row class="date-fields">
            <v-col>
              <date-field
                label="Project start date"
                @saveDate="setDate"
                date-key="initialDate"
              />
            </v-col>
            <v-col>
              <date-field
                label="Project end date"
                @saveDate="setDate"
                date-key="endDate"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col class="mb-2">
          <user-field
            :items="userItems"
          />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import DateField from '@/components/DateField'
import UserField from '@/components/UserField'

export default {
  name: 'Register',
  data () {
    return {
      nameRules: [
        v => !!v || 'Project Name is required',
        v => (v && v.length <= 30) || 'Name must be less than 30 characters'
      ],
      projectInfo: {
        name: '',
        description: '',
        initialDate: '',
        endDate: ''
      },
      userItems: []
    }
  },
  components: {
    DateField,
    UserField
  },
  methods: {
    setDate (payload) {
      const { date, dateKey } = payload
      this.projectInfo[dateKey] = date
    }
  },
  created () {
    setTimeout(() => {
      this.userItems.push('vertocode')
    }, 3000)
  }
}
</script>
