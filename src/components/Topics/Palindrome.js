import React, {useState} from "react"

export default function Palindrome() {
    const [userInput, setUserInput] = useState('')
    const [palindrome, setPalindrome] = useState('')

    const isPalindrome = () => {
        let j = userInput.length - 1
        for (let i = 0; i <= userInput.length / 2; i++){
            console.log(userInput[i], userInput[j])
                if (userInput[i].toLowerCase() !== userInput[j].toLowerCase()){
                    setPalindrome(false)
                    return
                } 
                j--
            }
        setPalindrome(true)
    }

    return (
        <div className="puzzleBox filterStringPB">
            <h4 value="Palindrome"></h4>
            <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={isPalindrome}></button>
            <span className="resultsBox">{palindrome ? "true": "false"}</span>
        </div>
    )
}