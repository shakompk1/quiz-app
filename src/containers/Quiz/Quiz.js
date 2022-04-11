import React from "react";
import ActiveQuiz from "../ActiveQuiz";
import Finish from "../Finish/Finish";
import "./Quiz.css";

class Quiz extends React.Component {
    state = {
        quiz: [
            {
                question:
                    "В каком Сколько возможностей Doctor Strange видел для Infinity War? был выпущен первый фильм «Железный человек», начиная с кинематографической вселенной Marvel?",
                rightAnswerId: true,
                id: 1,
                answers: [
                    { text: "85 миллионов", isCorrect: false },
                    { text: "1000", isCorrect: false },
                    { text: "14 миллионов", isCorrect: true },
                    { text: "50", isCorrect: false },
                ],
            },
            {
                question:
                    "Как назывался оригинальный молот Тора? is your name?",
                rightAnswerId: true,
                id: 2,
                answers: [
                    { text: "Мьёльнир", isCorrect: true },
                    { text: "Громобой", isCorrect: false },
                    { text: "Молоток", isCorrect: false },
                    { text: "Мельдунджаз", isCorrect: false },
                ],
            },
            {
                question:
                    "How old О каком городе часто вспоминает Hawkeye & Black Widow? you",
                rightAnswerId: true,
                id: 3,
                answers: [
                    { text: "Будапешт", isCorrect: true },
                    { text: "Нью-Мексико", isCorrect: false },
                    { text: "Лос-Анджелес", isCorrect: false },
                    { text: "Лондон", isCorrect: false },
                ],
            },
            {
                question:
                    "Где найти Халка после его исчезновения в конце Age of Ultron?",
                rightAnswerId: true,
                id: 4,
                answers: [
                    { text: "Асгаард", isCorrect: false },
                    { text: "Сакаар", isCorrect: true },
                    { text: "Средиземье", isCorrect: false },
                    { text: "Ванир", isCorrect: false },
                ],
            },
            {
                question:
                    "How old Какой Avengers не имеет сцены после титров.? you",
                rightAnswerId: true,
                id: 5,
                answers: [
                    { text: "Iron Man", isCorrect: false },
                    {
                        text: "Captain America: The First Avenger",
                        isCorrect: false,
                    },
                    { text: "Avengers: Endgame", isCorrect: false },
                    { text: "Avengers: Age of Ultron", isCorrect: true },
                ],
            },
            {
                question: "How old are you",
                rightAnswerId: true,
                id: 6,
                answers: [
                    { text: "12", id: 1 },
                    { text: "15", id: 2 },
                    { text: "20", id: 3 },
                    { text: "22", id: 4 },
                ],
            },
            {
                question: "How old are you",
                rightAnswerId: true,
                id: 7,
                answers: [
                    { text: "12", id: 1 },
                    { text: "15", id: 2 },
                    { text: "20", id: 3 },
                    { text: "22", id: 4 },
                ],
            },
            {
                question: "How old are you",
                rightAnswerId: true,
                id: 8,
                answers: [
                    { text: "12", id: 1 },
                    { text: "15", id: 2 },
                    { text: "20", id: 3 },
                    { text: "22", id: 4 },
                ],
            },
            {
                question: "How old are you",
                rightAnswerId: true,
                id: 9,
                answers: [
                    { text: "12", id: 1 },
                    { text: "15", id: 2 },
                    { text: "20", id: 3 },
                    { text: "22", id: 4 },
                ],
            },
            {
                question: "How old are you",
                rightAnswerId: true,
                id: 10,
                answers: [
                    { text: "12", id: 1 },
                    { text: "15", id: 2 },
                    { text: "20", id: 3 },
                    { text: "22", id: 4 },
                ],
            },
            {
                question: "How old are you",
                rightAnswerId: true,
                id: 11,
                answers: [
                    { text: "12", id: 1 },
                    { text: "15", id: 2 },
                    { text: "20", id: 3 },
                    { text: "22", id: 4 },
                ],
            },
            {
                question: "How old are you",
                rightAnswerId: true,
                id: 12,
                answers: [
                    { text: "12", id: 1 },
                    { text: "15", id: 2 },
                    { text: "20", id: 3 },
                    { text: "22", id: 4 },
                ],
            },
        ],
        activeQuestion: 0,
        isFinished: false,
    };

    onAnswerClickHandler = (props) => {
        this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            //ты не проверяешь последний вопрос и не меняешь состояние isFinishd поэтому после последнего вопроса у тебя finish не выходит
            // isFinished:
            //     this.state.activeQuestion === this.state.quiz.length - 1,
        });
        //Ты должен собрать обьект из пропсов что приходят а ключем обьекта должны быть id вопроса то есть по сути ты должен пробрасывать id до самого низа
        console.log(this.state.activeQuestion)
    };
    render() {
        return (
            <div>
                <h1>Quiz</h1>
                {this.state.isFinished ? (
                    <Finish />
                ) : (
                    <ActiveQuiz
                        quizLength={this.state.quiz.length}
                        quiz={this.state.quiz[this.state.activeQuestion]}
                        questionIndex={this.state.activeQuestion + 1}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                )}
            </div>
        );
    }
}

export default Quiz;
