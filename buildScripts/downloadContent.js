
const fs = require('fs');
const { writeSheet, readSheet } = require('./sheetsService.js');
const markdownit = require('markdown-it')
const md = markdownit()
// let file = fs.open('copy.json')

const sections = [
    {
        name: 'Home',
        type: 'object', 
        markdown: true
    },
    {
        name: 'Navbar',
        type: 'array', 
        markdown: false
    }
]


const convertSpreadsheetToArray = (rows, markdown) => {
    let arr = []
    let keys = rows[0];
    rows.shift();

    for (let row of rows) {
        let obj = {};
        for (let [idx, key] of Object.entries(keys)) {
            let val = markdown ? md.renderInline(row[idx]) : row[idx]
            obj[key] = val
        }
        arr.push(obj)
    }
    return arr
}

const convertSpreadsheetToObj = (rows, markdown) => {
    let copy = {};
    for (let row of rows) {
        if (row[0] && row[1]) {
            console.log(row[1])
            let val = markdown ? md.renderInline(row[1]) : row[1]
            copy[row[0]] = val
        }
    }

    return copy;
}

const downloadContent = async () => {
    let json = {};

    for (let section of sections) {
        const rows = await readSheet(section.name);
        let copy = section.type == 'array' ? convertSpreadsheetToArray(rows, section.markdown) : convertSpreadsheetToObj(rows, section.markdown)
        json[section.name.toLowerCase()] = copy;
        console.log(json)
    }
    fs.writeFileSync('src/assets/json/copy.json', JSON.stringify(json))
}


downloadContent();