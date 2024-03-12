import React from 'react';

const OutputScreenRow=() => {
    return(
        <div className="screen-row" >
            <input type ="text" readOnly value={props.value} />
        </div>
    );
};
export default OutputScreenRow;