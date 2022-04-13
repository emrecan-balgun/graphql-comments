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
    posts: async (_, __, { _db }) => {
        const posts = await _db.Post.find();
        return posts;
    },
    post: async (_, args, { _db }) => {
        const post = await _db.Post.findById(args.id);
        return post;
    },

    // Comments
    comments: (_, __, { db }) => db.comments,
    comment: (_, args, { db }) => db.comments.find(comment => comment.id === args.id),
}