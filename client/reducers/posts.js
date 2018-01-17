function posts(state = {}, action) {

	console.log(state);

	// fetch the posts
  if(action.type == 'FETCH_POSTS') {
	  state.status = 'fetching data';
	  console.log(state);

    fetch(action.url)
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

  if(action.type == 'UPDATE_DISPLAY') {
  	state.status = 'updating display';
  	console.log(state);
  }

  return state;
}

export default posts;
