import { Formik } from "formik";
import { Form, Input, SubmitButton } from "formik-antd";
import React from "react";
import * as Yup from "yup";
import { connect } from "react-redux";
import { sendForm } from "../../actions";
import { IForm, IState } from "../../types";

const { TextArea } = Input;

const SignupSchema = Yup.object().shape({
  text: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const NotesForm = ({ sendData, loading, item }: IForm) => {
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
  const textAreaFiler = (item: any) => {
    if (item.id) {
      return (
        <>
          <div>Edited message: {item.text}</div>
          <Form.Item name="text">
            <TextArea
              placeholder="Введите сюда свою заметку"
              autoSize
              name="text"
              defaultValue={item.text}
            />
          </Form.Item>
        </>
      );
    }
    return (
      <Form.Item name="text">
        <TextArea
          placeholder="Введите сюда свою заметку"
          autoSize
          name="text"
        />
      </Form.Item>
    );
  };
  return (
    <div style={{ minHeight: "10vh" }}>
      <Formik
        initialValues={{ title: "", text: "" }}
        onSubmit={(values, action) => {
          sendData(values, item);
          action.resetForm();
        }}
        validationSchema={SignupSchema}
      >
        <Form {...formItemLayout}>
          {textAreaFiler(item)}

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

const mapStateToProps = (state: IState) => {
  return {
    loading: state.form.loading,
    item: state.form.item,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  sendData: (formData: any, item: any) => {
    dispatch(sendForm(formData, item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesForm);
