import React, { useState } from 'react';
import undo from '../images/icons8-undo-alt-32.png';

function CategoryTally(props) {
    const handleClick = () => {
        props.setcounter(props.counter + 1)
    }
    return (
        <div className="col-sm-2 category-tally" >
            <div className="image-info">
                <img className="undo-icon" src={undo} onClick={() => {
                    if (props.counter > 0) {
                        props.setcounter(props.counter - 1)
                    }
                }
                } />
            </div>

            <div className="text-center">
                <p className="counter_label">{props.counter}</p>
            </div>
            <div className="text-center">
                <button className="btn_1" onClick={handleClick}>{props.category}</button>
            </div>



        </div >
    )
}

export default CategoryTally;