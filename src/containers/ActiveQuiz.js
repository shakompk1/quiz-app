import AnswerLists from "../AnswerList/AnswerList";

function ActiveQuiz(props) {
    return (
        <div className="QuizWrapper">
            <div className="QuizQuestion">
                <p>
                    {props.questionIndex}.{props.quiz.question}
                </p>
                <p>
                    {props.questionIndex} / {props.quizLength}
                </p>
            </div>
            <AnswerLists
                answers={props.quiz.answers}
                answersId={props.quiz.id}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    );
}

export default ActiveQuiz;
