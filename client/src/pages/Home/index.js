import { List, Avatar } from 'antd';
import { useQuery } from '@apollo/client';
import Loading from 'components/Loading'
import { GET_POSTS } from './queries'

function Home() {
  const { loading, error, data } = useQuery(GET_POSTS);

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
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
            />
            </List.Item>
        )}
    />
  )
}

export default Home