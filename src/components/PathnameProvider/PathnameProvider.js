'use client';

import { usePathname } from 'next/navigation';

export function PathnameProvider({ children }) {
    const pathname = usePathname();
    const childArray = React.Children.toArray(children);
    const firstChild = childArray[0];
    const clonedChild = React.cloneElement(firstChild, { ...firstChild.props, newProp });

    return (
        <>
            {clonedChild}
        </>
    );
}