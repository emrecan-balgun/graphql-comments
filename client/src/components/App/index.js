import { Row, Col } from 'antd';

import styles from './styles.module.css'

import { List, message, Avatar, Skeleton, Divider } from 'antd';

const data = [{
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
}]

function App() {
  return (
    <div className={styles.container}>
      <Row justify="center">
        <Col span={14} className={styles.content}>
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
        </Col>
        </Row>
    </div>
  );
}

export default App;