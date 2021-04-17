import ReactApexChart from "react-apexcharts";
import RecordService from "../../services/RecordService";
import {useEffect} from 'react';
import * as React from "react";
import s from './MainPage.module.css';

const MainPage = (props) => {
    useEffect(() => {
        RecordService.getRecords().then((response) => {
            props.updateRecordsState(response.data);
            props.getCategoriesAC();
            props.getSpendAmountByCategoryAC();
            props.getRecordDatesAC();
            props.getAccountBalanceByDateAC();

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
        const optionsAccountTotalBalanceTrendChart = {
            chart: {
                type: 'area',
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            labels: props.dates,
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: 'left'
            }
        }
        const AccountBalanceTrendSeries = [{
        name:'Account Balance',
            data: props.accountBalanceByDate
        }]

    return (<div>
        <div className={s.chartsRow}>
        <div className={s.chart}>
            <h2>Expenses by category</h2>
        <ReactApexChart options={options} series={props.spendAmountByCategories} type="pie" width={380}/>
        </div>
            <div className={s.chart}>
                <h2>Account Balance trend</h2>
                <ReactApexChart options={optionsAccountTotalBalanceTrendChart} series={AccountBalanceTrendSeries} type="area" width={380}/>
            </div>
        </div>
    </div>)
}

export default MainPage;