import "./chat.css";
import Send from "../../assets/send.png"


function SendMessage() {
  return (
    <>
      <div className="campo-texto">
        <p>Digite sua mensagem</p>
        <img className="send-image" src={Send} alt="" />
      </div>
    </>
  );
}

export default SendMessage;
