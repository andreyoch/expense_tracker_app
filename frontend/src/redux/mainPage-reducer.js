 const UPDATE_RECORDS_LIST = 'GET_RECORDS';
 const initialState = {
     records: []
 }

 const mainPageReducer = (state= initialState,action) => {
     switch (action.type) {
         case UPDATE_RECORDS_LIST: {
             return {
                 ...state,
                 records: action.records
             }
         }
         default:
             return state;
     }

 }

 export const updateRecordsState = (records) => ({
     type: UPDATE_RECORDS_LIST,
     records
 })

 export default mainPageReducer;