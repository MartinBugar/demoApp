import PropTypes from 'prop-types'
import Button from "./Button";

//Function base component
const HeaderFunctionBased = (props) => {


    const onClick = () => {
        console.log("click");
    }

    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button color="black" text="Add" onClick={onClick}/>
        </header>
    )
}

HeaderFunctionBased.defaultProps = {
    title : 'Task Tracer',
}

HeaderFunctionBased.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle = {
//     color:'red',
//     backgroundColor : 'black'
// }

export default HeaderFunctionBased;