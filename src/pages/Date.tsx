// import { Formik, useFormik, useFormikContext } from "formik";
// import { FormType, QuestionType } from "./Forms";

// interface Props{
//   item:QuestionType
// }

// const Date = (props:Props) => {
  
//   const { values, setValues, errors, touched,handleChange,handleBlur } = useFormikContext<FormType>();
  
//   return (
//     <>
//       <div className="container2" >
//         <div>
//           <div className="input-block mt-2 mb-4">
//             <input
//               className="form-control"
//               size={80}
//               type="text"
//               name="question"
//               id="question"
//               placeholder="Question"
//               // value={values.questions}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             ></input>
            
//           </div>
//           <div className="input-block mt-2">
//             <input
//               className="form-control"
//               size={80}
//               type="date"
//               name="description"
//               id="description"
//               placeholder="description"
//               value={values.description}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             ></input>
//             {errors.description && touched.description ? (
//               <p className="error">{errors.description}</p>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

//
const Date=()=>{
  return(
    <>
    </>
  )
}
export default Date;
