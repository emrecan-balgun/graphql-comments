import { List, Avatar } from 'antd';

import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
  query getAllPosts {
  posts{
    id
    title
    description
    user{
      profile_photo
    }
  }
}
`;

const list = [
  {
    gender: 'female',
    name: {
      title: "Miss",
      first: "آوینا",
      last: "پارسا"
    },
    email: "awyn.prs@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/women/17.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg",
    },
    nat: "IR",
  },
  {
    gender: 'female',
    name: {
      title: "Miss",
      first: "آوینا",
      last: "پارسا"
    },
    email: "awyn.prs@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/women/17.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg",
    },
    nat: "IR",
    },
]

function Home() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <List
        dataSource={list}
        renderItem={item => (
            <List.Item key={item.id}>
            <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
            />
            </List.Item>
        )}
    />
  )
}

export default Home