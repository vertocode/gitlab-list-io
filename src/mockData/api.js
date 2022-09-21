import axios from 'axios'

const api = axios.create({
  baseURL: 'https://gitlab.com/api/graphql',
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_GITLAB_TOKEN}`
  }
})

export default api
