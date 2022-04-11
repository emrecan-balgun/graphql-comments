import { Form, Input, Button, Select } from 'antd';
import { useQuery } from '@apollo/client';
import { GET_USERS } from './queries.js';
import styles from './styles.module.css';

const { Option } = Select;

function NewPostForm() {
  const { loading: get_users_loading, data: users_data } = useQuery(GET_USERS);

  console.log(users_data);
  
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input title!' }]}
      >
        <Input size="large" placeholder="Title"/>
      </Form.Item>

      <Form.Item
        name="shortDescription"
      >
        <Input size="large" placeholder="Short description" />
      </Form.Item>

      <Form.Item
        name="description"
      >
        <Input.TextArea size="large" placeholder="Description" />
      </Form.Item>

      <Form.Item
        name="cover"
      >
        <Input size="large" placeholder="Cover" />
      </Form.Item>

      <Form.Item
        name="user"
        rules={[{ required: true, message: 'Please select user!' }]}
      >
        <Select 
          disabled={get_users_loading} 
          loading={get_users_loading} 
          placeholder="Select a user" size="large"
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

      <Form.Item className={styles.buttons}>
        <Button size="large" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default NewPostForm