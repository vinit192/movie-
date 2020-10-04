import React, { Fragment } from 'react';
import enhancer from './enhancer'
import Movies from '../../shared/movie'

function HomeComponent(props){

    const {topMovies} = props;
    console.log(topMovies);
    return (
        <Fragment>
                <div className="border mx-5 my-2">
                    <p className="header">Top Movies</p>
                    {topMovies &&
                        topMovies.map((movie , i) => (
                            <div key={movie.id}>
                                <Movies {...{movie}}/>
                            </div>
                        ))
                    }
                </div>
        </Fragment>
    );
}

export default enhancer(HomeComponent);