import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    padding: 12px;

    div.senderProfile {
        display: flex;
        align-items: center;

        img {
            width: 50px;
            border-radius: 50%;
        }

        div {
            margin-left: 8px;
        }

    }

    div.actionMenu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 135px;


        button {
            border-radius: 50%;
            width: 38px;
            height: 38px;
            background-color: #f8f8f8;
            border: none;

            display: flex;
            align-items: center;
            justify-content: center;

            :hover {
                cursor: pointer;
                filter: brightness(.95);
            }

            :active {
                filter: brightness(.85);
            }


            img {

            }
        }

    }
`

export const Select = styled.select`
    font-size: 16px;
    border: none;
    font-weight: 700;
`
export const Status = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #b9bec3;
    padding-left: 4px;
`

