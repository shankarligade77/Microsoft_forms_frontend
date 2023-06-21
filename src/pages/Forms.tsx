import { Field, FieldArray, Form, Formik, useFormikContext } from "formik";
import { AiOutlineDelete, AiOutlineCopy } from "react-icons/ai";
import { ADD_ITEMS, Create_Form } from "../Graphql/Mutation";
import { useMutation, useQuery } from "@apollo/client";
import { GetForms } from "../Graphql/Queries";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const tmp = (
  form: {
    QuestionType: string;
    question: string;
    description?: string;
  },
  index: number
) => {
  if (form.QuestionType === "Text") {
    return (
      <div>
        <Field
          type="text"
          className="form-control"
          name={`questions[${index}].question`}
          placeholder="Question"
        />

        <Field
          type="text"
          className="form-control"
          name={`questions[${index}].description`}
          disabled={true}
          placeholder="Description"
        />
      </div>
    );
  } else {
    return (
      <div>
        <Field
          type="text"
          className="form-control"
          name={`questions[${index}].question`}
          placeholder="Question"
        />
        <Field
          type="date"
          className="form-control"
          disabled={true}
          name={`questions[${index}].date`}
        />
      </div>
    );
  }
};
const initialValues = {
  question: "",
  description: "",
};
const Forms = () => {
  const [createForm] = useMutation(Create_Form);
  const [addItems] = useMutation(ADD_ITEMS);
  const { data, loading } = useQuery(GetForms);

  const navigate = useNavigate();

  const Preview = () => {
    navigate("/preview");
  };

  return (
    <div className="outer-container">
      <Formik
        initialValues={{
          title: "",
          Description: "",
          questions: [],
        }}
        onSubmit={async (values) => {
          console.log(values);
          if (values.title == "") {
            alert("Enter Title");
          } else {
            const title = values.title;
            const Description = values.Description;

            const xyz = await createForm({
              variables: {
                title: title,
                description: Description,
              },
            });

            const token = xyz.data.createform.token;
            // console.log(xyz);
            sessionStorage["token"] = token;

            const { data } = await addItems({
              variables: {
                input: values.questions,
              },
            });
            alert("data addedd successfully")
          }
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray
              name="questions"
              render={(array) => (
                <div className="container1">
                  <div style={{ float: "right" }}>
                    <button
                      type="button"
                      onClick={Preview}
                      className="btn btn-primary mt-3"
                    >
                      {" "}
                      Preview
                    </button>
                    <button type="submit" className="btn btn-primary mt-3">
                      Submit
                    </button>
                  </div>
                  <div className="titleanddescription">
                    <Field
                      type="text"
                      placeholder="Title"
                      name={`title`}
                    />
                    <Field
                      type="text"
                      placeholder="Description"
                      name={`Description`}
                    />
                  </div>
                  {values.questions.map((form, index) => (
                    <div key={index} className="container2">
                      <div className="btn2">
                        <h3>Question {index + 1}</h3>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm delete"
                          onClick={() => array.remove(index)}
                        >
                          <AiOutlineDelete />
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-sm copy"
                          onClick={() =>
                            array.insert(index + 1, values.questions[index])
                          }
                        >
                          <AiOutlineCopy />
                        </button>
                      </div>
                      {tmp(form, index)}
                    </div>
                  ))}

                  <div className="text-center btn1">
                    <button
                      type="button"
                      className="btn btn-success btn-sm text"
                      onClick={() =>
                        array.push({
                          question: "",
                          description: "",
                          QuestionType: "Text",
                        })
                      }
                    >
                      Text
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm date"
                      onClick={() =>
                        array.push({
                          question: "",
                          description: "",
                          QuestionType: "Date",
                        })
                      }
                    >
                      Date
                    </button>
                  </div>
                  <div className="text-center"></div>
                </div>
              )}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forms;
