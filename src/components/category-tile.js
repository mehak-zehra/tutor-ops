import React, { useState } from 'react';
import undo from '../images/icons8-undo-alt-32.png';

function CategoryTally(props) {
    const [counter, setcounter] = useState(0);
    const handleClick = () => {
        setcounter(counter + 1)
        props.updateTotal()
    }
    return (
        <div className="col-md-2 category-tally" >
            <div className="image-info">
                <img className="undo-icon" src={undo} onClick={() => {
                    if (counter > 0) {
                        setcounter(counter - 1)
                        props.decrementTotal();
                    }
                }
                } />
            </div>

            <div className="text-center">
                <h1 className="counter_label">{counter}</h1>
            </div>
            <div className="text-center">
                <button className="btn_1" onClick={handleClick}> {props.category} </button>
            </div>



        </div >
    )
}

export default CategoryTally;