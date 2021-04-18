const csvtojson = require('csvtojson')
const fs = require('fs')

const csvfilepath = "simple.csv"
csvtojson()
    .fromFile(csvfilepath)
    .then((json) => {
        console.log(json)
    })

export default csvtojson;