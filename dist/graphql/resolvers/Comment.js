"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Comment=void 0;var Comment={user:function user(parent,_,_ref){var db=_ref.db;return db.users.find(function(user){return user.id===parent.user_id})},post:function post(parent,_,_ref2){var db=_ref2.db;return db.posts.find(function(post){return post.id===parent.post_id})}};exports.Comment=Comment;