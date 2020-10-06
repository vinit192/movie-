import React, { Fragment } from 'react';
import LazyLoad from 'react-lazyload';
import Movies from './movie';
import {checkDevice} from "../../shared/utility/checkDeviceUtility"

export default class MobileComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isMobile:'',
        }
       
    }
    componentDidMount(){
        let isMobile = checkDevice()
         this.setState({isMobile:isMobile})
    }
    render() {
    return (
        <Fragment>
                  {this.props.movieList &&
                        
                        this.props.movieList.map((movie , i) => (
                             <div key={movie.rank}>
                                 <Movies movie = {movie} isMobile={this.state.isMobile} />
                             </div>
                         ))
                     }
        </Fragment>
        )
    }
}