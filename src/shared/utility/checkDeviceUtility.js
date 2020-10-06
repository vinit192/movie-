export const checkDevice = () => {
    let isMobile = window.innerWidth < 800
    window.addEventListener('resize', () => {
             isMobile= window.innerWidth < 800;
            });
    return isMobile;
}