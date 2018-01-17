// fetch post IDs
export function fetchPosts(data) {
	return {
		type: 'FETCH_POSTS',
		status,
		data
	}
}

// fetch post details
export function fetchPostDetails(data) {
	return {
		type: 'FETCH_POST_DETAILS',
		data
	}
}