import "./App.css";
import Chat from "./components/chat/chat";
import NavBar from "./components/NavBar/NavBar";
import SendMessage from './components/chat/send-message';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Chat
        name="Cecilia "
        hour="11:30"
        message1="Tive uma ideia incrível para um projeto! 😍"
      />
      <Chat
        name="Você"
        hour="11:32"
        message1="Sério? Me conta mais."
      />
      <Chat
        name="Cecilia"
        hour="11:34"
        message1="E se a gente fizesse um chat moderno e responsivo em apenas uma semana?"
      />
       <Chat
        name="Você"
        hour="11:36"
        message1="#boraCodar! 🚀"
      />
      <SendMessage/>
    </div>
  );
}

export default App;
