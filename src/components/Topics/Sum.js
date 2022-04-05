import React, {useState} from "react"

export default function Sum() {
    const [numberOne, setNumberOne] = useState(0)
    const [numberTwo, setNumberTwo] = useState(0)
    const [sum, setSum] = useState(null)

    const addTwoNums = () => {
        setSum(+numberOne + +numberTwo)
    }

    return (
        <div className="puzzleBox sumPB">
            <h4 value="Sum"></h4>
            <input className="inputLine" onChange={e => setNumberOne(e.target.value)}></input>
            <input className="inputLine" onChange={e => setNumberTwo(e.target.value)}></input>
            <button className="confirmationButton" onClick={addTwoNums}></button>
            <span className="resultsBox" value="Sum">{sum}</span>
        </div>
    )
}