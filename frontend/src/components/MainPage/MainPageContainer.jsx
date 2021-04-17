import MainPage from "./MainPage";
import {connect} from "react-redux";
import {updateRecordsState} from "../../redux/mainPage-reducer";

const mapStateToProps = (state) => {
    return {
        records: state.mainPage.records
    }
}

export default connect(mapStateToProps,{updateRecordsState})(MainPage);