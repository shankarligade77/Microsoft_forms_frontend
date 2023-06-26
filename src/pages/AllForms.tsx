import { useMutation, useQuery } from "@apollo/client";
import { GetForms } from "../Graphql/Queries";
import { DELETE_FORM } from "../Graphql/Mutation";
import AllForms1 from "./AllForms1";

const AllForms = () => {
  const { loading, error, data, refetch } = useQuery(GetForms);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="container1">
          {data.forms.map((form: any) => (
            <AllForms1 key={form.id} data={form} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllForms;
