function AnswerItem(props) {
  return (
    <li onClick={() => props.onAnswerClick(props.chosenId)}>{props.children}</li>
  );
}

export default AnswerItem;
