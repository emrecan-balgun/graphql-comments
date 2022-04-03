import { Divider, Button } from 'antd';
import { Comment, List } from 'antd';
import styles from './styles.module.css';
import { useLazyQuery } from '@apollo/client'
import { GET_POST_COMMENTS } from './queries';

const comments = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
    },
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
    },
  ];

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
                    dataSource={comments}
                    renderItem={item => (
                    <li>
                        <Comment
                        actions={item.actions}
                        author={item.author}
                        avatar={item.avatar}
                        content={item.content}
                        />
                    </li>
                    )}
                />
            }
      </>
    
  )
}

export default Comments