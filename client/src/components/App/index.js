import { Row, Col } from 'antd';

import styles from './styles.module.css'

import { 
  Routes,
  Route,
} from 'react-router-dom';


// pages
import Home from 'pages/Home'
import NewPost from 'pages/NewPost'
import HeaderMenu from 'components/HeaderMenu';

function App() {
  return (
    <div className={styles.container}>
      <Row justify="center">
        <Col span={14}>
          <HeaderMenu />
          <div className={styles.content}>
            <Routes>
              <Route path="/new" element={<NewPost/>} />
              <Route path="/" element={<Home/>} />
            </Routes>
          </div>    
        </Col>
        </Row>
    </div>
  );
}

export default App;