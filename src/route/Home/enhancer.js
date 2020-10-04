import React from 'react';
import movieImg from '../../../src/movie.jpg'

let enhancer = (HomeComponent) => ({...props}) =>{

    const topMovies = [
        {
            id:'1',
            title:'AAA',
            description:'xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx',
            year:'2020',
            rating:5.2,
            img:movieImg,
            rating_count:'22k'
        },
        {
            id:'2',
            title:'BBB',
            description:'xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx',
            year:'2020',
            rating:7,
            img:movieImg,
            rating_count:'20k'
        },
        {
            id:'3',
            title:'CCC',
            description:'xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx',
            year:'2020',
            rating:8,
            img:movieImg,
            rating_count:'26k'
        },
        {
            id:'4',
            title:'DDD',
            description:'xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx',
            year:'2020',
            rating:9.2,
            img:movieImg,
            rating_count:'26k'
        }

    ]

    topMovies.filter(a =>{
        if(a.rating >=5 && a.rating < 6)
            a.color='red';
        else if(a.rating >=6 && a.rating < 7)
            a.color ='yellow';
        else if(a.rating >=7 && a.rating < 8)
            a.color ='green';
        else if(a.rating >=8 && a.rating < 9)
            a.color = 'orange';
        else if(a.rating >=9 && a.rating < 10)
            a.color = 'blue';

        return a;
    })


    return(
        <HomeComponent
        {...props}
        {...{topMovies}}
        />
    );
}

export default enhancer;