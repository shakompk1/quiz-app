function AnswerItem(props) {
    return (
        //onAnswerClick ты посылал id а по сути тебе надо послать весь обьект который содержит ответ
        <li key={props.key} onClick={() => props.onAnswerClick(props)}>
            {props.children}
        </li>
    );
}

export default AnswerItem;
