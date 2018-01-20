export function loadPosts(post_ids) {
  return {
    type: 'LOAD_POSTS',
    payload: post_ids
  }
}

export function loadStories(story, i) {
  return {
    type: 'LOAD_STORIES',
    payload: story,
    id: i
  }
}
