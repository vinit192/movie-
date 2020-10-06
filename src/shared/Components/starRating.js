import React, { Fragment } from 'react';
import StarRatings from 'react-star-ratings';

export default class StarRatingComponent extends React.Component{
    //const {rating} = props;
    constructor(props){
        super(props);;
    }
    render(){
    return (
        <Fragment>
            <StarRatings
                rating={parseFloat(this.props.rating)}
                starRatedColor="yellow"
                numberOfStars={10}
                name='rating'
                starDimension="20px"
                starSpacing="0px"
                />
        </Fragment>
    )
    }
}
