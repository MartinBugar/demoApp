import PropTypes from 'prop-types'

//Function base component
const HeaderFunctionBased = (props) => {
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <button className="btn">Add</button>
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