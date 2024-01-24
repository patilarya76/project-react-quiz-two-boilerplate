// Quiz.js
// Quiz.js
import React from 'react';
import './quiz.css';
import questions from '../resources/quizQuestion';

class Quiz extends React.Component {
    constructor() {
        super();
        this.state = {
            index: 0,
        };
    }

    handlePrev = () => {
        const { index } = this.state;
        const lastIndex = questions.length - 1;
        const newIndex = index === 0 ? lastIndex : index - 1;

        this.setState({ index: newIndex });
    };

    handleNext = () => {
        const { index } = this.state;
        const lastIndex = questions.length - 1;
        const newIndex = index === lastIndex ? 0 : index + 1;

        this.setState({ index: newIndex });
    };

    handleQuit = () => {
        window.confirm('do you want to quit?');
        // Add logic for quitting if confirmed
    };

    render() {
        const { index } = this.state;
        const current = questions[index];

        return (
            <>
                <div className="Main">
                    <h1 className='question'>Question</h1>
                    <div className="Totalquestions">{index + 1} of {questions.length}</div>
                    <p>{current.question}</p>

                    <div className="options">
                        <button className='option'>{current.optionA}</button>
                        <button className='option'>{current.optionB}</button>
                        <button className='option'>{current.optionC}</button>
                        <button className='option'>{current.optionD}</button>
                    </div>
                    <div className="buttons">
                        <button id='previous' className='button' onClick={this.handlePrev}>
                            Prev
                        </button>
                        <button id='next' className='button' onClick={this.handleNext}>
                            Next
                        </button>
                        <button id='quit' className='button' onClick={this.handleQuit}>
                            Quit
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default Quiz;