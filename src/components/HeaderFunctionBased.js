import PropTypes from 'prop-types'
import Button from "./Button";

//Function base component
const HeaderFunctionBased = (props) => {

    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button color={props.showAdd ? "red" : "black"}
                    text={props.showAdd ? "Close" : "Add"}
                    onClick={props.onAdd}/>
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