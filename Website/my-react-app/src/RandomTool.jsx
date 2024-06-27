import React, {useState, useRef, useEffect} from "react";

function RandomTool()
{
    const [totalChance, setTotalChance] = useState(1);
    const [coinChance, setCoinChance] = useState(1);
    const [dieChance, setDieChance] = useState(1);
    const [coinFail, setCoinFail] = useState(false);
    const [dieFail, setDieFail] = useState(false);

    useEffect(() => {
        formatChance();
        //console.log(totalChance);
    })

    function increaseOdds(newOdds)
    {
        setTotalChance(total => total * newOdds);
    }
    
    function decreaseOdds(oldOdds)
    {
        setTotalChance(total => total / oldOdds);
    }

    function increaseCoin()
    {
        setCoinChance(coin => coin * (1/2));
    }

    function resetCoin()
    {
        decreaseOdds(coinChance);
        setCoinChance(1);
    }

    function increaseDie()
    {
        setDieChance(die => die * (1/6));
    }

    function resetDie()
    {
        decreaseOdds(dieChance);
        setDieChance(1);
    }

    function toggleCoinFail()
    {
        setCoinFail(!coinFail);
        resetCoin();
    }

    function toggleDieFail()
    {
        setDieFail(!dieFail);
        resetDie();
    }

    function formatChance()
    {
        return (totalChance * 100) + "%";
    }

    function testOdds(chanceType)
    {
        if (chanceType == "coin" && !coinFail)
        {
            if (getRandomInt(2) == 0)
            {
                increaseCoin();
                increaseOdds((1/2));
            }
            else {
                //toggleCoinFail(); Testing purposes for now, don't turn off 
            }
        }
        else if (chanceType == "die" && !dieFail)
        {
            if (getRandomInt(6) == 0)
            {
                increaseDie();
                increaseOdds((1/6));
            }
            else {
                //toggleDieFail();
            }
        }
    }

    function getRandomInt(max)
    {
        return Math.floor(Math.random() * max);
    }

    return(
        <>
            <p>{formatChance()} chance to get this lucky</p>
            <button className="flip-coin" onClick={() => testOdds("coin")}>Coin Hit</button>
            <button className="flip-coin" onClick={() => resetCoin()}>Coin Reset</button>
            <button className="roll-die" onClick={() => testOdds("die")}>Die Roll</button>
            <button className="roll-die" onClick={() => resetDie()}>Die Reset</button>
        </>
    );
}

export default RandomTool