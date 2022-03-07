import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answersList, handleEdit } = props;

  return (
    <ul>
      {answersList?.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} handleEdit={handleEdit} key={i} />
      ))}
    </ul>
  );
}
