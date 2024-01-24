import React from 'react'
import './result.css'

export default class Result extends React.Component{
    render(){
        return(
            <>
            <h1 >Result</h1>
            <div className="main">
                <h3 className='text'>You need more practice!</h3>
                <h1 className='Score'> Your score is 20%</h1>
                <div className="info">
                    <span>Total number of questions</span> <span>15</span>
                </div>
                <div className="info">
                    <span>Number of attempted questions</span> <span>9</span>
                </div>
                <div className="info">
                    <span>Number of correct answers</span> <span>3</span>
                </div>
                <div className="info">
                    <span>Number of wrong answers</span> <span>6</span>
                </div>
            </div>

            <div className="Buttons">
                <button id='play'>Play Again</button>
                <button id='back'>Back to Home</button>
            </div>
            </>
        )
    }
}