import profileDataReducer, { addPostActionCreator } from "./profileDataReducer";

const state = {
  posts: [
    { id: 1, message: 'Привет, как дела?', likeCount: 5 },
    { id: 2, message: 'Это мой первый пост', likeCount: 9 },
  ],
  profile: null,
  status: ''
}

it('post length should be incremented', () => {
  let action = addPostActionCreator('test action')
  let newState = profileDataReducer(state, action)

  expect(newState.posts.length).toBe(3)
})

it('post message should be correct', () => {
  let action = addPostActionCreator('test action')
  let newState = profileDataReducer(state, action)

  expect(newState.posts[2].message).toBe('test action')
})
