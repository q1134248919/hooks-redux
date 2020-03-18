function todos(state = "1", action) {
    const { type, payload } = action;
    switch (type) {
      case "test":
        return Object.assign({}, state, {
          statusMessage: payload
        });
      case "test1":
        return Object.assign({}, state, {
          name: payload
        });
      default:
        return state;
    }
  }

  export default  todos