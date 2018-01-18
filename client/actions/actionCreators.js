// fetch post IDs
export function fetchPosts(url) {
	return {
		type: 'FETCH_POSTS',
		status,
		url
	}
}

export function displayPosts(ids) {
	return {
		type: 'DISPLAY_POSTS',
		status,
		ids
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