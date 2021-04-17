const UPDATE_RECORDS_LIST = 'GET_RECORDS';
const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_SPEND_AMOUNT_BY_CATEGORY = 'GET_SPEND_AMOUNT_BY_CATEGORY'

 const initialState = {
     records: [],
     categories: [],
     spendAmountByCategories: []
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

 export default mainPageReducer;