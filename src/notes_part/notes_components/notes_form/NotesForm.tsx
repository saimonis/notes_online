import { Formik } from "formik";
import { Form, Input, SubmitButton } from "formik-antd";
import React from "react";
import * as Yup from "yup";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

const { TextArea } = Input;

const SignupSchema = Yup.object().shape({
  text: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const NotesForm = ({
  sendData,
  loading,
}: {
  sendData: any;
  loading: boolean;
}) => {
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
    <div style={{ minHeight: "10vh" }}>
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
            <SubmitButton type="primary" loading={loading}>
              Submit
            </SubmitButton>
          </Form.Item>
        </Form>
      </Formik>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { loading: state.form.loading };
};
const mapDispatchToProps = (dispatch: any) => ({
  sendData: (obj: any) => {
    dispatch(addTodo(obj));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesForm);
