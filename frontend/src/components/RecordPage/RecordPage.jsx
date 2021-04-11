import React, {Component,useEffect} from 'react';
import RecordService from "../../services/RecordService";


 const RecordPage = () => {
     const [records,setRecords] = React.useState([]);

     useEffect(() => {
         RecordService.getRecords().then((response) => {
             setRecords(response.data);
         })
     })


             return (
                 <div>
                     <h2 className='text-center'>Employee list</h2>
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
                                         <td>{r.amount}</td>
                                         <td>{r.record_type}</td>
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