// import { Field, Formik, useFormikContext } from "formik";
// import { FormType, QuestionType } from "./Forms";
// import EnumValues from "./EnumValues";
// interface Props {
//   item: QuestionType;
// }
// const initialValues = {
//   questionTitle: "",
//   description: "",
// };

// const Text = (props: Props) => {
//   const {
//     handleSubmit,
//     values,
//     handleChange,
//     handleBlur,
//     isSubmitting,
//     errors,
//     touched,
//     setFieldValue,
//   } = useFormikContext<FormType>();

//   const onHandle = () => {
//     // const tmp = values.title || "";
//     // setFieldValue("questionTitle", tmp);
//   };
//   return (
//     <>
//       <div className="container2">
//         <form>
//           <div>
//             <div className="input-block mt-2 mb-4">
//               <input
//                 className="form-control"
//                 size={80}
//                 type="text"
//                 name="questionTitle"
//                 id="questionTitle"
//                 placeholder="Question"
//                 // value={values.quest}
//                 onChange={onHandle}
//                 // onBlur={handleBlur}
//               ></input>
//               {/* {errors.questions && touched.questions ? (
//                 <p className="error"></p>
//               ) : null} */}
//               {/* {errors.questions} */}
//             </div>
//             <div className="input-block mt-2">
//               <input
//                 className="form-control"
//                 size={80}
//                 type="text"
//                 name="description"
//                 id="description"
//                 placeholder="description"
//                 // onChange={(event): void => {
//                 //   setFieldValue("description", event.target.value);
//                 //   console.log(event.target.value);
//                 //   console.log(values.description);
//                 // }}
//                 // onBlur={handleBlur}
//               ></input>
//               {/* 
//               {errors.description && touched.description ? (
//                 <p className="error">{errors.description}</p>
//               ) : null} */}
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };


const Text=()=>{
  return(
    <>
    </>
  )
}

export default Text;
