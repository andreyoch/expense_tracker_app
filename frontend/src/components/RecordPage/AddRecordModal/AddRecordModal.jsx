import s from './AddRecordModal.module.css';
import * as React from "react";
import RecordService from "../../../services/RecordService";
import warning from "react-redux/lib/utils/warning";

const AddRecordModal = (props) => {
    const [amount,setAmount] = React.useState(0);
    const [category,setCategory] = React.useState('Shopping');
    const [date,setDate] = React.useState('11/04/2021');
    const [commentary,setCommentary] = React.useState('');
    const [recordType,setRecordType] = React.useState('Income');
    const [isWarningShow,setWarningShow] = React.useState(false)
    if(props.show){
        const clearState = () => {
            setAmount(0);
            setCategory('Shopping');
            setDate('');
            setCommentary('');
            setRecordType('Income')
        }
        const addRecord = () => {
            if(amount <= 0) {
                setWarningShow(true)
                setTimeout(()=> {
                    setWarningShow(false)
                },2000)
            } else if(date === '') {
                setWarningShow(true)
                setTimeout(()=> {
                    setWarningShow(false)
                },2000)
            } else {
                const record = {
                    amount, category, date, commentary, recordType
                }
                clearState()
                RecordService.addRecord(record).then(() => props.updateRecordsList())
                props.closeModal();
            }
        }

    return (
        <div  className={s.modal} >
            <div className={s.modalContent}>
                <form>
                <span className={s.close} onClick={props.closeModal}>&times;</span>
                <div className={s.modalRow}>
                    <h2>Add new record</h2>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id='amount' required  onChange={(e) => setAmount(e.target.value)}/>
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" onChange={(e) => setCategory(e.target.value) }>
                        <option>Groceries</option>
                        <option>Entertainment</option>
                        <option>Restaurants</option>
                        <option>Health</option>
                        <option>Transport</option>
                        <option selected>Shopping</option>
                        <option>Salary</option>
                        <option>Investments</option>
                        <option>Other</option>
                    </select>
                    <label htmlFor="date">Date</label>
                    <input type="date" id='date' onChange={(e) => setDate(e.target.value)}/>
                    <label htmlFor="commentary">commentary</label>
                    <textarea name="commentary" id="commentary" cols="30" rows="10" className={s.textArea} onChange={(e) => setCommentary(e.target.value)}/>
                    <div>
                        <div>Choose record type</div>
                        <select name="transaction_type" id="transaction_type" onChange={(e) => setRecordType(e.target.value) }>
                            <option selected>Income</option>
                            <option>Expense</option>
                        </select>
                    </div>
                </div>
                </form>
                {isWarningShow ? <div className={"alert alert-danger"}>Please fill all fields</div> : ""}
                <button type='submit' onClick={addRecord} className={s.addRecordButton}>Add Record</button>
            </div>

        </div>
    )}
    return '';
}

export default AddRecordModal;