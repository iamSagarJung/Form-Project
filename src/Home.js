// import React, { useState } from "react";
// import ColumnTable from "./components/SubComponent/ColumnTable";
// import Button from "./components/UI/Button";

// const Home = () => {
//   const [inputList, setInputList] = useState([{}]);
//   // handle input change
//   const handleInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...inputList];
//     list[index][name] = value;
//     setInputList(list);
//   };

//   // handle click event of the Remove button
//   const handleRemoveClick = (index) => {
//     const list = [...inputList];
//     list.splice(index, 1);
//     setInputList(list);
//   };

//   // handle click event of the Add button
//   const handleAddClick = () => {
//     setInputList([...inputList, {}]);
//   };
//   return (
//     <div className="box mx-6">
//       <div className="columns has-text-weight-bold">
//         <div className="column is-one-fifth">
//           <p>Bill Date</p>
//         </div>

//         <div className="column is-one-fifth">
//           <p>Bill Amount</p>
//         </div>

//         <div className="column is-one-fifth">
//           <p>Settlement Date</p>
//         </div>

//         <div className="column is-one-fifth">
//           <p>Settlement Amount</p>
//         </div>

//         <div className="column is-one-fifth">
//           <p>Voucher No.</p>
//         </div>
//       </div>

//       <ColumnTable />
//       <ColumnTable />
//       <ColumnTable />

//       {inputList.map((x, i) => {
//         return (
//           <div key={i}>
//             <ColumnTable />
//             <div className="btn-box">
//               {inputList.length !== 1 && (
//                 <Button
//                   className="is-danger is-light"
//                   onClick={() => handleRemoveClick(i)}
//                 >
//                   Remove
//                 </Button>
//               )}
//               {inputList.length - 1 === i && (
//                 <Button className="is-success is-light" onClick={handleAddClick}>
//                   Add
//                 </Button>
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Home;
