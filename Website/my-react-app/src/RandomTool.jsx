import React, {useState, useRef, useEffect} from "react";

function RandomTool()
{
    const [totalChance, setTotalChance] = useState(1);
    const [coinChance, setCoinChance] = useState(1);
    const [dieChance, setDieChance] = useState(1);
    const [coinFail, setCoinFail] = useState(false);
    const [dieFail, setDieFail] = useState(false);
    const [coinWinLoss, setCoinWinLoss] = useState([0, 0]);
    const [dieWinLoss, setDieWinLoss] = useState([0, 0]);
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

    function gambleWin(chanceType)
    {
        if (chanceType == "coin")
        {
            setCoinChance(coin => coin * (1/2));
        }
        else if (chanceType == "die")
        {
            setDieChance(die => die * (1/6));
        }
    }

    function gamelbeReset(chanceType)
    {
        if (chanceType == "coin")
        {
            decreaseOdds(coinChance);
            setCoinChance(1);
            setCoinWinLoss([0, 0]);
        }
        else if (chanceType == "die")
        {
            decreaseOdds(dieChance);
            setDieChance(1);
            setDieWinLoss([0, 0]);
        }
        resetResults();
    }

    function gambleToggle(chanceType)
    {
        if (chanceType == "coin")
        {
            setCoinFail(!coinFail);
            gamelbeReset("coin");
        }
        else if (chanceType == "die")
        {
            setDieFail(!dieFail);
            gamelbeReset("die");
        }
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
                gambleWin("coin");
                increaseOdds((1/2));
                formatResults(chanceType, tempNumber, true);
                setCoinWinLoss([coinWinLoss[0] + 1, coinWinLoss[1]]);
            }
            else {
                //gambleToggle("coin"); Testing purposes for now, don't turn off 
                formatResults(chanceType, tempNumber, false);
                setCoinWinLoss([coinWinLoss[0], coinWinLoss[1] + 1]);
            }
        }
        else if (chanceType == "die" && !dieFail)
        {
            let tempNumber = getRandomInt(6);
            if (tempNumber == number)
            {
                gambleWin("die");
                increaseOdds((1/6));
                formatResults(chanceType, tempNumber, true);
                setDieWinLoss([dieWinLoss[0] + 1, dieWinLoss[1]]);
            }
            else {
                //gambleToggle("die");
                formatResults(chanceType, tempNumber, false);
                setDieWinLoss([dieWinLoss[0], dieWinLoss[1] + 1]);
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
            <p>{coinWinLoss[0]} wins and {coinWinLoss[1]} losses for coinflips</p>
            <p>{dieWinLoss[0]} wins and {dieWinLoss[1]} losses for dice rolls</p>
            <p>{callResult}</p>
            <button className="flip-coin" onClick={() => testOdds("coin", 0)}>Call Heads</button>
            <button className="flip-coin" onClick={() => testOdds("coin", 1)}>Call Tails</button>
            <button className="flip-coin" onClick={() => gamelbeReset("coin")}>Coin Reset</button> <br/> <br/>
            <button className="roll-die" onClick={() => testOdds("die", 0)}>Call One</button>
            <button className="roll-die" onClick={() => testOdds("die", 1)}>Call Two</button>
            <button className="roll-die" onClick={() => testOdds("die", 2)}>Call Three</button>
            <button className="roll-die" onClick={() => testOdds("die", 3)}>Call Four</button>
            <button className="roll-die" onClick={() => testOdds("die", 4)}>Call Five</button>
            <button className="roll-die" onClick={() => testOdds("die", 5)}>Call Six</button>
            <button className="roll-die" onClick={() => gamelbeReset("die")}>Die Reset</button>
        </>
    );
}

export default RandomTool