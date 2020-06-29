import React, { useState } from 'react';
import CategoryTally from './category-tile';

function Dashboard() {
    const [copied, setcopied] = useState("");
    const [approve, setApprove] = useState(0);
    const [reject, setReject] = useState(0);
    const [recollect, setRecollect] = useState(0);
    const [finalReview, setFinalReview] = useState(0);
    const [noCHAccount, setnoCHAccount] = useState(0);

    const copyToClipboard = () => {
        const el = document.createElement('textarea');
        el.value =
            `*_TutorOps_:*\n` +
            `*APPROVED* = ${approve}\n` +
            `*REJECTED* = ${reject}\n` +
            `*RECOLLECT* = ${recollect}\n` +
            `*FINAL REVIEW* = ${finalReview}\n` +
            `*NO CH ACCOUNT* = ${noCHAccount}\n` +
            `_____________________________________\n` +
            `*TOTAL = ${approve + reject + finalReview + recollect + noCHAccount}*`
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        // update the copied status and remove after 5 seconds
        setcopied("Stats have been successsfuly copied!")
        setTimeout(() => {
            setcopied("")
        }, 5000);
    }
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col">
                    <h1 className="title-label">TutorOps Applications</h1>
                </div>
            </div>
            <div className="row">
                <hr />
            </div>
            <div className="row " >
                <CategoryTally category="Approved" counter={approve} setcounter={setApprove} />
                <CategoryTally category="Rejected" counter={reject} setcounter={setReject} />
                <CategoryTally category="Recollection" counter={recollect} setcounter={setRecollect} />
                <CategoryTally category="Final Review" counter={finalReview} setcounter={setFinalReview} />
                <CategoryTally category="No CH/Category" counter={noCHAccount} setcounter={setnoCHAccount} />
            </div>
            <div className="row">
                <hr />
            </div>

            <div className=" row total-category">
                <p className="total-label">total : {approve + reject + finalReview + recollect + noCHAccount}</p>
                <button className="clipboard-btn" onClick={copyToClipboard}>Copy to Clipboard</button>
                <p className="copied-status">{copied}</p>
            </div>
        </div>
    )
}



export default Dashboard;