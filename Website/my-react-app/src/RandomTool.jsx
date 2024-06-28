import React, {useState, useRef, useEffect} from "react";

function RandomTool()
{
    const [totalChance, setTotalChance] = useState(1);
    const [coinChance, setCoinChance] = useState(1);
    const [dieChance, setDieChance] = useState(1);
    const [coinFail, setCoinFail] = useState(false);
    const [dieFail, setDieFail] = useState(false);
    const [callResult, setCallText] = useState("");

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
        resetResults();
    }

    function increaseDie()
    {
        setDieChance(die => die * (1/6));
    }

    function resetDie()
    {
        decreaseOdds(dieChance);
        setDieChance(1);
        resetResults();
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

    function formatResults(chanceType, number, winLoss)
    {
        let tempString = "";

        if (winLoss == true)
        {
            tempString = "Win: ";
        }
        else {
            tempString = "Loss: ";
        }

        if (chanceType == "coin")
        {
            switch(number)
            {
                case 0: tempString += "Landed on HEADS!";
                        break;

                case 1: tempString += "Landed on TAILS!";
                        break;
            }
        }
        else {
            switch(number)
            {
                case 0: tempString += "Rolled a ONE!";
                        break;

                case 1: tempString += "Rolled a TWO!";
                        break;  

                case 2: tempString += "Rolled a THREE!";
                        break;

                case 3: tempString += "Rolled a FOUR!";
                        break;

                case 4: tempString += "Rolled a FIVE!";
                        break;

                case 5: tempString += "Rolled a SIX!";
                        break;
            }
        }

        setCallText(tempString);
    }

    function resetResults()
    {
        setCallText("");
    }

    function testOdds(chanceType, number)
    {
        if (chanceType == "coin" && !coinFail)
        {
            let tempNumber = getRandomInt(2);
            if (tempNumber == number)
            {
                increaseCoin();
                increaseOdds((1/2));
                formatResults(chanceType, tempNumber, true);
            }
            else {
                //toggleCoinFail(); Testing purposes for now, don't turn off 
                formatResults(chanceType, tempNumber, false);
            }
        }
        else if (chanceType == "die" && !dieFail)
        {
            let tempNumber = getRandomInt(6);
            if (tempNumber == number)
            {
                increaseDie();
                increaseOdds((1/6));
                formatResults(chanceType, tempNumber, true);
            }
            else {
                //toggleDieFail();
                formatResults(chanceType, tempNumber, false);
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
            <p>{callResult}</p>
            <button className="flip-coin" onClick={() => testOdds("coin", 0)}>Call Heads</button>
            <button className="flip-coin" onClick={() => testOdds("coin", 1)}>Call Tails</button>
            <button className="flip-coin" onClick={() => resetCoin()}>Coin Reset</button> <br/> <br/>
            <button className="roll-die" onClick={() => testOdds("die", 0)}>Call One</button>
            <button className="roll-die" onClick={() => testOdds("die", 1)}>Call Two</button>
            <button className="roll-die" onClick={() => testOdds("die", 2)}>Call Three</button>
            <button className="roll-die" onClick={() => testOdds("die", 3)}>Call Four</button>
            <button className="roll-die" onClick={() => testOdds("die", 4)}>Call Five</button>
            <button className="roll-die" onClick={() => testOdds("die", 5)}>Call Six</button>
            <button className="roll-die" onClick={() => resetDie()}>Die Reset</button>
        </>
    );
}

export default RandomTool