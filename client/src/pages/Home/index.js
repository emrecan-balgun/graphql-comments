import { useEffect } from 'react';
import { List, Avatar } from 'antd';
import { useQuery } from '@apollo/client';
import Loading from 'components/Loading'
import { GET_POSTS, POSTS_SUBSCRIPTION } from './queries'
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

function Home() {
  const { loading, error, data, subscribeToMore } = useQuery(GET_POSTS);

  useEffect(() => {
    subscribeToMore({
      document: POSTS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if( !subscriptionData.data) return prev;
        return {
          posts: [
            subscriptionData.data.postCreated,
            ...prev.posts
          ]
        }
      },
    })
  }, [subscribeToMore])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <List
        dataSource={data.posts}
        renderItem={item => (
            <List.Item key={item.id}>
            <List.Item.Meta
                avatar={<Avatar src={item.user.profile_photo} />}
                title={<Link to={`/post/${item._id}`} className={styles.listTitle}>{item.title}</Link>}
                description={<Link to={`/post/${item._id}`} className={styles.listItem}>{item.short_description}</Link>}
            />
            </List.Item>
        )}
    />
  )
}

export default Home