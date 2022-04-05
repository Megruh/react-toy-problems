import React, {useState} from "react"

export default function FilterString() {
    const [unfilteredArray, setUnfilteredArray] = useState(['Meg', 'Scott', 'Leo', 'Rudy', 'Hailee', 'Ashley', 'Andrew', 'Madi'])
    const [userInput, setUserInput] = useState('')
    const [filteredArray, setFilteredArray] = useState([])

    const filter = () => {
        setFilteredArray(unfilteredArray.filter(str => str.includes(userInput)))
    }

    return (
        <div className="puzzleBox filterStringPB">
            <h4 value="Filter String"></h4>
            <span className="puzzleText" >{unfilteredArray}</span>
            <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={filter}></button>
            <span className="resultsBox filterStringRB" >{filteredArray}</span>
        </div>
    )
}