// load posts from hacker news API
export function loadPosts(data) {
	return {
		type: 'LOAD_POSTS',
		data
	}
}