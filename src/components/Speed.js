import React from 'react';

export default (props) => {
    if(props.symbol !== 0 && props.sec !== 0) {
        const wpm = (props.symbols/5) / (props.sec/60);
        return(
            <div>{Math.round(wpm)} wpm</div>
        )
    }
    return null;
}