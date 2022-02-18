let reducer = function (state, action) {
  switch (action.type) {
    case "INCREMENT":
      // logic for increment state
      return state + 1;
    case "DECREMENT":
      // logic for decrement state
      return state - 1;
    default:
      return state;
  }
};
