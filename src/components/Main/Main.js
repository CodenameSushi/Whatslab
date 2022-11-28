import { MainContainer, ChatBalloon } from "./Main.styled";
import TickDoubleBlue from "../../assets/tick-double-blue.svg"
import TickDoubleWhite from "../../assets/tick-double-white.svg"

function Main(props){

    const {messages} = props;

    return (
        <MainContainer>
            {messages.map((message) =>(
                <div>
                    <ChatBalloon sender={message.sender}>
                        {message.sender !== "Me" && <h1>{message.sender}</h1>}
                        
                        <p>{message.content}</p>
                        <div>
                        <span>{message.createdAt}</span>
                        {
                            message.sender === "Me"
                            ? <img src={TickDoubleWhite} alt='icon' />
                            : <img src={TickDoubleBlue} alt='icon' />
                        }
                        
                        </div>
                    </ChatBalloon>
                </div>
            ))}
        </MainContainer> 
    )
}

export default Main;