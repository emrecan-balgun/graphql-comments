import { nanoid } from 'nanoid';
import mongoose from 'mongoose';

export const Mutation = {
    // User
    createUser: async (parent, { data }, { pubsub, _db }) => {
        const newUser = new _db.User({ 
            ...data
        });

        const user = await newUser.save();
        const userCount = await _db.User.countDocuments();

        pubsub.publish('userCreated', { userCreated: user })
        pubsub.publish('userCount', { userCount })

        return user;
    },
    updateUser: async (parent, { id, data }, { pubsub, _db }) => {
        const is_user_exist = await _db.User.findById(id);

         if(!is_user_exist) {
             throw new Error('User not found')
         }

         const updated_user = await _db.User.findByIdAndUpdate(id, data, { new: true });

         pubsub.publish('userUpdated', { userUpdated: updated_user })

         return updated_user;
    },
    deleteUser: async (parent, { id }, { pubsub, _db }) => {
        const is_user_exist = await _db.User.findById(id)

        if(!is_user_exist) {
            throw new Error("User not found")
        }

        const deleted_user = await _db.User.findByIdAndDelete(id);

        pubsub.publish('userDeleted', { userDeleted: deleted_user })
        // pubsub.publish('userCount', { userCount: users.length })

        return deleted_user;
    },
    deleteAllUsers: async (_, __, { pubsub, _db }) => {
        const delete_users = await _db.User.deleteMany({});

        // pubsub.publish('userCount', { userCount: users.length })

        return {
            count: delete_users.deletedCount,
        }
    },

    // Post
    createPost: async (_, { data }, { pubsub, _db }) => {
        const newPost = new _db.Post({
            ...data,
        });

        const post = await newPost.save();

        const user = await _db.User.findById(mongoose.Types.ObjectId(data.user));
        user.posts.push(post._id);
        user.save();

        const postCount = await _db.Post.countDocuments();

        pubsub.publish('postCreated', { postCreated: post })
        pubsub.publish('postCount', { postCount })

        return post;
    },
    updatePost: async (_, { id, data }, { pubsub, _db }) => {
        const is_post_exist = await _db.Post.findById(id);

         if(!is_post_exist) {
             throw new Error('Post not found')
         }

         const updated_post = await _db.Post.findByIdAndUpdate(id, data, { new: true });

        pubsub.publish('postUpdated', { postUpdated: updated_post })

        return updated_post;
    },
    deletePost: async (_, { id }, { pubsub, _db }) => {
        const is_post_exist = await _db.Post.findById(id)

        if(!is_post_exist) {
            throw new Error("Post not found")
        }

        const postDeleted = await _db.Post.findByIdAndDelete(id);
        const postCount = await _db.Post.countDocuments();

        pubsub.publish('postDeleted', { postDeleted })
        pubsub.publish('postCount', { postCount })

        return postDeleted;
    },
    deleteAllPosts: async (_, __, { pubsub, _db }) => {
        const delete_posts = await _db.Post.deleteMany({});

        pubsub.publish("postCount", { postCount: delete_posts.deletedCount })

        return {
            count: delete_posts.deletedCount,
        }
    },

    // Comment
    createComment: async (_, { data }, { pubsub, _db }) => {
        const newComment = new _db.Comment(data);
        const createdComment = await newComment.save();

        const post = await _db.Post.findById(mongoose.Types.ObjectId(data.post));
        post.comments.push(createdComment._id);
        await post.save();

        const user = await _db.User.findById(mongoose.Types.ObjectId(data.user));
        user.comments.push(createdComment._id);
        await user.save();

        const commentCount = await _db.Comment.countDocuments();

        pubsub.publish('commentCreated', { commentCreated: createdComment });
        pubsub.publish('commentCount', { commentCount });

        return createdComment;
    } ,
    updateComment: async (_, { id, data }, { pubsub, _db }) => {
        const is_comment_exist = await _db.Comment.findById(id);

        if(!is_comment_exist) {
            throw new Error('Comment not found')
        }

        const updated_comment = await _db.Comment.findByIdAndUpdate(id, data, { new: true });

        pubsub.publish('commentUpdated', { commentUpdated: updated_comment });

        return updated_comment;
    },
    deleteComment: async (_, { id }, { pubsub, _db }) => {
        const is_comment_exist = await _db.Comment.findById(id)

        if(!is_comment_exist) {
            throw new Error("Comment not found")
        }

        const commentDeleted = await _db.Comment.findByIdAndDelete(id);

        pubsub.publish('commentDeleted', { commentDeleted })
        // pubsub.publish('commentCount', { commentCount: db.comments.length });

        return commentDeleted;
    },
    deleteAllComments: async (_, __, { pubsub, _db }) => {
        const delete_comments = await _db.Comment.deleteMany({});

        return {
            count: delete_comments.deletedCount,
        }
    },
}