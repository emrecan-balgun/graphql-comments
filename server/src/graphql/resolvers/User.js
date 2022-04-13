export const User = {
    posts: async (parent, _, { _db }) => {
        const posts = await _db.Post.find({ user: parent.id });
        return posts;
    },

    comments: (parent, _, { db }) => db.comments.filter((comment) => comment.user_id === parent.id)
}
