import { useQuery } from "@apollo/client";
import { GetForms, GetItems } from "../Graphql/Queries";
import { useEffect } from "react";
import Preview1 from "./Preview1";


const Preview = () => {
  const { data ,refetch} = useQuery(GetItems);
  const formsData =useQuery(GetForms);
const OnSubmit=()=>{

}
  return (

    <div className="outer-container">
      <div className="inner-container">
        <div></div>
        {/* {console.log(formsData.data)}
        {console.log(formsData.data?.forms[0]?.title)} */}
        <h3 style={{color:"black",marginBottom:"10px"}}>{formsData.data?.forms[0]?.title}</h3>
        <h6 style={{color:"black", marginBottom:"20px"}}>{formsData.data?.forms[0]?.description}</h6>
        <hr />
        
        {data?.Items.map((item: any, index: any) => {
          {
            console.log(item.question);
          }
          {refetch()}
          return <Preview1 key={item.id} data={item}  index={index}/>;
        })}
       <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default Preview;
