import axios from "axios";

const RECORDS_BASIC_URL = 'http://localhost:8080/api/v1/records';

class RecordService {
    getRecords() {
        return axios.get(RECORDS_BASIC_URL);
    }
    addRecord(record) {
        return axios.post(RECORDS_BASIC_URL,record)
    }

}

export default new RecordService();