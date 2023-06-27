import { useMutation, useQuery } from "@apollo/client";
import { GetForms } from "../Graphql/Queries";
import MyForms1 from "./MyForms1";

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
         <div className="row" style={{padding:"20px", margin:"20px"}}>
         {data.forms.map((form: any) => (
            <MyForms1 key={form.id} data={form} />
          ))}
         </div>
        </div>
      )}
    </div>
  );
};

export default MyForms;
