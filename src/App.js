import HeaderFunctionBased from "./components/HeaderFunctionBased";
import HeaderClassBased from "./components/HeaderClassBased";


//Function based component
function App() {
    return (
        <div className="container">
            <HeaderFunctionBased title={'Task Tracer'}/>
            {/*<HeaderClassBased/>*/}
        </div>
    );
}

export default App;
