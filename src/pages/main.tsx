import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../notes_part/actions";

import { Form, Input, SubmitButton } from "formik-antd";

import { Formik } from "formik";
import * as Yup from "yup";

const { TextArea } = Input;

interface IState {
  notes: any;
}

interface IPropsTypes {
  sendData: (value: object) => object;
  state: IState;
}
const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  text: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Main = (props: IPropsTypes) => {
  // const [form] = Form.useForm();
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

  let form = (
    <Formik
      initialValues={{ title: "", text: "" }}
      onSubmit={(values, action) => {
        if (action.validateForm()) {
          alert("lox");
        }
        props.sendData(values);
        action.resetForm();
      }}
      validationSchema={SignupSchema}
    >
      <Form {...formItemLayout}>
        <Form.Item name="title">
          <TextArea
            placeholder="Введите сюда свою title"
            autoSize
            name="title"
          />
        </Form.Item>
        <Form.Item name="text">
          <TextArea
            placeholder="Введите сюда свою заметку"
            autoSize
            name="text"
          />
        </Form.Item>
        <Form.Item name="submit" {...buttonItemLayout}>
          <SubmitButton type="primary">Submit</SubmitButton>
        </Form.Item>
      </Form>
    </Formik>
  );

  let data = props.state.notes.map((item: any) => {
    return <div key={item.id}>{item.text}</div>;
  });
  console.log(props);
  return (
    <>
      {form} {data}
    </>
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
  sendData: (obj: any) => dispatch(addTodo(obj)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
