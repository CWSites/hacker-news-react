// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
  // console.log(state);
  // console.log(action.type);

  if(action.type == 'LOAD_POSTS') {
	  console.log('The posts are loading');

    fetch(action.data)
	    .then(function(response) {
	      if (response.status >= 400) {
	        throw new Error("Bad response from server");
	      }
	      return response.json();
	    })
	    .then(function(data) {
	      state.articles = data
	      console.log(state);
	    }); 
  }

  return state;
}

export default posts;
