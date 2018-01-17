function posts(state = [], action) {

	// fetch the posts
	switch(action.type) {
		case 'FETCH_POSTS':
			let newState = state;
			console.log('fetching data');
			console.log(state);

	    fetch(action.url).then(function(response) {
	    	response.json()
	    .then(function(data) {
	    		newState = data;
	    		console.log('data fetched');
		  		console.log(newState);
	    	});
	    });

	    return newState;
	  case 'LOAD_MORE_POSTS':
	  	console.log('loading more posts...');
	  	return state;
		default: 
			return state;
	}
}

export default posts;
