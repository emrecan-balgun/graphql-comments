import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;


function NewPostForm() {
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
        <Select placeholder="Select a user" size="large">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default NewPostForm