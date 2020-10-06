import React, {Fragment} from "react";

export default class Pagination extends React.Component {
    constructor(props){
        super(props);
       
    }
    render() {
        return (
            <Fragment>
                {this.props.start!==0&&<button className="btn btn-link" onClick={() => this.props.onButtonClick('prev')}>Prev</button>}

                {this.props.end!== this.props.total &&<button className="btn btn-link" onClick={() => this.props.onButtonClick('next')}>Next</button>}
            </Fragment>
        )
    }

} 


