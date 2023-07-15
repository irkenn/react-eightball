import React, {useState} from "react";



function EightBall({answers}){
    const getRandom = () => Math.floor(Math.random()* answers.length);
    
    const [answer, setAnswer] = useState(getRandom());

    const getAnswer = () => {
        setAnswer(answers[getRandom()])
    }
    const restartGame = () =>{
        setAnswer({msg:'Think of a question', color:'black'})
    }
    return (
        <div className="group-1">
            <div className='circle' style={{backgroundColor: answer.color}}  onClick={getAnswer}>
                <div className="text-content black">
                    {answer.msg || "Think of a question" }
                </div>
            </div>
            <button onClick={restartGame} >Restart the game </button>
        </div>

    );
};

export default EightBall;