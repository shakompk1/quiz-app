import AnswerItem from "./AnswerItem";

function AnswerLists(props) {
  return (
    <ul>
      {props.answers.map((answer) => {
        return (
          <AnswerItem
            key={answer.id}
            chosenId={answer.isCorrect}
            onAnswerClick={props.onAnswerClick}
          >
            {answer.text}
          </AnswerItem>
        );
      })}
    </ul>
  );
}

export default AnswerLists;
