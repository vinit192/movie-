import React, { Fragment } from 'react';
import StarRatings from 'react-star-ratings';

function StarRatingComponent(props){
    const {rating} = props;
    return (
        <Fragment>
            <StarRatings
                rating={parseFloat(rating)}
                starRatedColor="yellow"
                numberOfStars={10}
                name='rating'
                starDimension="20px"
                starSpacing="1px"
                />
        </Fragment>
    )
}
export default StarRatingComponent;