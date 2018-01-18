// export this to be used by reducer, makes it more typo proof
export const ADD_POSTS = 'ADD_POSTS'; 

export function addPostsAction(post_ids) {
  return {
    type: 'ADD_POSTS', // all actions should have a type
    payload: post_ids // we usually call the stuff carried in the actions 'payload'
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