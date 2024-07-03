
const fs = require('fs');
const { writeSheet, readSheet } = require('./sheetsService.js');
const markdownit = require('markdown-it')
const md = markdownit({breaks: true})
// let file = fs.open('copy.json')

const sections = [
    {
        name: 'Home',
        type: 'object'
    },
    {
        name: 'Footer',
        type: 'object'
    },
    {
        name: 'About',
        type: 'object'
    },
    {
        name: 'Navbar',
        type: 'array'
    }
]


const convertSpreadsheetToArray = (rows, markdown) => {
    let arr = []
    let keys = rows[0];
    rows.shift();

    for (let row of rows) {
        let obj = {};
        for (let [idx, key] of Object.entries(keys)) {
            let val = md.renderInline(row[idx])
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
            let val = md.renderInline(row[1])
            copy[row[0]] = val
        }
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
    fs.writeFileSync('src/assets/json/copy.json', JSON.stringify(json))
}


downloadContent();