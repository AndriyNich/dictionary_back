const getQueryString = {
  queryString: {},
  request: {},
  setRequest(req) {
    this.request = req;
    return this;
  },
  addTitle() {
    const { title = "" } = this.request.query;
    if (title) {
      this.queryString = {
        ...this.queryString,
        title: { $regex: title, $options: "i" },
      };
    }
    return this;
  },
};
