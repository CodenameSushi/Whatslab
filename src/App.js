import Header from "./components/Header/Header";
import { useState } from "react";
import { AppContainer } from "./GlobalStyle";

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

  return (
    <AppContainer>
        <Header 
          senders={senders}
          currSender={currSender} 
          onChangeSender={onChangeSender}/>
          <h1>{currSender}</h1>
    </AppContainer>
  );
}

export default App;
