import React from 'react';

let enhancer = (MoviesComponent) => ({...props}) =>{

    return(
        <MoviesComponent
        {...props}
        />
    );
}

export default enhancer;