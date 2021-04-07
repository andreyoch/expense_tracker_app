import axios from "axios";

const RECORDS_BASIC_URL = 'http://localhost:8080/api/v1/records';

class RecordService {
    getRecords() {
        return axios.get(RECORDS_BASIC_URL);
    }

}

export default new RecordService();