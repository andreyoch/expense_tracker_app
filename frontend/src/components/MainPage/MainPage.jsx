import ReactApexChart from "react-apexcharts";
import RecordService from "../../services/RecordService";
import {useEffect} from 'react';
import * as React from "react";

const MainPage = () => {
    const [records,setRecords] = React.useState([]);
    const [spentAmountByCategories,setSpentAmountByCategories] = React.useState([1,1,2,3])
     const [categories,setCategories] = React.useState(['Shopping','Health','Cinema','Food',])

    useEffect(() => {
        RecordService.getRecords().then((response) => {
            setRecords(response.data);
        })
    }, [])


    const getCategoriesSpent = () => {
        const categories = [];
        records.map((r) => {
            if(!categories.includes(r.category)) {
                categories.push(r.category);
            }
        })
        setTimeout(() => setCategories(categories),100);
        return categories;
    }


    //On each iteration get records with category by index in categories array and sum category amount
    const getSpendAmountByTransaction = () => {
        const categories = getCategoriesSpent();
        const spendAmounts = [];
        for(let i = 0; i < categories.length; i++) {
            let currentCategoryAmount = 0;
             records.map((r) => {
                if(categories[i] === r.category) {
                    currentCategoryAmount += r.amount;
                }
            })
            spendAmounts.push(currentCategoryAmount);
            currentCategoryAmount = 0;
        }
        setSpentAmountByCategories(spendAmounts)
    }


    const options = {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: categories,
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
        <ReactApexChart options={options} series={spentAmountByCategories} type="pie" width={380} />
    </div>)
}

export default MainPage;