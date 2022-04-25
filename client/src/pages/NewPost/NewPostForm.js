import { Form, Input, Button, Select, message } from 'antd';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS, NEW_POST_MUTATION } from './queries.js';
import styles from './styles.module.css';
import { useNavigate  } from 'react-router-dom';

const { Option } = Select;

function NewPostForm() {
  const history = useNavigate();
  const [savePost, { loading }] = useMutation(NEW_POST_MUTATION);

  const { loading: get_users_loading, data: users_data } = useQuery(GET_USERS);

  const handleSubmit = async (values) => {
    try {
      await savePost({
        variables: {
          data: values,
        },
      });
      message.success("Post Saved!", 4);
      history("/");
    } catch (e) {
      console.log(e);
      message.error("Post Not Saved", 10);
    }
  };
  
  return (
    <Form
      name="basic"
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        name="title"
        rules={[{ required: true, message: 'Please input a title!' }]}
      >
        <Input disabled={loading} size="large" placeholder="Title"/>
      </Form.Item>

      <Form.Item
        name="short_description"
      >
        <Input disabled={loading} size="large" placeholder="Short description" />
      </Form.Item>

      <Form.Item
        name="description"
      >
        <Input.TextArea disabled={loading} size="large" placeholder="Description" />
      </Form.Item>

      <Form.Item
        name="cover"
      >
        <Input size="large" disabled={loading} placeholder="Cover" />
      </Form.Item>

      <Form.Item
        name="user"
        rules={[{ required: true, message: 'Please select user!' }]}
      >
        <Select 
          disabled={get_users_loading || loading} 
          loading={get_users_loading} 
          placeholder="Select a user" 
          size="large"
        >
          {
            users_data && users_data.users.map((item) => 
            <Option 
              key={item._id} 
              value={item._id}>
                {item.fullName}
            </Option>
            )
          }
        </Select>
      </Form.Item>

      <Form.Item className={styles.buttons}>
        <Button loading={loading} size="large" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default NewPostForm