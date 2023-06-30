import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div className="container" style={{margin:"30px"}}>
      <Link className="btn btn-success" to={"/forms"} style={{margin:"20px"}}>
        New Form
      </Link>
      <Link className="btn btn-success" to={"/all"}>
        MyForm
      </Link>
    </div>
  );
};
export default FirstPage;
