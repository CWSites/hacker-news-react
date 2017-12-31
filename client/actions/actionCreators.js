export function fetchPosts(data) {
	return {
		type: 'LOAD_POSTS',
		data
	}
}