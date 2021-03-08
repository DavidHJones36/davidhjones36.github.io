class Github {
  constructor() {
    //deprecated auth
    // this.client_ID = '3611066bd8bd0125c3d9';
    // this.client_secret =  '9f582a777ed41d2c75ddeb7bd843dc78791706f0';
    this.config = {
      headers: {
        Authorization: 'token b62404d1f759148f2f642911d1d5dec18e560cc0'
      }
    }
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`,
      this.config
    )

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    )

    const profile = await profileResponse.json();

    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}