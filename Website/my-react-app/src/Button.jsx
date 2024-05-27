
function Button()
{
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    let count = 0;

    const handleClick = (name) => {
        if (count < 3)
        {
            count++;
            console.log(name + " you clicked me " + count + " timee/s");
        }
        else {
            console.log(name + " stop clicking me!");
        }
    };

    const handleClick2 = (event) => event.target.textContent = "Ouch";

    return(
        <>
        <button style={styles} onClick={() => handleClick("banana")}>A: Inline Style</button>
        
        <button className="button" onDoubleClick={(e) => handleClick2(e)} >B: External Style</button>
        </>
    );
}

export default Button