export const Query = 
{
    // User
    users: async (_, __, { _db }) => {
        const users = await _db.User.find();
        return users;
    },
    user: async (_, args, { _db }) => {
        const user = await _db.User.findById(args.id);
        return user;
    },

    // Post
    posts: (_, __, { db }) => db.posts,
    post: (_, args, { db }) => db.posts.find(post => post.id === args.id),

    // Comments
    comments: (_, __, { db }) => db.comments,
    comment: (_, args, { db }) => db.comments.find(comment => comment.id === args.id),
}