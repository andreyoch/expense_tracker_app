import MainPage from "./MainPage";
import {connect} from "react-redux";
import {
    getAccountBalanceByDateAC,
    getCategoriesAC, getRecordDatesAC,
    getSpendAmountByCategoryAC,
    updateRecordsState
} from "../../redux/mainPage-reducer";

const mapStateToProps = (state) => {
    return {
        records: state.mainPage.records,
        categories: state.mainPage.categories,
        spendAmountByCategories: state.mainPage.spendAmountByCategories,
        dates: state.mainPage.dates,
        accountBalanceByDate: state.mainPage.accountBalanceByDate
    }
}

export default connect(mapStateToProps, {updateRecordsState, getCategoriesAC,getSpendAmountByCategoryAC,getAccountBalanceByDateAC,getRecordDatesAC})(MainPage);