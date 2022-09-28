<template>
  <div class="register">
    <h1 class="text-md-center">Register your new GitLab project here!</h1>
    <v-form v-model="isFormValid">
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
            :items="userDataSourceAPI.items"
            @search="searchUser"
          />
        </v-col>
      </v-row>
      <div class="controls">
        <v-btn
          width="100%"
          :disabled="!isFormValid"
          :loading="loadingRegister"
          @click="registerProject"
        >Register</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import DateField from '@/components/DateField'
import UserField from '@/components/UserField'
import api from '@/mockData/api'
import { UserDataSourceAPI } from '@/PageObjects/UserDataSourceAPI.js'

export default {
  name: 'Register',
  data () {
    return {
      isFormValid: false,
      loadingRegister: false,
      userDataSourceAPI: new UserDataSourceAPI(api),
      nameRules: [
        v => !!v || 'Project Name is required',
        v => (v && v.length <= 30) || 'Name must be less than 30 characters'
      ],
      projectInfo: {
        name: '',
        description: '',
        initialDate: '',
        endDate: ''
      }
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
    },
    searchUser (user) {
      this.userDataSourceAPI.searchUser(user)
    },
    async registerProject () {
      // TODO Implement after, not time now.
      this.loadingRegister = true
      try {
        await this.$store.commit('addProject', this.projectInfo)
        window.location.href = '/list'
      } catch (error) {
        throw new Error(error)
      }
      this.loadingRegister = false
    }
  }
}
</script>
