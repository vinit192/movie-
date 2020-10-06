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
            <div className=" border  pb-2">
                <div className="row m-1">
                <div className="col-6 col-md-8">
                    <div>
                        <div className="rating">{this.props.movie.rank}</div>
                        <div className="ml-3">
                            <div className="font-weight-bold">{this.props.movie.title}</div>
                            <div>{this.props.movie.description}</div>
                            <div className="rating">
                                Year - {this.props.movie.year}
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-6 col-md-4"> 
                    <div className="float-right">
                        <div className="mt-2">
                        <LazyLoad height={100}>
                            <img src={this.props.movie.image} height={100} width={this.props.isMobile?130:180}></img>
                        </LazyLoad>
                        </div>
                    </div>
                </div>
                
                </div>
                <div className="row">
                    <div className="col-6 col-md-8">
                        <div className="ml-3" style={{color:this.props.movie.color}}>
                            {!this.props.isMobile ?
                                <span>Ratings - {this.props.movie.imDbRating}</span>
                                :
                                 <StarRating rating={this.props.movie.imDbRating}/>
                                }
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className=" pr-3 float-right">
                            Rating Count - {this.props.movie.imDbRatingCount}</div>
                        </div>
                </div>
            </div>
        </Fragment>
    );
    }
}

