import { Divider, Button } from 'antd';
import { Comment, List } from 'antd';
import styles from './styles.module.css';
import { useLazyQuery } from '@apollo/client'
import { GET_POST_COMMENTS } from './queries';

function Comments({ post_id }) {
    const [loadComments, { loading, data }] = useLazyQuery(GET_POST_COMMENTS, {
        variables: { id: post_id },
    });

  return (
      <>
        <Divider>Comments</Divider>
        <div className={styles.showCommentsBtnContainer}>
            <Button loading={loading} onClick={ () => loadComments() }>Show Comments</Button>
        </div>
            {
                !loading && data &&
                // <div>YORUMLAR</div>
                <List
                    className="comment-list"
                    header={`${data.length} replies`}
                    itemLayout="horizontal"
                    dataSource={data.post.comments}
                    renderItem={item => (
                    <li>
                        <Comment
                            author={item.user.fullName}
                            avatar={item.user.profile_photo}
                            content={item.text}
                        />
                    </li>
                    )}
                />
            }
      </>
    
  )
}

export default Comments