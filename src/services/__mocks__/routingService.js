let location = '/';

const RoutingService = {
  update: jest.fn(),
  goTo: jest.fn(),
  getLocation: () => {
    return location;
  },
  __setLocation: (path) => {
    location = path;
  }
};

export default RoutingService;
