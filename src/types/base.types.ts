export enum CallStatus {
  Busy,
  Ready,
  Error,
}

export interface CharacterGroup {
  name: string;
  characters: Character[];
}

export interface Character {
  id: string;
  roumaji: string;
  kanji: string;
  sound?: HTMLAudioElement;
}
