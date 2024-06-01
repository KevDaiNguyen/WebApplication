import profilePic from './assets/NVA-panda.png'

function Card()
{
    return(
        <div className="Card">
            <img className="card-image" src={profilePic} width="150" height="150" alt="Profile Picture"></img>
            <h2 className="card-title">Kevin Nguyen</h2>
            <p className="card-text"> I am a programmer and want to make video games</p>
        </div>
    );
}

export default Card