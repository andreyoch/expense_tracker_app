import React, {Component,useEffect} from 'react';
import RecordService from "../../services/RecordService";
import AddRecordModal from "./AddRecordModal/AddRecordModal";
import s from './RecordPage.module.css'
import EditRecordModal from "./EditRecordModal/EditRecordModal";


 const RecordPage = () => {
     const [records,setRecords] = React.useState([]);
     const[isAddRecordModalShow,setAddRecordModalShow] = React.useState(false);
     const [isEditRecordModalShow,setEditRecordModalShow] = React.useState(false)
     const [recordToEdit,setRecordToEdit] = React.useState({});
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
           const deleteRecord = (e,id) => {
         const recordHtmlElement = e.target.parentElement;
                RecordService.deleteRecord(id).then( () => recordHtmlElement.remove());
           }

           const editRecordInfo = (record) => {
                setRecordToEdit(record);
                setEditRecordModalShow(true);
           }

           const closeEditRecordModal = () => {
          setEditRecordModalShow(false);
           }

             return (
                 <div>
                     <h2 className='text-center'>Records</h2>
                    <button onClick={() => setAddRecordModalShow(true)}> Show modal</button>
                     <AddRecordModal show={isAddRecordModalShow} closeModal={closeAddRecordModal} updateRecordsList={updateRecordsList}/>
                     <EditRecordModal  isShow={isEditRecordModalShow} record={recordToEdit} closeEditRecordModal={closeEditRecordModal} updateRecordsList={updateRecordsList} />
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
                                         <td className={s.close} onClick={(e)=> deleteRecord(e,r.id)}>&times;</td>
                                         <td className={s.edit} onClick={() =>editRecordInfo(r)}>✏</td>
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