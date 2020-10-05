import React, { Fragment } from 'react';
import LazyLoad from 'react-lazyload';
import StarRating from './starRating';

function MoviesComponent(props){
    const {movie} = props; 
    let movieColor = movie.color;
    return (
        <Fragment>
            <div className="row border m-2 pb-2">
                <div className="col-8">
                    <div>
                        <div className="rating">{movie.rank}</div>
                        <div className="ml-3">
                            <div className="font-weight-bold">{movie.title}</div>
                            <div>{movie.description}</div>
                            <div className="rating">
                                Year - {movie.year}
                            </div>
                            <div className="my-2" style={{color:movieColor}}>
                                {/* Ratings - {movie.imDbRating} */}
                                <StarRating rating={movie.imDbRating}/>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="col-4"> 
                    <div className="float-right">
                        <div className="mt-2">
                        <LazyLoad height={100}>
                            <img src={movie.image} height={100} width={180}></img>
                        </LazyLoad>
                        </div>
                        <div className="pl-4">
                            Ratting Count - {movie.imDbRatingCount}</div>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}

export default MoviesComponent;