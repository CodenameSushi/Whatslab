import Header from "./components/Header/Header";
import { useState } from "react";
import { AppContainer } from "./GlobalStyle";
import Main from "./components/Main/Main";
import {initialMessages} from "./assets/initialMessages"

function App() {
  const [currSender, setCurrSender] = useState("Me");
  const [senders, setSenders] = useState([
    "Me",
    "Fulano",
    "Beltrana",
    "Ciclana",
    "Astrodev",
  ]);

  const onChangeSender = (e) => {
    setCurrSender(e.target.value)
  }

  const [messages, setMessages] = useState(initialMessages)

  console.log(messages)

  return (
    <AppContainer>
        <Header 
          senders={senders}
          currSender={currSender} 
          onChangeSender={onChangeSender}/>

          <Main
          messages={messages} 
          />
          

    </AppContainer>
  );
}

export default App;
