import { useEffect, useState } from 'react';

const useResize = () => {
    const [dimensions, setDimensions] = useState({
        innerWidth: typeof window !== 'undefined' && window.innerWidth,
        innerHeight: typeof window !== 'undefined'&&  window.innerHeight,
    });

    useEffect(() => {
        const resizeHandler = () => {
            setDimensions({
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
            });
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, [dimensions]);

    return dimensions;
};

export default useResize;
