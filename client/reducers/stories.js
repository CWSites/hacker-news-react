function loadStories(state = [], action) {
  switch(action.type) {
    case 'LOAD_STORIES':
      console.log(action.payload);
      return action.payload; // should contain a json object
    default:
      return state;
  }
}

export default loadStories;
