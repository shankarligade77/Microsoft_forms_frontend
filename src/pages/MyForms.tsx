import { useMutation, useQuery } from "@apollo/client";
import { GetForms } from "../Graphql/Queries";
import MyFormsRendering from "./MyFormsRendering";

const MyForms = () => {
  const { loading, error, data, refetch } = useQuery(GetForms);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="container">
         <div className="row">
         {data.forms.map((form: any) => (
            <MyFormsRendering key={form.id} data={form} />
          ))}
         </div>
        </div>
      )}
    </div>
  );
};

export default MyForms;
