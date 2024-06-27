import React, {useState, useRef} from "react";

function RandomTool()
{
    const [totalChance, setTotalChance] = useState(1);
    const [coinChance, setCoinChance] = useState(1);
    const [dieChance, setDieChance] = useState(1);

    function increaseOdds(newOdds)
    {
        setTotalChance(totalChance => totalChance * newOdds);
    }
    
    function decreaseOdds(oldOdds)
    {
        setTotalChance(totalChance => totalChance / oldOdds);
    }

    function increaseCoin()
    {
        setCoinChance(coinChance => coinChance * (1/2));
    }

    function resetCoin()
    {
        setCoinChance(coinChance => 0);
    }

    function increaseDie()
    {
        setDieChance(dieChance => dieChance * (1/6));
    }

    function resetDie()
    {
        setDieChance(dieChance => 0);
    }

    function formatChance()
    {
        return (totalChance * 100) + "%";
    }

    return(
        <>
            <p>{formatChance()} chance to hit</p>
        </>
    );
}

export default RandomTool