import { Field, FieldArray, Form, Formik, useFormikContext } from "formik";
import { AiOutlineDelete, AiOutlineCopy } from "react-icons/ai";
import { ADD_ITEMS, Create_Form, UPDATE_ITEMS } from "../Graphql/Mutation";
import { useMutation, useQuery } from "@apollo/client";
import { EditFormData, GetForms } from "../Graphql/Queries";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import * as Yup from "yup";
// import { title } from "process";

const initialValues: any = {
  title: "",
  Description: "",
  questions: [],
};
const EditForm = () => {
  const { state } = useLocation();
  var { formId, title, description } = state;
  formId = parseFloat(formId);

  const [createForm] = useMutation(Create_Form);
  const [updateItems] = useMutation(UPDATE_ITEMS);
  const [expand, setExpand] = useState(false);
  const [showonce, setShowonce] = useState(true);
  const [titleset, setTitle] = useState(title);
  const [descriptionset, setDescription] = useState(description);
  const [showPreview, setshowPreview] = useState(false);
  const { data, loading, error, refetch } = useQuery(EditFormData, {
    variables: { id: formId },
  });

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
    console.log("questionsFieldRender");
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
          <Field
            type="text"
            placeholder="Title"
            name={`title`}
            value={titleset}
            onChange={handleChange}
          />
          {errors.title && touched.title ? (
            <div style={{ color: "red" }}>{errors.title}</div>
          ) : null}
          <Field
            type="text"
            placeholder="Description"
            name={`Description`}
            value={descriptionset}
            onChange={handleDescription}
          />
        </>
      );
    } else {
      return (
        <div className="fieldoutline">
          <Field
            type="text"
            placeholder="Title"
            name={`title`}
            value={titleset}
            onChange={handleChange}
          />
          <Field
            type="text"
            placeholder="Description"
            name={`Description`}
            value={descriptionset}
            onChange={handleDescription}
          />
          <hr />
        </div>
      );
    }
  };

  const showingcopydelete = (
    index: number,
    showPreview: boolean,
    array: any,
    values: any
  ) => {
    console.log("showingcopydelete");
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

  const handleToggle = () => {
    setExpand(!expand);
  };

  const handleToggle1 = () => {
    setshowPreview(!showPreview);
  };
  const handleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event: any) => {
    setDescription(event.target.value);
  };
  const sidebar = () => {
    setExpand(false);
  };

 

  return (
    <div className="card">
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div>
            {data.editForm.map((item: any, index: any) => {
              if (item.QuestionType == "Text") {
                initialValues.questions.push({
                  question: item.question,
                  description: item.description,
                  QuestionType: "Text",
                });
              } else {
                initialValues.questions.push({
                  question: item.question,
                  description: item.description,
                  QuestionType: "Date",
                });
              }
            })}
          </div>
        )}
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          console.log(values);
          const xyz = await createForm({
            variables: {
              title: titleset,
              description: descriptionset,
            },
          });

          const token = xyz.data.createform.token;

          sessionStorage["token"] = token;

          const { data } = await updateItems({
            variables: {
              id:formId,
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
                      {" "}
                      Preview
                    </button>
                    <button type="submit" className="btn btn-primary mt-3 copy">
                      Submit
                    </button>
                  </div>

                  <div className="titleanddescription">
                    {titleField(showPreview, errors, touched)}
                  </div>
                  {values.questions.map((form: any, index: number) => (
                    <div key={index}>
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title ">
                            {showingcopydelete(
                              index,
                              showPreview,
                              array,
                              values
                            )}
                          </div>
                          {questionsFieldRender(
                            form,
                            index,
                            showPreview,
                            errors,
                            touched
                          )}
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

export default EditForm;
