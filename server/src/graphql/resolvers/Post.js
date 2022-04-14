export const Post = {
    user: async (parent, _, { _db }) => {
        const user = await _db.User.findById(parent.user);
        return user;
    },

    comments: async (parent, _, { _db }) => {
        const comments = await _db.Comment.find({ post: parent._id });
        return comments;
    }
}