import { useEffect, useState } from 'react';
import useResize from './useResize';

const useResizeResponsive = (comparator) => {
    const [result, setResult] = useState(false);

    const resize = useResize();

    const { innerWidth, innerHeight } = resize;

    useEffect(() => {
        const comparatorResult = comparator({
            innerWidth,
            innerHeight,
        });

        if (comparatorResult !== result) {
            setResult(comparatorResult);
        }
    }, [result, innerWidth, innerHeight, comparator]);

    return result;
};

export default useResizeResponsive;
