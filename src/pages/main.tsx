import React from "react";

import { Form, Input, Button } from "antd";

const { TextArea } = Input;

const Main = () => {
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      span: 0,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const buttonItemLayout = {
    wrapperCol: {
      span: 10,
      offset: 0,
    },
  };
  return (
    <div>
      <Form {...formItemLayout} form={form}>
        <Form.Item>
          <TextArea placeholder="Введите сюда свою заметку" autoSize />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Main;
