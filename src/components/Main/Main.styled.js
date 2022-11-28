import styled from "styled-components";

export const MainContainer = styled.div`
    flex-grow: 1;
    background-color: #f1f4f7;
    padding:16px;


`

export const ChatBalloon = styled.div`
    min-width: 80px;
    max-width: 310px;
    border-radius:10px;
    padding: 12px;
    margin-bottom: 16px;
    

    color: ${(props) => props.sender === "Me" ? "white" : "black"};

    margin-left: ${(props) => props.sender === "Me" ? "auto" : 0};

    background-color: ${(props) => props.sender === "Me" ? "#61c554" : "#e8ecef"};

    h1{
        font-size: 16px;
    }

    p{
        font-weight: 400;
        font-size: 14px;
        margin-top: 4px;
        overflow-wrap: break-word;
    }

    div{
        text-align: right;
        span{
            ${(props) => props.sender === "Me" ? "white" : "#727272"};

            font-weight: 400;
            font-size: 12px;
        }

        img{
        margin-left: 4px;
        }
    }
`

