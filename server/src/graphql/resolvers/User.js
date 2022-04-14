export const User = {
    posts: async (parent, _, { _db }) => {
        const posts = await _db.Post.find({ user: parent.id });
        return posts;
    },

    comments: async (parent, _, { _db }) => {
        const comments = await _db.Comment.find({ user: parent.id });
        return comments;
    }
}
