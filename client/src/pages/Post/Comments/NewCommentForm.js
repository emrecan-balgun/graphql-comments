import styles from './styles.module.css';
import { Form, Input, Button, Select, Row, Col } from 'antd';
import { useQuery } from '@apollo/client';
import { GET_USERS } from './queries.js';

const { Option } = Select;

function NewCommentForm() {
    const { loading: get_users_loading, data: users_data } = useQuery(GET_USERS);

    const handleSubmit = async(values) => {
        console.log(values);
    }

  return (
    <Form
      name="basic"
      onFinish={handleSubmit}
      autoComplete="off"
    >
        <Row gutter={24}>
            <Col span={10}>
                <Form.Item
                    name="user_id"
                    rules={[{ required: true, message: 'Please select user!' }]}
                    >
                    <Select 
                    disabled={get_users_loading} 
                    loading={get_users_loading} 
                    placeholder="Select a user" 
                    size="medium"
                    >
                    {
                        users_data && users_data.users.map((item) => 
                        <Option 
                        key={item.id} 
                        value={item.id}>
                            {item.fullName}
                        </Option>
                        )
                    }
                    </Select>
                </Form.Item>
            </Col>
            <Col span={14}>
                <Form.Item
                    name="text"
                    rules={[{ required: true, message: 'Please enter a message!' }]}
                    >
                    <Input size="medium" placeholder="Text"/>
                </Form.Item>
            </Col>
        </Row>    
    </Form>
  )
}

export default NewCommentForm