import ReactApexChart from "react-apexcharts";
import RecordService from "../../services/RecordService";
import {useEffect} from 'react';
import * as React from "react";

const MainPage = (props) => {
    useEffect(() => {
        RecordService.getRecords().then((response) => {
            props.updateRecordsState(response.data);
            props.getCategoriesAC();
            props.getSpendAmountByCategoryAC();

        })
    }, [])


    const options = {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: props.categories,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]

    }



    return (<div>
        <ReactApexChart options={options} series={props.spendAmountByCategories} type="pie" width={380} />
    </div>)
}

export default MainPage;