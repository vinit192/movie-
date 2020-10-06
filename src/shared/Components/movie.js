import React, { Fragment } from 'react';
import LazyLoad from 'react-lazyload';
import StarRating from './starRating';

export default class MoviesComponent extends React.Component {
    constructor(props){
        super(props);
       
    }
    render() {
    return (
        <Fragment>
            <div className="row border m-2 pb-2">
                <div className="col-8">
                    <div>
                        <div className="rating">{this.props.movie.rank}</div>
                        <div className="ml-3">
                            <div className="font-weight-bold">{this.props.movie.title}</div>
                            <div>{this.props.movie.description}</div>
                            <div className="rating">
                                Year - {this.props.movie.year}
                            </div>
                            <div className="my-2" style={{color:this.props.movie.color}}>
                                {/* Ratings - {this.props.movie.imDbRating} */}
                                <StarRating rating={this.props.movie.imDbRating}/>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="col-4"> 
                    <div className="float-right">
                        <div className="mt-2">
                        <LazyLoad height={100}>
                            <img src={this.props.movie.image} height={100} width={180}></img>
                        </LazyLoad>
                        </div>
                        <div className="pl-4">
                            Ratting Count - {this.props.movie.imDbRatingCount}</div>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
    }
}

