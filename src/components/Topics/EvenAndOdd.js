import React, {useState} from "react"

function EvenAndOdd() {
    // console.log("Even and Odd")
    const [evenArray, setEvenArray] = useState([])
    const [oddArray, setOddArray] = useState([])
    const [userInput, setUserInput] = useState('')

    const splitArrays = () => {
        let evenArr = []
        let oddArr = []
        userInput.split(',')
        .forEach(elem => {
            console.log("in forEach")
            if (elem % 2 === 0) {
                evenArr.push(+elem)
            } else {
                oddArr.push(+elem)
            }
        })
        setEvenArray(evenArr)
        setOddArray(oddArr)
    }

    return (
        <div className="puzzlebox evenAndOddPB">
            <h4 value="Evens and Odds"></h4>
            <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={splitArrays}></button>
            <span className="resultsBox" >Even Array: {evenArray}</span>
            <span className="resultsBox" >Odd Array: {oddArray}</span>
        </div>
    )
}

export default EvenAndOdd