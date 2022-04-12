import { Form, Input, Button, Select } from 'antd';

function NewCommentForm() {
    const handleSubmit = async(values) => {
        console.log(values);
    }

  return (
    <Form
      name="basic"
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        name="text"
        rules={[{ required: true, message: 'Please enter a message!' }]}
      >
        <Input disabled={loading} size="large" placeholder="Text"/>
      </Form.Item>

      <Form.Item
        name="user_id"
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
              key={item.id} 
              value={item.id}>
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

export default NewCommentForm