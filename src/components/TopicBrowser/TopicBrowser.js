import React from "react"
import EvenAndOdd from "../Topics/EvenAndOdd"
import FilterObject from "../Topics/FilterObject"
import FilterString from "../Topics/FilterString"
import Palindrome from "../Topics/Palindrome"
import Sum from "../Topics/Sum"

export default function TopicBrowser() {
    console.log("Topic Browser")
    return (
        <div>
            <p>Hello World</p>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
        </div>
    )
}