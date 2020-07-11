import { Formik } from "formik";
import { Form, Input, SubmitButton } from "formik-antd";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { connect } from "react-redux";
import { sendForm } from "../../actions";
import { IForm } from "../data_view/data_view_types";
import { iNotesFormState, iItem } from "./types_notes_form";

const { TextArea } = Input;

const SignupSchema = Yup.object().shape({
  text: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
});

const NotesForm = (props: IForm) => {
  const [text, setText] = useState("");
  useEffect(() => {
    if (props.item.id) {
      setText(props.item.text);
    }
  }, [props.item]);
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
  const textAreaFiler = (item: iItem) => {
    if (item.id) {
      return (
        <>
          <div>Edited message: {item.text}</div>
          <Form.Item name="text">
            <TextArea
              placeholder="Введите сюда свою заметку"
              autoSize
              name="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </Form.Item>
        </>
      );
    }
    return (
      <Form.Item name="text">
        <TextArea placeholder="Введите сюда свою заметку" autoSize name="text" />
      </Form.Item>
    );
  };
  return (
    <div style={{ minHeight: "10vh" }}>
      <Formik
        initialValues={{ title: "", text: "" }}
        onSubmit={({ text }, action) => {
          props.sendData(text, props.item);
          action.resetForm();
        }}
        validationSchema={SignupSchema}
      >
        <Form {...formItemLayout}>
          {textAreaFiler(props.item)}

          <Form.Item name="submit" {...buttonItemLayout}>
            <SubmitButton type="primary" loading={props.loading}>
              Submit
            </SubmitButton>
          </Form.Item>
        </Form>
      </Formik>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const data: iNotesFormState = state.form;
  return {
    loading: data.loading,
    item: data.item,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  sendData: (text: string, item: iItem) => {
    dispatch(sendForm(text, item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesForm);
