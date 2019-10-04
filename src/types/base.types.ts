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
  derived?: BaseCharacter[];
}

export interface BaseCharacter {
  id: string;
  roumaji: string;
  kanji: string;
}

export interface RawCharacterGroup {
  name: string;
  characters: RawCharacter[];
}

export interface RawCharacter {
  roumaji: string;
  kanji: string;
  derived?: RawBaseCharacter[];
}

export interface RawBaseCharacter {
  roumaji: string;
  kanji: string;
}
