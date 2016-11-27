const routeDataFetching = {
  data() {
    return {
      loading: false,
      response: null,
      error: null
    }
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      this.error = this.response = null
      this.loading = true
      // console.log(this.$root.host)
      this.$http.get(`${this.$root.host}${this.$route.path}`).then(res => {
        this.loading = false
        this.response = res
        // console.log(res.body)
      }, err => {
        this.loading = false
        this.error = err.toString()
        // console.log(err)
      })
    }
  }
}

export default routeDataFetching
