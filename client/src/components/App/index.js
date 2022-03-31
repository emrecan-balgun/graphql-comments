import { Row, Col } from 'antd';

import styles from './styles.module.css'

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={14} className={styles.content}>col</Col>
        </Row>
    </div>
  );
}

export default App;