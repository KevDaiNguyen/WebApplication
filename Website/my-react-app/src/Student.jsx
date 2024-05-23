import Proptype from 'prop-types'

function Student(props)
{
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.prototype = {
    name: Proptype.string,
    age: Proptype.number,
    isStudent: Proptype.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student