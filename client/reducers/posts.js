// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {

  if(action.type == 'FETCH_POSTS') {
	  console.log('Loading Posts...');

    fetch(action.data)
    .then(function(response) {
    	if (response.status >= 400) {
    		console.log('Bad response from server');
    	}
    	return response.json();
    })
    .then(function(data) {
    	state.posts = data;
    	console.log(state);
    });
  }

  return state;
}

export default posts;
