import React, { Fragment } from 'react';
import enhancer from './enhancer'
import LazyLoad from 'react-lazyload'

function MoviesComponent(props){
    const {movie} = props; 
    let movieColor = movie.color;
    return (
        <Fragment>
            <div className="row border m-2 pb-2">
                <div className="col-8">
                    <div>
                        <div className="rating">{movie.id}</div>
                        <div className="ml-3">
                            <div className="font-weight-bold">{movie.title}</div>
                            <div>{movie.description}</div>
                            <div className="rating">
                                Year - {movie.year}
                            </div>
                            <div className="my-2" style={{color:movieColor}}>
                                Ratings - {movie.rating}
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-4"> 
                    <div className="float-right">
                        <div className="mt-2">
                        <LazyLoad height={100}>
                            <img src={movie.img} height={100} width={180}></img>
                        </LazyLoad>
                        </div>
                        <div className="pl-4">
                            Ratting Count - {movie.rating_count}</div>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}

export default enhancer(MoviesComponent);