import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlineCopy } from "react-icons/ai";
import { DELETE_FORM } from "../Graphql/Mutation";
import { GetForms } from "../Graphql/Queries";
import bgimag from '../Images/background.png'
const MyFormsRendering = (props: {
  data: { id: Number; title: any; description: any };
}) => {
  const { id, title, description } = props.data;
  const navigator = useNavigate();
  const { refetch } = useQuery(GetForms);
  const [deleteForm, { loading, error }] = useMutation(DELETE_FORM);

  const removeForm = async () => {
    console.log(typeof id);
    deleteForm({ variables: { id: parseFloat("" + id) } })
      .then(() => {
        console.log(`Form with ID ${id} deleted successfully`);
        refetch();
      })
      .catch((error) => {
        console.error("Failed to delete form:", error);
      });
  };


  return (
    <div className="card"style={{width:"18rem",margin:"20px"}}>
  <img className="card-img-top" src={bgimag} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text"></p>
          <button color="secondary" onClick={removeForm} style={{float:"right"}}  className="btn btn-danger btn-sm ">
          <AiOutlineDelete />
          </button>
  </div>
</div>
  );
};

export default MyFormsRendering;





