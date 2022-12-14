import styled from "styled-components";
import { Encounter } from "../../../types/gameTypes";
import { socket } from "../socket/socket";
import {
  BlueLightButton,
  BlueLightText,
  CharacterContainer,
  Description,
  Kind,
  Name,
  NameKind,
  Secret,
} from "../styled";

const EncounterCard = ({
  encounter,
  secretVisible,
}: {
  encounter: Encounter;
  secretVisible: boolean;
}) => {
  const game: boolean =
    localStorage.getItem("token") && localStorage.getItem("player")
      ? true
      : false;

  const isGuide: boolean = game
    ? localStorage.getItem("token") === localStorage.getItem("player")
    : false;

  return (
    <EncounterContainer>
      <NameKind>
        <Name style={{ fontSize: "1.7vw" }}>{encounter.name}</Name>
        <Kind>{encounter.kind}</Kind>
      </NameKind>
      <EncounterImage src={encounter.imgUrl} />
      <Description>{encounter.description}</Description>
      {isGuide ? (
        <Secret
          title="Reveal Secret to All"
          onClick={() => {
            socket.emit(
              "set-secret-visible",
              localStorage.getItem("token"),
              "all",
              true
            );
          }}
        >
          <BlueLightButton>✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧</BlueLightButton>
        </Secret>
      ) : (
        <BlueLightText style={{ fontSize: "2vw" }}>✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧</BlueLightText>
      )}
      {(secretVisible || isGuide) && <Kind>{encounter.secret}</Kind>}
    </EncounterContainer>
  );
};
export { EncounterCard };

const EncounterImage = styled.img`
  max-height: 17vw;
  max-width: 21vw;
`;
const EncounterContainer = styled(CharacterContainer)`
  position: relative;
  height: 28vw;
  width: 23vw;
  border-radius: 0;
  padding: 1vw;
  z-index: 1;
  top: 1vh;
`;
