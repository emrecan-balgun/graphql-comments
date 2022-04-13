export const Post = {
    user: async (parent, _, { _db }) => {
        const user = await _db.User.findById(parent.user);
        return user;
    },

    comments: (parent, _, { db }) => db.comments.filter((comment) => comment.post_id === parent.id)
}