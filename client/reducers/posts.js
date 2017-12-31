// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {

  if(action.type == 'FETCH_POSTS') {
	  state.status = 'fetching data';
	  console.log(state);

    fetch(action.data)
    .then(function(response) {
    	if (response.status >= 400) {
    		state.status = 'problem receiving data: error ' + response.status;
    		console.log(state);
    	}
    	return response.json();
    })
    .then(function(data) {
    	state.posts = data;
    	state.status = 'data retrieved successfully';
    	console.log(state);
    });
  }

  return state;
}

export default posts;
