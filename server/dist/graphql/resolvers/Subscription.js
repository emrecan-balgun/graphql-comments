"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Subscription=void 0;var _graphqlYoga=require("graphql-yoga");var Subscription={// User
userCreated:{subscribe:function subscribe(_,__,_ref){var pubsub=_ref.pubsub;return pubsub.asyncIterator("userCreated")}},userUpdated:{subscribe:function subscribe(_,__,_ref2){var pubsub=_ref2.pubsub;return pubsub.asyncIterator("userUpdated")}},userDeleted:{subscribe:function subscribe(_,__,_ref3){var pubsub=_ref3.pubsub;return pubsub.asyncIterator("userDeleted")}},userCount:{subscribe:function subscribe(_,__,_ref4){var pubsub=_ref4.pubsub,db=_ref4.db;setTimeout(function(){pubsub.publish("userCount",{userCount:db.users.length})});return pubsub.asyncIterator("userCount")}},// Post
postCreated:{subscribe:(0,_graphqlYoga.withFilter)(function(_,__,_ref5){var pubsub=_ref5.pubsub;return pubsub.asyncIterator("postCreated")},function(payload,variables){return variables.user_id?payload.postCreated.user_id===variables.user_id:true})},postUpdated:{subscribe:function subscribe(_,__,_ref6){var pubsub=_ref6.pubsub;return pubsub.asyncIterator("postUpdated")}},postDeleted:{subscribe:function subscribe(_,__,_ref7){var pubsub=_ref7.pubsub;return pubsub.asyncIterator("postDeleted")}},postCount:{subscribe:function subscribe(_,__,_ref8){var pubsub=_ref8.pubsub,db=_ref8.db;setTimeout(function(){pubsub.publish("postCount",{postCount:db.posts.length})});return pubsub.asyncIterator("postCount")}},// Post
commentCreated:{subscribe:(0,_graphqlYoga.withFilter)(function(_,__,_ref9){var pubsub=_ref9.pubsub;return pubsub.asyncIterator("commentCreated")},function(payload,variables){return variables.post_id?payload.commentCreated.post_id===variables.post_id:true})},commentUpdated:{subscribe:function subscribe(_,__,_ref10){var pubsub=_ref10.pubsub;return pubsub.asyncIterator("commentUpdated")}},commentDeleted:{subscribe:function subscribe(_,__,_ref11){var pubsub=_ref11.pubsub;return pubsub.asyncIterator("commentDeleted")}},commentCount:{subscribe:function subscribe(_,__,_ref12){var pubsub=_ref12.pubsub,db=_ref12.db;setTimeout(function(){pubsub.publish("commentCount",{commentCount:db.comments.length})});return pubsub.asyncIterator("commentCount")}}};exports.Subscription=Subscription;