import React, {useState} from "react"

export default function FilterObject() {
    const [unfilteredArray, setUnfilteredArray] = useState([{ "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" }])
    const [userInput, setUserInput] = useState('')
    const [filteredArray, setFilteredArray] = useState([])

    const filter = () => {
        setFilteredArray(unfilteredArray.filter(obj => obj[userInput]))
    }

    return (
        <div className="puzzleBox filterObjectPB">
            <h4 value="Filter Object"></h4>
            <span className="puzzleText" >{JSON.stringify(unfilteredArray)}</span>
            <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={filter}></button>
            <span className="resultsBox filterObjectRB" >{JSON.stringify(filteredArray)}</span>
        </div>
    )
}