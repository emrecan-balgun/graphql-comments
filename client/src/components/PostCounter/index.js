import styles from './styles.module.css'
import { Badge, Avatar } from 'antd';

function PostCounter() {
  return (
    <div className={styles.container}>
        <Badge count={4} size="small">
          <Avatar shape="square" size="medium">
            <span className={styles.counterTitle}>Posts</span>
          </Avatar>
        </Badge>
    </div>
  )
}

export default PostCounter