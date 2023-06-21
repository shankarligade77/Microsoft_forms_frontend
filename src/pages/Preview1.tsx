import { Field } from "formik";

const Preview1 = (props: {
  data: { id: Number; question: any; QuestionType: any };
  index: any;
}) => {
  const { id, question, QuestionType } = props.data;
  const quetionTypeCheck = (val: any) => {
    if (val === "Text") {
      return (
        <div>
          <input type="text" placeholder="Enter Your Answer Here"  name={`questions[${props.index}].question`} />
        </div>
      );
    } else {
      return (
        <div>
          <input type="date" placeholder="Enter Date  Here" name={`questions[${props.index}].date`}/>
        </div>
      );
    }
  };
  return (
    <div className="">
      <div className="">
        <span style={{ color: "black" }}>
          {props.index + 1}.&nbsp;{question}
        </span>

        {quetionTypeCheck(QuestionType)}
      </div>
    </div>
  );
};

export default Preview1;

// const TitleForm = (props: { data: { id: Number; title: any; description: any } }) => {
//   const { id, title, description } = props.data;
//   const navigator = useNavigate()

//   const [deleteForm, { loading, error }] = useMutation(DELETE_FORM);

//   const removeForm = async () => {
//     deleteForm({ variables: { id :parseFloat(""+id)} })
//     .then(() => {
//       console.log(`Form with ID ${id} deleted successfully`);
//     })
//     .catch((error) => {
//       console.error('Failed to delete form:', error);
//     });
//     window.location.reload();
//   };

//   return (
//     <div
//       className="card m-3 shadow-sm"
//       style={{ width: "200px", padding: "12px", marginLeft: "30px" }}
//     >
//       <h4>{title}</h4>
//       <p>{description}</p>

//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <div style={{ display: "flex", justifyContent: "flex-end" }}>

//           <button
//             // variant="text"
//             // color="secondary"
//             onClick={removeForm}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TitleForm;
