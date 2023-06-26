import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { DELETE_FORM } from "../Graphql/Mutation";
import { GetForms } from "../Graphql/Queries";

const AllForms1 = (props: {
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

  const editForm = () => {
    navigator("/edit", { state: { formId: id } });
  };

  return (
    <div
      className="card m-3 shadow-sm"
      style={{ width: "400px", padding: "12px", marginLeft: "30px" }}
    >
      <h4>{title}</h4>
      <p>{description}</p>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            color="primary"
            style={{ marginRight: "8px" }}
            onClick={editForm}
          >
            Edit
          </button>
          <button color="secondary" onClick={removeForm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllForms1;
