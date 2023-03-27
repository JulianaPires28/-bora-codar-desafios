import "./chat.css";

function Chat(props) {
  const person = props.name;
  if (person === "Você") {
    return (
      <>
        <div className="mensagens">
          <p className="you">{props.name} - {props.hour} </p>
          <div className="message-2">{props.message1}</div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="mensagens">
        <p className="person">{props.name}  - {props.hour}</p>
        <div className="message-1">{props.message1}</div>
      </div>
    </>
  );
}

export default Chat;
