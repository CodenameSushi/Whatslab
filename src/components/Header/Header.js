import moreOptions from "../../assets/group.svg";
import phoneCall from "../../assets/call.svg";
import videoIcon from "../../assets/video.svg";
import { HeaderContainer, Select, Status } from "./Header.styled";

function Header(props) {
  const { senders, currSender, onChangeSender } = props;

  return (
    <HeaderContainer>
      <div className="senderProfile">
        <img src={`https://picsum.photos/seed/${currSender}/200/200`} alt="" />
        <div>
          <Select onChange={onChangeSender}> 
            {senders.map((sender) => (
              <option key={sender} value={sender}>
                {sender}
              </option>
            ))}
          </Select>
          <Status>Online</Status>
        </div>
      </div>

      <div className="actionMenu">
        <button >
        <img src={videoIcon} alt="video-icon" />
        </button>
        <button>
        <img src={phoneCall} alt="phone-icon" />
        </button>
        <button>
        <img src={moreOptions} alt="more-options" />
        </button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
