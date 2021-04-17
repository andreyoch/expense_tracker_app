const GET_RECORDS = 'GET_RECORDS';
const initialState = {
    records: []
}

const recordsReducer = (state= initialState,action) => {
            switch (action.type) {
                case GET_RECORDS: {
                    return {
                        ...state,
                        records: action.records
                    }
                }
                default:
                    return state;
            }

}

export const updateRecordsList = (records) => ({
    type: GET_RECORDS,
    records
})

export default recordsReducer;