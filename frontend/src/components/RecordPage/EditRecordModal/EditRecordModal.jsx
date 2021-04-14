import * as React from "react";
import s from "../AddRecordModal/AddRecordModal.module.css";
import RecordService from "../../../services/RecordService";

const EditRecordModal = (props) => {
    const [amount,setAmount] = React.useState(props.record.amount);
    const [category,setCategory] = React.useState(props.record.category);
    const [date,setDate] = React.useState(props.record.date);
    const [commentary,setCommentary] = React.useState(props.record.commentary);
    const [recordType,setRecordType] = React.useState(props.record.recordType);
    const categories = ["Groceries","Entertainment","Restaurants","Health","Transport","Shopping","Other"]
    const recordTypes = ["Income","Expense"];
        const updateAmountState = (e) => {
            setAmount(e.target.value)
        }
        const updateCategoryState = (e) => {
            setCategory(e.target.value)
        }
        const updateDateState = (e) => {
            setDate(e.target.value)
        }
        const updateCommentaryState = (e) => {
            setCommentary(e.target.value)
        }
        const updateRecordTypeState = (e) => {
            setRecordType  (e.target.value)
        }
        const updateRecordInfo = () => {
            if(amount === 0) {
                console.log('Please provide amount')
            } else {


                const record = {
                    id: props.record.id,
                    amount,
                    category,
                    date,
                    recordType,
                    commentary
                }
                RecordService.editRecord(record.id, record).then(() => props.updateRecordsList())
                props.closeEditRecordModal();
            }
        }

        return (
            <div>
            <div  className={s.modal} >
            <div className={s.modalContent}>
                <form>
                    <span className={s.close} onClick={props.closeEditRecordModal}>&times;</span>
                    <div className={s.modalRow}>
                        <h2>Edit Record Info</h2>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id='amount' value={amount} required onChange={updateAmountState}/>
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" onChange={updateCategoryState} >
                            {categories.map((c) => {
                                if(c === category) {
                                    return <option selected>{c}</option>
                                } else {
                                    return  <option>{c}</option>
                                }
                            })}
                        </select>
                        <label htmlFor="date">Date</label>
                        <input type="date" id='date' value={date} onChange={updateDateState}/>
                        <label htmlFor="commentary">commentary</label>
                        <textarea name="commentary" id="commentary" cols="30" rows="10" value={commentary === null ? "" : commentary} className={s.textArea} onChange={updateCommentaryState}/>
                        <div>
                            <div>Choose record type</div>
                            <select name="transaction_type" id="transaction_type" onChange={updateRecordTypeState} >
                                {recordTypes.map((r) => {
                                    if(r === recordType) {
                                        return <option selected>{r}</option>
                                    } else {
                                        return <option>{r}</option>
                                    }
                                })}
                            </select>
                        </div>
                    </div>
                </form>
                <button type='submit' onClick={updateRecordInfo}>EditRecord</button>
            </div>
            </div>
        </div>)

}

export default EditRecordModal;