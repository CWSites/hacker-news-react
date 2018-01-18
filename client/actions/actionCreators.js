// fetch post IDs
export function fetchPosts(url) {
	return {
		type: 'FETCH_POSTS',
		status,
		url
	}
}

// display posts on page
export function loadMorePosts(number) {
	return {
		type: 'LOAD_MORE_POSTS',
		status,
		number
	}
}

// export this to be used by reducer, makes it more typo proof
export const ADD_POSTS = 'ADD_POSTS'; 

export function addPostsAction(posts) {
  return {
    type: 'ADD_POSTS', // all actions should have a type
    payload: posts // we usually call the stuff carried in the actions 'payload'
  }
}