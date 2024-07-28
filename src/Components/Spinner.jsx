import React from 'react'
import "../App.css"

function Spinner() {
  return (
    <div className="lds-grid flex flex-col items-center mt-[100px]">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Spinner