import React, {Component} from 'react';
import RecordService from "../../services/RecordService";

class RecordPage extends Component {
        constructor(props) {
            super(props);
            this.state = {
                records:[]
            }
        }
        componentDidMount() {
            RecordService.getRecords().then((response) =>
                this.setState({records: response.data}))
        }

    render() {
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
                            this.state.records.map((r) =>
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
}

export default RecordPage;