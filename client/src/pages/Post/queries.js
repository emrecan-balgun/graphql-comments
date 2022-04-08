import { gql } from '@apollo/client';

export const GET_POST = gql`
    query getPost($id: ID!) {
    post(id: $id){
        id
        title
        description
        cover
    }
   }
`;

export const GET_POST_COMMENTS = gql`
    query getComments($id: ID!){
    post(id: $id){
        comments{
        id
        text
        user{
            fullName
            profile_photo
        }
        }
    }
    }
`;

export const COMMENTS_SUBSCRIPTIONS = gql`
subscription commentCreated($post_id: ID) {
commentCreated(post_id: $post_id){
    comments{
    id
    text
    user{
        fullName
        profile_photo
    }
    }
}
}
`;