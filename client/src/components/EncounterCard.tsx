import styled from "styled-components";
import { Encounter } from "../../../types/gameTypes";
import { socket } from "../socket/socket";

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
      <h1>{encounter.name}</h1>
      <p>{encounter.kind}</p>
      <EncounterImage src={encounter.imgUrl} />
      <p>{encounter.description}</p>
      {secretVisible || isGuide ? (
        <p>Secret: {encounter.secret}</p>
      ) : (
        <p>SPARKLEEESSSS!</p>
      )}
      {isGuide && (
        <button
          onClick={() => {
            socket.emit(
              "set-secret-visible",
              localStorage.getItem("token"),
              "all",
              true
            );
          }}
        >
          Reveal secret to all!!!
        </button>
      )}
    </EncounterContainer>
  );
};
export { EncounterCard };

const EncounterImage = styled.img`
  max-width: 50%;
`;

const EncounterContainer = styled.div`
  display: flex;
  color: black;
  flex-flow: column;
  align-self: center;
  border: black solid;
  height: 30vw;
  width: 30%;
  background: rgba(255, 255, 255, 0.5);
`;
