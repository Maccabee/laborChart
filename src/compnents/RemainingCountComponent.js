import React from 'react';

const RemainingCount = ({ remainingCount }) => {
    return (<div class="remaining-count">
        {remainingCount} guesses left
    </div>);
}

export default RemainingCount;