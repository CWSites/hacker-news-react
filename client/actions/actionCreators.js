export function loadPosts(post_ids) {
  return {
    type: 'LOAD_POSTS',
    payload: post_ids
  }
}

// load more results
export function loadMorePosts(num_results) {
	return {
		type: 'LOAD_MORE_POSTS',
		payload: num_results
	}
}
