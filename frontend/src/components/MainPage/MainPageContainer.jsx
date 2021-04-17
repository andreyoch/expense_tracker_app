import MainPage from "./MainPage";
import {connect} from "react-redux";
import {getCategoriesAC, getSpendAmountByCategoryAC, updateRecordsState} from "../../redux/mainPage-reducer";

const mapStateToProps = (state) => {
    return {
        records: state.mainPage.records,
        categories: state.mainPage.categories,
        spendAmountByCategories: state.mainPage.spendAmountByCategories
    }
}

export default connect(mapStateToProps, {updateRecordsState, getCategoriesAC,getSpendAmountByCategoryAC})(MainPage);