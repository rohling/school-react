import React from "react"

export default function MyButton(props:{children: React.ReactNode, bgColor:string}){
    
    // const person = {name:"adair", age:"53"}
    
    return (
        <button className={`${props.bgColor}`}>{props.children}</button>
    )
}