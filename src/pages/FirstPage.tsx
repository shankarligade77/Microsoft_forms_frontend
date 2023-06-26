import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div>
      <Link className="btn btn-success" to={"/forms"}>
        New Form
      </Link>
    </div>
  );
};
export default FirstPage;
