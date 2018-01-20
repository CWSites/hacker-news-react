function loadStories(state = [], action, id) {
  switch(action.type) {
    case 'LOAD_STORIES':
      console.log(state);
      // console.log({ id: action.payload });
      // [id: action.payload]
      return action.payload; // should contain a json object
    default:
      return state;
  }
}

export default loadStories;
