import React from "react";
import { connect } from "react-redux";
import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";

import { addTodo } from "../notes_part/actions";

import DataView from "../notes_part/notes_components/data_view";

const { TextArea } = Input;

const SignupSchema = Yup.object().shape({
  text: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Main = ({ sendData }: any) => {
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
        sendData(values);
        action.resetForm();
      }}
      validationSchema={SignupSchema}
    >
      <Form {...formItemLayout}>
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
  return (
    <>
      <DataView />
      <div style={{ height: "20vh" }}>{form}</div>
    </>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: any) => ({
  sendData: (obj: any) => {
    dispatch(addTodo(obj));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
