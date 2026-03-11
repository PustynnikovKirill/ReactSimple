import './App.css'



function App() {

    return (
        <>
            <div>
                <Rating/>
            </div>
        </>
    )
}

function Rating () {

    return (
        <div>
            <Star/>
        </div>
    )
}

function Star () {
    return (
        <>
            <div> star </div>
            <div> star </div>
            <div> star </div>
            <div> star </div>
    </>
    )
}

export default App;
