const baseUrl = 'https://jsonplaceholder.typicode.com'

// const userService = {
//   getAllUsers: async () => {
//     const users = await fetch(baseUrl + '/users')
//       .then(value => value.json())
//     console.log(users)
//     return users
//   }
// }
// const postService = {}
// const commentService = {}

export const getAll = async <T> (endpoint:string) => {
 const responseResult =  await fetch(`${baseUrl}${endpoint}`).then(response => response.json())
  return responseResult as T
}
