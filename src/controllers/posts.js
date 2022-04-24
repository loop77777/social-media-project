const { Posts, Users } = require("../db/models");
async function createNewPost(userId, title, body) {
  const post = await Posts.create({
    title,
    body,
    userId,
  });
  return post;
}

/**
 *  showAllPosts({userename: ''})
 *  showAllPosts({title: ''})
 *
 */

async function findAllPosts() {
  const posts = await Posts.findAll({
    include: [Users],
  });
  return posts;
}

module.exports = {
  createNewPost,
  findAllPosts,
};

/* Test Code */
// async function task() {
//   console.log(
//     await createNewPost(
//       1,
//       "This is a sample post",
//       "Body of the post goes here"
//     )
//   );
//   console.log(
//     await createNewPost(
//       2,
//       "This is a sample post",
//       "Body of the post goes here"
//     )
//   );
//   console.log(
//     await createNewPost(
//       3,
//       "This is a sample post",
//       "Body of the post goes here"
//     )
//   );

//   const posts = await findAllPosts();
//   for (let p of posts) {
//     console.log(
//       `${p.title}\nauthor: ${p.user.username}\n${p.body}\n=============\n`
//     );
//   }
// }

// task();
