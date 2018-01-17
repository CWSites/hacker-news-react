function posts(state = [], action) {

	// fetch the posts
	switch(action.type) {
		case 'FETCH_POSTS': {
			console.log('fetching data');
			console.log(state);

	    fetch(action.url).then(function(response) {
	    	response.json()
	    .then(function(data) {
	    		state = data;
	    		console.log('data fetched');
	    		console.log(state);
	    	});
	    });

	    return state;
	  }
	  case 'LOAD_MORE_POSTS': {
	  	console.log('why is this firing...');
	  	return state;
	  }
		default: 
			return state;
	}
}

export default posts;
