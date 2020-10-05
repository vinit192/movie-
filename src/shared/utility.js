export const convertRating =(topMovies)=>{
    topMovies.filter(a =>{
        if(a.imDbRating >=5 && a.imDbRating < 6)
            a.color='red';
        else if(a.imDbRating >=6 && a.imDbRating < 7)
            a.color ='yellow';
        else if(a.imDbRating >=7 && a.imDbRating < 8)
            a.color ='green';
        else if(a.imDbRating >=8 && a.imDbRating < 9)
            a.color = 'orange';
        else if(a.imDbRating >=9 && a.imDbRating < 10)
            a.color = 'blue';

        return a;
    })
    return topMovies
}

export const checkDevice = () => {
    let isMobile = window.innerWidth < 800
    window.addEventListener('resize', () => {
             isMobile= window.innerWidth < 800;
            });
    return isMobile;
}