const dataFetching = {
  data() {
    return {
      loading: false,
      response: null,
      error: null
    }
  },
  methods: {
    fetchData(path) {
      this.error = this.response = null
      this.loading = true
      this.$http.get(`${this.$root.host}${path}`).then(res => {
        this.loading = false
        this.response = res
      }, err => {
        this.loading = false
        this.error = err.toString()
      })
    }
  }
}

export default dataFetching
