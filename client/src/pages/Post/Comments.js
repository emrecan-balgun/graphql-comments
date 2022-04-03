import { Divider, Button } from 'antd';
import styles from './styles.module.css';
import Loading from 'components/Loading';
import { useLazyQuery } from '@apollo/client'
import { GET_POST_COMMENTS } from './queries';

function Comments({ post_id }) {
    const [loadComments, { loading, data }] = useLazyQuery(GET_POST_COMMENTS, {
        variables: { id: post_id },
    });

    if (loading) {
        return <Loading />
    }

  return (
      <>
        <Divider>Comments</Divider>
        <div className={styles.showCommentsBtnContainer}>
            <Button onClick={ () => loadComments() }>Show Comments</Button>

            <div>
                YORUMLAR BURADA GORUNECEK
            </div>
        </div>
      </>
    
  )
}

export default Comments