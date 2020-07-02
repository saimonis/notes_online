import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../notes_part/actions";

import { Form, Input, Button } from "antd";

const { TextArea } = Input;

interface IState {
  notes: any;
}

interface IPropsTypes {
  onClick: (value: object) => object;
  state: IState;
}

const Main = (props: IPropsTypes) => {
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
  console.log(props);
  return (
    <div>
      <Form
        {...formItemLayout}
        form={form}
        onFinish={(value) => {
          props.onClick(value);
        }}
      >
        <Form.Item name="title">
          <TextArea placeholder="Введите сюда свою title" autoSize />
        </Form.Item>
        <Form.Item name="text">
          <TextArea placeholder="Введите сюда свою заметку" autoSize />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" onClick={form.submit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      {props.state.notes.map((item: any) => {
        return <div key={item.id}>{item.text}</div>;
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  state: state,
});

// interface IDispatch {
//   title:string,
//   text:string
// }
const mapDispatchToProps = (dispatch: any) => ({
  onClick: (obj: any) => dispatch(addTodo(obj)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
