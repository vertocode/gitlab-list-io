export class UserDataSourceAPI {
  constructor (api) {
    this.api = api
  }

  items = []

  first = 5

  async searchUser (user) {
    console.log(user, 'user')
    const query = `query GetUsers($search: String) {
      users(search: $search, first: ${this.first}) {
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
        nodes {
         id
         username
        }
      }
    }`
    return this.api.post('', {
      query,
      variables: {
        search: user
      }
    }).then(res => {
      const { nodes } = res.data.data.users
      this.items = nodes.map(user => user.username)
      console.log(this.items)
    })
  }
}
