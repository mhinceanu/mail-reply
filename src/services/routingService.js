class RoutingService {
  update(history, location, param) {
    this.history = history;
    this.location = location;
    this.param = param;
  }

  getLocation() {
    return this.location;
  }

  getPath() {
    return this.location.pathname;
  }

  goBack() {
    this.history.goBack();
  }

  goTo(route) {
    this.history.push(route);
  }
}

export default new RoutingService();
