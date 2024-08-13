export const isDesktop = ({ innerWidth }) => {
    return innerWidth >= 960;
};

export const isMobile = ({ innerWidth }) => {
    return innerWidth < 960;
};
