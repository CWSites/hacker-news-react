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