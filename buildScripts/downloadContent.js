
const fs = require('fs');
const { writeSheet, readSheet } = require('./sheetsService.js');
// let file = fs.open('copy.json')

const sections = [
    {
        name: 'Home',
        type: 'object'
    },
    {
        name: 'Navbar',
        type: 'array'
    }
]


const convertSpreadsheetToArray = (rows) => {
    let arr = []
    let keys = rows[0];
    rows.shift();

    for (let row of rows) {
        let obj = {};
        for (let [idx, key] of Object.entries(keys)) {
            obj[key] = row[idx]
        }
        arr.push(obj)
    }
    return arr
}

const convertSpreadsheetToObj = (rows) => {
    let copy = {};
    for (let row of rows) {
        if (row.length) copy[row[0]] = row[1]
    }

    return copy;
}

const downloadContent = async () => {
    let json = {};
   

    for (let section of sections) {
        const rows = await readSheet(section.name);
        let copy = section.type == 'array' ? convertSpreadsheetToArray(rows) : convertSpreadsheetToObj(rows)
        json[section.name.toLowerCase()] = copy;
        console.log(json)
    }
    // const copy = convertSpreadsheetToArray(rows)
    fs.writeFileSync('copy.json', JSON.stringify(json))
}


downloadContent();