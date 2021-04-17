const UPDATE_RECORDS_LIST = 'GET_RECORDS';
const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_SPEND_AMOUNT_BY_CATEGORY = 'GET_SPEND_AMOUNT_BY_CATEGORY'
const GET_RECORDS_DATE = 'GET_RECORDS_DATE';
const GET_ACCOUNT_BALANCE_BY_DATE = 'GET_ACCOUNT_BALANCE_BY_DATE';

 const initialState = {
     records: [],
     categories: [],
     spendAmountByCategories: [],
     dates: [1,3],
     accountBalanceByDate: []
 }

 const mainPageReducer = (state= initialState,action) => {
     switch (action.type) {
         case UPDATE_RECORDS_LIST: {
             return {
                 ...state,
                 records: action.records
             }
         }
         case GET_CATEGORIES: {
            return {
                ...state,
                categories: getCategories(state.records),
            }
         }
         case GET_SPEND_AMOUNT_BY_CATEGORY: {
             return {
                 ...state,
                 spendAmountByCategories: getSpendAmountByCategory(state.categories,state.records)
             }
         }
         case GET_RECORDS_DATE: {
             return {
                 ...state,
                 dates: getRecordDates(state.records)
             }
         }
         case GET_ACCOUNT_BALANCE_BY_DATE: {
             return {
                 ...state,
                 accountBalanceByDate: getAccountBalanceByDate(state.dates,state.records)
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

 export const getCategoriesAC = () => ({
     type: GET_CATEGORIES
 })
export const getSpendAmountByCategoryAC = () => ({
    type: GET_SPEND_AMOUNT_BY_CATEGORY
})
export const getRecordDatesAC = () => ({
    type: GET_RECORDS_DATE,
})
export const getAccountBalanceByDateAC = () => ({
    type: GET_ACCOUNT_BALANCE_BY_DATE
})
 const getCategories = (records) => {
         const categories = [];
         records.map((r) => {
             if(r.recordType === 'Expense' && !categories.includes(r.category)) {
                 categories.push(r.category);
             }
         })
         return categories;
 }
//On each iteration get records with category by index in categories array and sum category amount
const getSpendAmountByCategory = (categories,records) => {
    const spendAmounts = [];
    for(let i = 0; i < categories.length; i++) {
        let currentCategoryAmount = 0;
        records.map((r) => {
            if(categories[i] === r.category && r.recordType === 'Expense') {
                currentCategoryAmount += r.amount;
            }
        })
        spendAmounts.push(currentCategoryAmount);
        currentCategoryAmount = 0;
    }
    return spendAmounts;
}
const getRecordDates = (records) => {
     const recordDates = [];
     records.map((r) => {
         if(!recordDates.includes(r.date)) {
             recordDates.push(new Date(r.date).getTime())
         }
     })
    return recordDates;
}

const getAccountBalanceByDate = (dates,records) => {
     const accountBalanceByDate = [];
     for(let i = 0; i < dates.length;i++) {
         let accountAmount = 0;
         records.map((r) => {
             if(dates[i]===(new Date(r.date).getTime())) {
                    if(r.type === 'Expense') {
                        accountAmount -= r.amount;
                    } else {
                        accountAmount += r.amount
                    }
             }
         })
         accountBalanceByDate.push(accountAmount)
     }
     return accountBalanceByDate;
}
 export default mainPageReducer;