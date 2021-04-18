import React, {Component, useEffect} from 'react';
import RecordService from "../../services/RecordService";
import AddRecordModal from "./AddRecordModal/AddRecordModal";
import s from './RecordPage.module.css'
import EditRecordModal from "./EditRecordModal/EditRecordModal";
import TableCSVExporter from "../../IO/export/TableCSVExporter";


const RecordPage = (props) => {
    const [isAddRecordModalShow, setAddRecordModalShow] = React.useState(false);
    const [isEditRecordModalShow, setEditRecordModalShow] = React.useState(false)
    const [recordToEdit, setRecordToEdit] = React.useState({});
    useEffect(() => {
        RecordService.getRecords().then((response) => {
            props.updateRecordsList(response.data);
        })
    }, [])
    const exportToCSV = (e) => {
        const tableElement = e.target.parentElement
         new TableCSVExporter(tableElement,false);
    }
    const closeAddRecordModal = () => {
        setAddRecordModalShow(false)
    }

    const updateRecordsList = () => {
        RecordService.getRecords().then((response) => {
            props.updateRecordsList(response.data);
        })
    }
    const deleteRecord = (e, id) => {
        const recordHtmlElement = e.target.parentElement;
        RecordService.deleteRecord(id).then(() => recordHtmlElement.remove());
    }

    const editRecordInfo = (record) => {
        setRecordToEdit(record);
        setEditRecordModalShow(true);
    }

    const closeEditRecordModal = () => {
        setEditRecordModalShow(false);
    }
    const getAccountStatus = () => {
        let accountSum = 0;
        props.records.map((r) => {
            if(r.recordType === 'Income') {
                accountSum += r.amount;
            } else if (r.recordType === 'Expense') {
                accountSum -= r.amount;
            }
        })
        return accountSum;
    }
        const positive = {
        color: "green",
        }
        const negative = {
        color: 'red'
        }
        const accountStateStyles = getAccountStatus() > 0 ? positive : negative;
    return (
        <div>
            <h2 className='text-center'>Records</h2>
            <div>State of an account</div>
            <div style={accountStateStyles}>{getAccountStatus()}</div>
            <button onClick={() => setAddRecordModalShow(true)}> Show modal</button>
            <AddRecordModal show={isAddRecordModalShow} closeModal={closeAddRecordModal}
                            updateRecordsList={updateRecordsList}/>
            {isEditRecordModalShow ? <EditRecordModal isShow={isEditRecordModalShow} record={recordToEdit}
                                                      closeEditRecordModal={closeEditRecordModal}
                                                      updateRecordsList={updateRecordsList}/> : ""}
            <div className={s.row}>
                <table>
                    <thead>
                    <tr>
                        <th scope="col">Record type</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col">Date</th>
                        <th scope="col">Commentary</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.records.map((r) =>
                            <tr key={r.id}>
                                <td>{r.recordType}</td>
                                <td>{r.amount}</td>
                                <td>{r.category}</td>
                                <td>{r.date}</td>
                                <td>{r.commentary}</td>
                                <td className={s.close} onClick={(e) => deleteRecord(e, r.id)}>&times;</td>
                                <td className={s.edit} onClick={() => editRecordInfo(r)}>✏</td>
                            </tr>
                        )
                    }
                    </tbody>
                    <button onClick={(e) => exportToCSV(e)}>Export to CSV file</button>
                </table>

            </div>
        </div>
    );

}


export default RecordPage;