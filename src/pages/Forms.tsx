import { Field, FieldArray, Form, Formik, useFormikContext } from "formik";
import { AiOutlineDelete, AiOutlineCopy, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ADD_ITEMS, Create_Form } from "../Graphql/Mutation";
import { useMutation, useQuery } from "@apollo/client";
import { GetForms } from "../Graphql/Queries";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
const questionsFieldRender = (
  form: {
    QuestionType: string;
    question: string;
    description?: string;
  },
  index: number,
  showPreview: boolean,
  errors: any,
  touched: any
) => {
  if (!showPreview) {
    if (form.QuestionType === "Text") {
      return (
        <div>
          <Field
            type="text"
            className="form-control"
            name={`questions[${index}].question`}
            placeholder="Question"
          />

          {errors.questions?.[index]?.question &&
          touched.questions?.[index]?.question ? (
            <div style={{ color: "red" }}>
              {errors.questions[index].question}
            </div>
          ) : null}

          <Field
            type="text"
            className="form-control"
            name={`questions[${index}].description`}
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
          {errors.questions?.[index]?.question &&
          touched.questions?.[index]?.question ? (
            <div style={{ color: "red" }}>
              {errors.questions[index].question}
            </div>
          ) : null}

          <Field
            type="date"
            className="form-control"
            name={`questions[${index}].date`}
          />
        </div>
      );
    }
  } else {
    if (form.QuestionType === "Text") {
      return (
        <div>
          <Field
            type="text"
            className="form-control"
            name={`questions[${index}].question`}
            placeholder="Question"
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
        </div>
      );
    }
  }
};

const titleField = (showPreview: boolean, errors: any, touched: any) => {
  if (!showPreview) {
    return (
      <>
        <Field type="text" placeholder="Title" name={`title`} />
        {errors.title && touched.title ? (
          <div style={{ color: "red" }}>{errors.title}</div>
        ) : null}
        <Field type="text" placeholder="Description" name={`Description`} />
        {errors.Description && touched.Description ? (
          <div style={{ color: "red" }}>{errors.Description}</div>
        ) : null}
      </>
    );
  } else {
    return (
      <div className="fieldoutline">
        <Field type="text" placeholder="Title" name={`title`} />
        <Field type="text" placeholder="Description" name={`Description`} />
        <hr />
      </div>
    );
  }
};

const showingcopydelete = (index: number, showPreview: boolean, array: any, values: any) => {
  if (!showPreview) {
    return (
      <div>
        <h3>Question {index + 1}</h3>
        <button
          type="button"
          className="btn btn-danger btn-sm delete "
          onClick={() => array.remove(index)}
        >
          <AiOutlineDelete />
        </button>
        <button
          type="button"
          className="btn btn-success btn-sm copy "
          onClick={() => array.insert(index + 1, values.questions[index])}
        >
          <AiOutlineCopy />
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h6>Question {index + 1}</h6>
      </div>
    );
  }
};

const initialValues:any = {
  title: "",
  Description: "",
  questions: [],
};
const Forms = () => {
  const [createForm] = useMutation(Create_Form);
  const [addItems] = useMutation(ADD_ITEMS);
  const [expand, setExpand] = useState(false);
  const [showPreview, setshowPreview] = useState(false);


  const handleToggle = () => {
    setExpand(!expand);
  };

  const handleToggle1 = () => {
    setshowPreview(!showPreview);
  };

  const sidebar = () => {
    setExpand(false);
  };

  const itemSchema = Yup.object().shape({
    question: Yup.string().required("Question is required"),
  });

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    Description: Yup.string().required("Description is required"),
    questions: Yup.array().of(itemSchema),
  });

  return (
    
    <div className="card">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          console.log(values);
          console.log("Hello")
          const title = values.title;
          const Description = values.Description;

          const xyz = await createForm({
            variables: {
              title: title,
              description: Description,
            },
          });

          const token = xyz.data.createform.token;

          sessionStorage["token"] = token;

          const { data } = await addItems({
            variables: {
              input: values.questions,
            },
          });
          alert("data addedd successfully");
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <FieldArray
              name="questions"
              render={(array) => (
                <div className="container1">
                  <div style={{ float: "right" }}>
                    <button
                      type="button"
                      onClick={handleToggle1}
                      className="btn btn-primary mt-3 copy"
                    >
                    
                      &nbsp;Preview
                    </button>
                    <button type="submit" className="btn btn-primary mt-3 copy">
                      Submit
                    </button>
                  </div>
                  <div className="titleanddescription">
                    {titleField(showPreview, errors, touched)}
                  </div>
                  {values.questions.map((form:any, index:number) => (
                    <div key={index}>
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title ">
                            {showingcopydelete(index, showPreview, array, values)}
                          </div>
                          {questionsFieldRender(form, index, showPreview, errors, touched)}
                        </div>
                      </div>
                    </div>
                  ))}

                  <br />
                  <div className="insert">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={handleToggle}
                    >
                      + Add new
                    </button>
                    {expand && (
                      <div className="text-center ">
                        <button
                          type="button"
                          className="btn btn-success btn-sm "
                          onClick={() => {
                            array.push({
                              question: "",
                              description: "",
                              QuestionType: "Text",
                            });
                            sidebar();
                          }}
                        >
                          Text
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm  "
                          onClick={() => {
                            array.push({
                              question: "",
                              description: "",
                              QuestionType: "Date",
                            });
                            sidebar();
                          }}
                        >
                          Date
                        </button>
                      </div>
                    )}
                  </div>
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
