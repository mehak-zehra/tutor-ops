import React, { useState } from 'react';
import CategoryTally from './category-tile';

function Dashboard() {
    const [total, setTotal] = useState(0);
    const incrementTotal = () => {
        setTotal(total + 1)
    }
    const decrementTotal = () => {
        setTotal(total - 1)
    }
    return (
        <div className="container">
            <div className="row text-center">
                <h1 className="total-label">TutorOps Applications</h1>
                {/* <button className="btn_3_clear">CLEAR ALL */}

                {/* </button> */}
            </div>
            <div className="row justify-content-center" >
                <CategoryTally category="Approved" updateTotal={incrementTotal} decrementTotal={decrementTotal} />
                <CategoryTally category="Rejected" updateTotal={incrementTotal} decrementTotal={decrementTotal} />
                <CategoryTally category="Recollection" updateTotal={incrementTotal} decrementTotal={decrementTotal} />
                <CategoryTally category="Final Review" updateTotal={incrementTotal} decrementTotal={decrementTotal} />
                <CategoryTally category="No CH/Category" updateTotal={incrementTotal} decrementTotal={decrementTotal} />
            </div>

            <div className="total-category">
                <h1 className="total-label">total : {total}</h1>
            </div>
        </div>
    )
}



export default Dashboard;