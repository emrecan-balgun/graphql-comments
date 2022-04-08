import { Row, Col } from 'antd';
import styles from './styles.module.css'
import { Routes, Route } from 'react-router-dom';

import HeaderMenu from 'components/HeaderMenu';

// pages
import Home from 'pages/Home'
import NewPost from 'pages/NewPost'
import Post from 'pages/Post'
import PostCounter from 'components/PostCounter';

function App() {
  return (
    <div className={styles.container}>
      <Row justify="center">
        <Col span={14} className={styles.col}>
          <Row>
            <Col span={18}>
              <HeaderMenu />
            </Col>
            <Col span={6}>
              <PostCounter />
            </Col>
          </Row>
          
          <div className={styles.content}>
            <Routes>
              <Route path="/new" element={<NewPost/>} />
              <Route path="/post/:id" element={<Post/>} />
              <Route path="/" element={<Home/>} />
            </Routes>
          </div>    
        </Col>
        </Row>
    </div>
  );
}

export default App;