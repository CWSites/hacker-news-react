function posts(state = [], action) {

	console.log(state);

	// fetch the posts
  if(action.type == 'FETCH_POSTS') {
	  state.status = 'fetching data';
	  console.log(state);

    fetch(action.url).then(function(response) {
    	response.json()
    .then(function(data) {
    		state.post_ids	= data;
    		state.status = 'fetched data';
    		console.log (state);
    	});
    });
  }

  if(action.type == 'UPDATE_DISPLAY') {
  	state.status = 'updating display';
  	console.log(state);
  }

  return state;
}

export default posts;
