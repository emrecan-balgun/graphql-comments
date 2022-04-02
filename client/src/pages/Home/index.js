import { List, Avatar } from 'antd';

const data = [
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
  return (
    <List
        dataSource={data}
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