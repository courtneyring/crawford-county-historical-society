export const isDesktop = ({ innerWidth }) => {
    return innerWidth >= 992;
};

export const isLargeDesktop = ({ innerWidth }) => {
    return innerWidth > 1200;
};
export const isSmallDesktop = ({ innerWidth }) => {
    return innerWidth >= 992 && innerWidth < 1200;
};
export const isTablet = ({ innerWidth }) => {
    return innerWidth >= 768 && innerWidth < 992;
};

export const isMobile = ({ innerWidth }) => {
    return innerWidth < 768;
};
