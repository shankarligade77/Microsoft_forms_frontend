<!-- import { Formik, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import Text from "./Text";
import Date from "./Date";
import EnumValues from "./EnumValues";

export interface QuestionType {
  questionTitle: string;
  description?: string;
  questionType: EnumValues;
}

export interface FormType {
  title: string;
  description?: string;
  questions: QuestionType[];
}

const initialValues: FormType = {
  title: "",
  description: "",
  questions: [],
};

console.log();
const Forms = () => {
  return (
    <>
      <div className="outer-container">
        <div className="container1">
          <div className="container2">
            <Formik
              initialValues={initialValues}
              onSubmit={async (values, actions) => {
                {
                  values.questions.map((que) => {
                    console.log(que);
                    console.log("Data from values.questions.map")
                  });
                }

                console.log("date :");
                console.log(values.questions);
                console.log(values.title);
              }}
            >
              {({
                handleSubmit,
                values,
                handleChange,
                handleBlur,
                isSubmitting,
                setValues,
                setFieldValue,
                errors,
                touched,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <div className="input-block mt-2 mb-4">
                      <input
                        className="form-control"
                        size={80}
                        type="text"
                        name="title"
                        id="title"
                        placeholder="title"
                        // value={values.title}
                        onChange={(event): void =>
                          setFieldValue("title", event.target.value)
                        }
                        onBlur={handleBlur}
                      ></input>
                      {errors.title && touched.title ? (
                        <p className="error">{errors.title}</p>
                      ) : null}
                    </div>
                    <div className="input-block mt-2">
                      <input
                        className="form-control"
                        size={80}
                        type="text"
                        name="description"
                        id="description"
                        placeholder="description"
                        // value={values.description}
                        onChange={(event): void =>
                          setFieldValue("description", event.target.value)
                        }
                        onBlur={handleBlur}
                      ></input>
                      {errors.description && touched.description ? (
                        <p className="error">{errors.description}</p>
                      ) : null}
                    </div>
                  </div>
                  {values.questions.map((item, index) => {
                    if (item.questionType === EnumValues.Text) {
                      return (
                        <div key={index}>
                          <Text item={initialValues.questions[index]} />;
                        </div>
                      );
                    } else {
                      return (
                        <div key={index}>
                          <Date item={initialValues.questions[index]} />;
                        </div>
                      );
                    }
                  })}

                  <div className="buttons">
                    <button type="button"
                      className="btn btn-success"
                      onClick={(): void => {
                        const questions = values.questions;
                        questions.push({
                          questionType: EnumValues.Text,
                          questionTitle: "",
                          description:"",
                        });
                      //  setFieldValue("questions", [...questions]);
                        {console.log(setFieldValue("questions", [...questions]))}
                      }}
                    >
                      Text
                    </button>
                    <button type="button"
                      className="btn btn-success"
                      onClick={(): void => {
                        const questions = values.questions;
                        questions.push({
                          questionType: EnumValues.Date,
                          questionTitle: "",
                          description: "",
                        });
                        setFieldValue("description",[]);
                      }}
                    >
                      date
                    </button>
                    <button type="submit">Submit</button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Forms;
a -->











<!-- import { Field, Formik, useFormikContext } from "formik";
import { FormType, QuestionType } from "./Forms";
import EnumValues from "./EnumValues";
interface Props {
  item: QuestionType;
}
const initialValues = {
  questionTitle: "",
  description: "",
};

const Text = (props: Props) => {
  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    isSubmitting,
    errors,
    touched,
    setFieldValue,
  } = useFormikContext<FormType>();

  const onHandle = () => {
    // const tmp = values.title || "";
    // setFieldValue("questionTitle", tmp);
  };
  return (
    <>
      <div className="container2">
        <form>
          <div>
            <div className="input-block mt-2 mb-4">
              <input
                className="form-control"
                size={80}
                type="text"
                name="questionTitle"
                id="questionTitle"
                placeholder="Question"
                // value={values.quest}
                onChange={onHandle}
                // onBlur={handleBlur}
              ></input>
              {/* {errors.questions && touched.questions ? (
                <p className="error"></p>
              ) : null} */}
              {/* {errors.questions} */}
            </div>
            <div className="input-block mt-2">
              <input
                className="form-control"
                size={80}
                type="text"
                name="description"
                id="description"
                placeholder="description"
                // onChange={(event): void => {
                //   setFieldValue("description", event.target.value);
                //   console.log(event.target.value);
                //   console.log(values.description);
                // }}
                // onBlur={handleBlur}
              ></input>
              {/* 
              {errors.description && touched.description ? (
                <p className="error">{errors.description}</p>
              ) : null} */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Text; -->












<!-- // import { Field, FieldArray, Form, Formik, useFormikContext } from "formik";
// import { useEffect, useState } from "react";
// import EnumValues from "./EnumValues";
// // import Text from "./Text";
// // import Date from "./Date";
// // import EnumValues from "./EnumValues";

// export interface QuestionType {
//   questionTitle: string;
//   description?: string;
//   questionType: EnumValues;
// }

// export interface FormType {
//   title: string;
//   description?: string;
//   questions: QuestionType[];
// }

// const initialValues: FormType = {
//   title: "",
//   description: "",
//   questions: [],
// };

// const tmp = (form: { QuestionType?: EnumValues }, index: number) => {
//   if (form.QuestionType === EnumValues.Date)
//     return(
//       <div>
//         <Field name={`Formdata[${index}].question`} placeholder={"Question"} />
//       <Field type="date" name={`Formdata[${index}].description`} />;
//       </div>
//     )

//   else if(form.QuestionType === EnumValues.Text)
//     return (
//       <div>
//         <Field name={`Formdata[${index}].question`} placeholder={"Question"} />
//         <Field name={`Formdata[${index}].description`} />;
//       </div>
//     )
//   else {
// return(
//   <div>
//     <Field name={`Formdata[${index}].title`} placeholder="Title"/>;
//     <Field name={`Formdata[${index}].description`} />;
//   </div>
// )
//   }

// }; -->

<!-- // console.log();
// const Forms = () => {
//   return (
//     <div className="outer-container">
//       <Formik
//         initialValues={{ Formdata: [{question: "", description: "",QuestionType: EnumValues.Title,}] }}
//         onSubmit={(values) => console.log(values.Formdata)}
//         render={({ values }) => (
//           <Form className="container1">
//             <FieldArray
//               name="Formdata"
//               render={(arrayHelpers) => (
//                 <div>
//                   {values.Formdata.map((formdata, index) => (
//                     <div key={index} className="container2">
//                      <div className="btn2">
//                      <button
//                         type="button"
//                         onClick={() => arrayHelpers.remove(index)}
//                       >
//                         <i className="fa-sharp fa-solid fa-trash"></i>
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => arrayHelpers.insert(index,{question: "",
//                         description: "",QuestionType:values.Formdata[index]})}
//                       >
//                         <i className="fa-regular fa-solid fa-copy"></i>
//                       </button>
//                      </div>
//                       {tmp(formdata, index)}
//                     </div>
//                   ))}
//                   <button
//                     type="button"
//                     onClick={() =>
//                       arrayHelpers.push({
//                         question: "",
//                         description: "",
//                         QuestionType: EnumValues.Text,
//                       })
//                     }
//                   >
//                     add Text
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() =>
//                       arrayHelpers.push({
//                         question: "",
//                         description: "",
//                         QuestionType: EnumValues.Date,
//                       })
//                     }
//                   >
//                     add Date
//                   </button>
//                   <div>
//                     <button type="submit">Submit</button>
//                   </div>
//                 </div>
//               )}
//             />
//           </Form>
//         )}
//       />
//     </div>
//   );
// };

// export default Forms; -->