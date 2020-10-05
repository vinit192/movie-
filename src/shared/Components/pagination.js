import React, { useState, useEffect } from "react";
const Pagination = ({ showPerPage, onPaginationChange, total,onButtonClick,start,end }) => {

   
    return (
        <React.Fragment>
            {start!==0&&<button onClick={() => onButtonClick('prev')}>Previous</button>}
            {end!== total &&<button onClick={() => onButtonClick('next')}>Next</button>}
        </React.Fragment>
    )
};

export default Pagination;
