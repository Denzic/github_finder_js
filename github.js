class Github {
  constructor() {
    this.client_id = "61cb7990d166933a7b4d"
    this.client_secret = "16216949a59ecf6706b64e143c145726791bafb4"
    this.repo_count = 5
    this.repo_sort = "created: asc"
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    )

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    )

    const profile = await profileResponse.json()
    const repos = await reposResponse.json()
    return {
      profile,
      repos
    }
  }
}
