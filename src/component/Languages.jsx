import React from 'react'

const Languages = () => {
    let lang = ["java","javaScript","Kotlin","Python","C"]; 
  return (
    <div>
        <h1>Best Programming Language</h1>
        <ul>
            {lang.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Languages