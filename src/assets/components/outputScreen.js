import React from 'react';
import OutputScreenRow  from './outputScreenRow.js';

const OutputScreen = (props) => {
    return (
      <div className="screen">
        <OutputScreenRow value={props.output} />
        <OutputScreenRow />
      </div>
    );
};
export default OutputScreen;