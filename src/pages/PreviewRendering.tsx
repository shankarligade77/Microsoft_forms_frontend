import { Field } from "formik";

const PreviewRendering = (props: {
  data: { id: Number; question: any; QuestionType: any };
  index: any;
}) => {
  const { id, question, QuestionType } = props.data;
  const quetionTypeCheck = (val: any) => {
    if (val === "Text") {
      return (
        <div>
          <input
            type="text"
            placeholder="Enter Your Answer Here"
            name={`questions[${props.index}].question`}
          />
        </div>
      );
    } else {
      return (
        <div>
          <input
            type="date"
            placeholder="Enter Date  Here"
            name={`questions[${props.index}].date`}
          />
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

export default PreviewRendering;

