import React, { Fragment } from 'react';
import LazyLoad from 'react-lazyload';
import Movies from './movie';
import Pagination from "./pagination"
import {checkDevice} from "../../shared/utility/checkDeviceUtility"

export default class DesktopComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isMobile:'',
            MovieLength:0,
            start:0,
            end:5,
            showPerPage:5
        }
        this.onPaginationChange = this.onPaginationChange.bind(this);
        this.onButtonClick =this.onButtonClick.bind(this);
        
       
    }
    componentDidMount(){
        //api call()
        let isMobile = checkDevice()
        
         this.setState({isMobile:isMobile,MovieLength:this.props.movieList.length})
    }

    onPaginationChange(start, end){
        console.log(start,end)
        this.setState({start:start})
       //this.setState({start:start,end:end})
    }

    onButtonClick(type){
        let a=this.state.start;
        let b= this.state.end;
        if (type === 'prev') {
                    this.setState({start:a-5})
                    this.setState({end:b-5})
                    //counter === 1 ? setCounter(1) : setCounter(counter - 1);
                } else if (type === 'next') {
                    console.log("111")
                    this.setState({start:a+5})
                    this.setState({end:b+5})
                   // Math.ceil(total / showPerPage) === counter ? setCounter(counter) : setCounter(counter + 1);
                }
    }

    render() {
    return (
        <Fragment>
                 {this.props.movieList &&
                        
                        this.props.movieList.slice(this.state.start,this.state.end).map((movie , i) => (
                             <div key={movie.rank}>
                                 <Movies movie = {movie} isMobile={this.state.isMobile} />
                             </div>
                         ))
                     }
                     <div className="m-2 d-flex justify-content-center">
                          <Pagination total={this.state.MovieLength} showPerPage={this.state.showPerPage} onPaginationChange={this.onPaginationChange} onButtonClick={this.onButtonClick} start={this.state.start} end={this.state.end} length={this.state.MovieLength} />
                        </div>
        </Fragment>
        )
    }
}