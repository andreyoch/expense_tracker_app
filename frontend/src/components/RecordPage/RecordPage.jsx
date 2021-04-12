import React, {Component,useEffect} from 'react';
import RecordService from "../../services/RecordService";
import AddRecordModal from "./AddRecordModal/AddRecordModal";


 const RecordPage = () => {
     const [records,setRecords] = React.useState([]);
     const[isAddRecordModalShow,setAddRecordModalShow] = React.useState(false);

     useEffect(() => {
             RecordService.getRecords().then((response) => {
                 setRecords(response.data);
             })
     },[])
           const  closeAddRecordModal = () => {
         setAddRecordModalShow(false)
           }

           const updateRecordsList = () => {
               RecordService.getRecords().then((response) => {
                   setRecords(response.data);
               })
           }

             return (
                 <div>
                     <h2 className='text-center'>Records</h2>
                    <button onClick={() => setAddRecordModalShow(true)}> Show modal</button>
                     <AddRecordModal show={isAddRecordModalShow} closeModal={closeAddRecordModal} updateRecordsList={updateRecordsList}/>
                     <div className='row'>
                         <table className='table table-striped table-bordered'>
                             <thead>
                             <tr>
                                 <th>Record type</th>
                                 <th>Amount</th>
                                 <th>Category</th>
                                 <th>Date</th>
                                 <th>Commentary</th>
                             </tr>
                             </thead>
                             <tbody>
                             {
                                 records.map((r) =>
                                     <tr key={r.id}>
                                         <td>{r.recordType}</td>
                                         <td>{r.amount}</td>
                                         <td>{r.category}</td>
                                         <td>{r.date}</td>
                                         <td>{r.commentary}</td>
                                     </tr>
                                 )
                             }
                             </tbody>
                         </table>
                     </div>
                 </div>
             );

 }



export default RecordPage;