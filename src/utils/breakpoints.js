export const isDesktop = ({ innerWidth }) => {
    return innerWidth >= 768;
};

export const isMobile = ({ innerWidth }) => {
    return innerWidth < 768;
};
