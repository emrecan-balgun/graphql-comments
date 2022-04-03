import { Divider, Button } from 'antd';
import styles from './styles.module.css';

function Comments() {
  return (
      <>
        <Divider>Comments</Divider>
        <div className={styles.showCommentsBtnContainer}>
            <Button>Show Comments</Button>

            <div>
                YORUMLAR BURADA GORUNECEK
            </div>
        </div>
      </>
    
  )
}

export default Comments