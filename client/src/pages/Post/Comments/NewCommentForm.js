import { useRef } from 'react';
import styles from './styles.module.css';
import { Form, Input, Button, Select, message } from 'antd';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS, CREATE_COMMENT_MUTATION } from './queries.js';

const { Option } = Select;

function NewCommentForm({ post_id }) {
    const [createComment, { loading }] = useMutation(CREATE_COMMENT_MUTATION);

    const { loading: get_users_loading, data: users_data } = useQuery(GET_USERS);

    const formRef = useRef();

    const handleSubmit = async(values) => {
        try {
        await createComment({
            variables: {
            data: { ...values, post: post_id },
            },
        });
        message.success("Comment added!", 3);
        formRef.current.resetFields();
        } catch (e) {
        console.log(e);
        message.error("Comment not added", 10);
        }
    }

  return (
    <Form
      name="basic"
      onFinish={handleSubmit}
      autoComplete="off"
      ref={formRef}
    >
        <Form.Item
            name="user"
            rules={[{ required: true, message: 'Please select user!' }]}
            >
            <Select 
            disabled={get_users_loading || loading} 
            loading={get_users_loading} 
            placeholder="Select a user" 
            size="medium"
            >
            {
                users_data && users_data.users.map((item) => 
                <Option 
                key={item._id} 
                value={item.id}>
                    {item.fullName}
                </Option>
                )
            }
            </Select>
        </Form.Item>
        <Form.Item
            name="text"
            rules={[{ required: true, message: 'Please enter a message!' }]}
            >
            <Input disabled={loading} size="medium" placeholder="Message"/>
        </Form.Item>

        <Form.Item className={styles.buttons}>
            <Button loading={loading} size="medium" type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
    </Form>
  )
}

export default NewCommentForm