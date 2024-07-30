'use client'

import { useEffect, useState } from "react"


const useRepeatable = ({ componentType, copy, length }) => {
    const [arr, setArr] = useState([]);

    const formats = {
        promo: {
            header: 'Header',
            body: 'Body',
            linkUrl: 'LinkUrl',
            linkLabel: 'LinkLabel',
            icon: 'Icon'
        }, 
        textBlock: {
            title: 'Title',
            body: 'Body'
        }
    }

    const formatObj = ({componentType, copy, i}) => {
        let format = formats[`${componentType}`]
        let obj = {}
        for (let [key, value] of Object.entries(format)) {
            obj[key] = copy[`${componentType}${value}${i + 1}`]
        }
        return obj;
    }

    useEffect(() => {
        console.log(copy)
        let newArr = [];
        for (let i = 0; i < length; i++) {
            // let obj = {
            //     header: copy[`${componentType}Header${i + 1}`],
            //     body: copy[`${componentType}Body${i + 1}`],
            //     linkUrl: copy[`${componentType}LinkUrl${i + 1}`],
            //     linkLabel: copy[`${componentType}LinkLabel${i + 1}`],
            //     icon: copy[`${componentType}Icon${i + 1}`],
            // }
            let obj = formatObj({componentType, copy, i})

            newArr.push(obj);
        }
        console.log(newArr)
        setArr(newArr);


    }, [componentType, copy, length])
    return arr;
}

export default useRepeatable;