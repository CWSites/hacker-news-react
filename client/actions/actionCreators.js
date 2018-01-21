export function loadPosts(post_ids) {
  return {
    type: 'LOAD_POSTS',
    payload: post_ids
  }
}
