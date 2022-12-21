export type GameState = "setup" | "lobby" | "running";

type Callback = (response: Reply) => void;
type Reply = {
  success: boolean;
  message: string;
};

type Game = {
  id: string;
  name: string;
  guide: Guide | null;
  travellers: Traveller[];
  places: Place[];
  travellersPoints: TravellerPoints[];
  state: GameState;
};

type TravellerPoints = {
  plyerId: string;
  points: number;
};

type Lobby = {
  gameId: string;
  gameName: string;
  guideName: string;
  travellersNames: TravellerIdName[];
};
type TravellerIdName = {
  id: string;
  name: string;
};

type GameLocation = {
  gameId: string;
  gameName: string;
  guide: Guide | null;
  travellers: Traveller[];
  place: Place | null;
};

type Guide = {
  id: string;
  name: string;
  kind: string;
  description: string;
  imgUrl: string;
};

type Traveller = {
  id: string;
  name: string;
  kind: string;
  ability: string;
  abilityDescription: string;
  imgUrl: string;
};

type Place = {
  id: string;
  name: string;
  imgUrl: string;
  encounter: Encounter;
};

type Encounter = {
  name: string;
  kind: string;
  imgUrl: string;
  description: string;
  secret: string;
};

// SOCKET.IO TYPES
interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: BufferSource) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  getLobby: (lobby: Lobby, start: boolean) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}
