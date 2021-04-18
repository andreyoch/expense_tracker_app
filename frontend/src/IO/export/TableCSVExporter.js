class TableCSVExporter {
    constructor(table,includeHeaders = true) {
        this.table = table;
        this.rows = Array.from(table.querySelectorAll("tr"))

        if(!includeHeaders && this.rows[0].querySelectorAll("th").length) {
            this.rows.shift()
        }
        console.log(this._findLongestRowLength())
    }
    convertToCSV () {

    }
    _findLongestRowLength() {
        return this.rows.reduce((l,row) => row.childElementCount > l ? row.childElementCount : l,0 );
    }
    static parseCell(tableCell) {
        let parsedValue = tableCell.textContent;

        //Replace all double quaotes
    }
}

export  default TableCSVExporter;