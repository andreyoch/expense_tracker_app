import s from './AddRecordModal.module.css';
import * as React from "react";

const AddRecordModal = (props) => {
    const [amount,setAmount] = React.useState(0);
    const [category,setCategory] = React.useState('Shopping');
    const [date,setDate] = React.useState('11/04/2021');
    const [commentary,setCommentary] = React.useState('');
    const [transactionType,setTransactionType] = React.useState('Income');
    if(props.show){
        const clearState = () => {
            setAmount(0);
            setCategory('');
            setDate('');
            setCommentary('')
            setTransactionType('');
        }
        const addRecord = () => {
            const record = {
                amount,category,date,commentary,record_type: transactionType
            }
            clearState()
            console.log(record)
            props.closeModal();
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
                    <select name="category" id="category" onChange={(e) => console.log(e.target.value) }>
                        <option selected>Groceries</option>
                        <option>Entertainment</option>
                        <option>Restaurants</option>
                        <option>Health</option>
                        <option>Transport</option>
                        <option>Shopping</option>
                        <option>Other</option>
                    </select>
                    <label htmlFor="date">Date</label>
                    <input type="date" id='date' required onSelect={(e) => setDate(e.target.value)}/>
                    <label htmlFor="commentary">commentary</label>
                    <textarea name="commentary" id="commentary" cols="30" rows="10" className={s.textArea} onChange={(e) => setCommentary(e.target.value)}/>
                    <div>
                        <label htmlFor="transaction_type">Transaction type</label>
                        <select name="transaction_type" id="transaction_type" onSelect={(e) => setTransactionType(e.target.value)}>
                            <option>Expense</option>
                            <option selected >Income</option>
                        </select>
                    </div>
                </div>
                </form>
                <button type='submit' onClick={addRecord}>Add Record</button>
            </div>

        </div>
    )}
    return '';
}

export default AddRecordModal;