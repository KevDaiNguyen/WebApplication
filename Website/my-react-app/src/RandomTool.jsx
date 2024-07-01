import React, {useState, useEffect} from "react";

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
    const [pngURL, setImageURL] = useState("");

    const coinHeadImg = "./src/assets/Coin-Head.png";
    const coinTailsImg = "./src/assets/Coin-Tails.png";
    const dieOneImg = "./src/assets/Die-1.png";
    const dieTwoImg = "./src/assets/Die-2.png";
    const dieThreeImg = "./src/assets/Die-3.png";
    const dieFourImg = "./src/assets/Die-4.png";
    const dieFiveImg = "./src/assets/Die-5.png";
    const dieSixImg = "./src/assets/Die-6.png";

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
        imagePopup(chanceType, number);
    }

    function imagePopup(chanceType, number)
    {
        if (chanceType == "coin")
        {
            switch(number)
            {
                case 0: setImageURL(coinHeadImg);
                        break;

                case 1: setImageURL(coinTailsImg);
                        break;
            }
        }
        else {
            switch(number)
            {
                case 0: setImageURL(dieOneImg);
                        break;

                case 1: setImageURL(dieTwoImg);
                        break;  

                case 2: setImageURL(dieThreeImg);
                        break;

                case 3: setImageURL(dieFourImg);
                        break;

                case 4: setImageURL(dieFiveImg);
                        break;

                case 5: setImageURL(dieSixImg);
                        break;
            }
        }

        return imageSource;
    }

    function resetResults()
    {
        setCallText("");
        setImageURL("");
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
                setCoinWinLoss([coinWinLoss[0] + 1, coinWinLoss[1]]);
                formatResults(chanceType, tempNumber, true);
            }
            else {
                //gambleToggle("coin"); Testing purposes for now, don't turn off 
                setCoinWinLoss([coinWinLoss[0], coinWinLoss[1] + 1]);
                formatResults(chanceType, tempNumber, false);
            }
        }
        else if (chanceType == "die" && !dieFail)
        {
            let tempNumber = getRandomInt(6);
            if (tempNumber == number)
            {
                gambleWin("die");
                increaseOdds((1/6));
                setDieWinLoss([dieWinLoss[0] + 1, dieWinLoss[1]]);
                formatResults(chanceType, tempNumber, true);
            }
            else {
                //gambleToggle("die");
                setDieWinLoss([dieWinLoss[0], dieWinLoss[1] + 1]);
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
            <div className="chance-container">
                <div className="coin-container">
                    <button className="flip-coin" onClick={() => testOdds("coin", 0)}>Call Heads</button>
                    <button className="flip-coin" onClick={() => testOdds("coin", 1)}>Call Tails</button>
                    <button className="flip-coin" onClick={() => gamelbeReset("coin")}>Coin Reset</button> 
                </div>

                <p>
                    {formatChance()} chance to get this lucky <br/>
                    
                    {coinWinLoss[0]} wins and {coinWinLoss[1]} losses for coinflips <br/>
                    {dieWinLoss[0]} wins and {dieWinLoss[1]} losses for dice rolls <br/>

                    {callResult} <br/>

                    {pngURL && (
                        <div className="image-holder">
                        <img src={pngURL} height="150" width="150"></img>
                        </div>
                    )}
                </p>
                
                <div className="die-container">
                    <span className="roll-die" onClick={() => testOdds("die", 0)}>Call One</span> 
                    <span className="roll-die" onClick={() => testOdds("die", 1)}>Call Two</span>
                    <span className="roll-die" onClick={() => testOdds("die", 2)}>Call Three</span> <br/>
                    <button className="roll-die" onClick={() => testOdds("die", 3)}>Call Four</button>
                    <button className="roll-die" onClick={() => testOdds("die", 4)}>Call Five</button>
                    <button className="roll-die" onClick={() => testOdds("die", 5)}>Call Six</button>
                    <button className="roll-die" onClick={() => gamelbeReset("die")}>Die Reset</button>
                </div>
            </div>
        </>
    );
}

export default RandomTool