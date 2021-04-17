import {connect} from "react-redux";
import {updateRecordsList} from "../../redux/records-reducer";
import RecordPage from "./RecordPage";

const mapStateToProps = (state) => {
    return {
        records: state.recordsPage.records
    }
}

export default connect(mapStateToProps,{updateRecordsList})(RecordPage)

