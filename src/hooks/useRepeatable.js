import { useEffect, useState } from "react"




const useRepeatable = ({componentType, copy, length}) => {
    const [arr, setArr] = useState([])
    useEffect(()=> {
        console.log(componentType, copy, length)
        let newArr = [];
        for (let i = 0; i <length; i++) {
            let obj = {
                header: copy[`${componentType}Header${i + 1}`],
                body: copy[`${componentType}Body${i + 1}`],
                linkUrl: copy[`${componentType}LinkUrl${i + 1}`],
                linkLabel: copy[`${componentType}LinkLabel${i + 1}`],
                icon: copy[`${componentType}Icon${i + 1}`],
            }

            newArr.push(obj);
        }
        setArr(newArr);
        

    }, [componentType, copy, length])
    return arr;
}

export default useRepeatable;