
function ProfilePicture(){

    const imageUrl = "./src/assets/NVA-panda.png"

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img src={imageUrl} height="150" width="150" onClick={(e) => handleClick(e)}></img>
    );
}

export default ProfilePicture