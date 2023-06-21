// import { useEffect, useState } from "react";
// import Atharv from "./Atharv";

// const Forms = () => {


//   const[atharv,setAtharv]=useState([false]);
//   const [showtext, setText] = useState([false]);
//   const [showDate, setDate] = useState(false);
//   const [count, setCount] = useState(0);
//   const addText = () => {
//     setText([...showtext,true]);
//     //setCount(count + 1);
//     console.log(count);
//   };
//   const addDate = () => {
//     setDate(true);
//   };

//   const onAtharv=()=>{
//     setAtharv([...atharv, true])
//   }

  
//   return (
//     <div className="outer-container">
//     <div className="container1">
//       <div className="container2">
//         <input size={80} type="text" placeholder="Title"></input>
//     {/* <Atharv/> */}
//         <div>
//           <input size={80} type="text" placeholder="Form Description" />
//         </div>
//       </div>
//       <div>
        
//         {showtext && (
//           <div>
           
//           </div>
          
//         )}

// {/* {showtext.map((item, i) => ( <Atharv  /> ))} */}
        
//       </div>
     
//       <div>
//         {showDate && (
//           <div>
//             <div className="container2">
//               <input size={80} type="text" placeholder="Question"></input>

//               <div>
//                 <input size={80} type="date" placeholder="Form Description" />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <button className="btn btn-success"  onClick={addText}>
//         Text
//       </button>
//       <button className="btn btn-success" onClick={addDate}>
//         date
//       </button>
//       <button onClick={onAtharv}>Atharv</button>
//       {atharv.map((item, i) => ( <Atharv  /> ))}
//     </div>
//     </div>
//   );
// };
// export default Forms;

