import React from 'react';

const RemainingCount = ({ remainingCount }) => {
    return (<div className="remaining-count">
        {remainingCount} guesses left
    </div>);
}

export default RemainingCount;