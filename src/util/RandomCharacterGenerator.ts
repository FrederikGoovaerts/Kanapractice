import { Character } from '../types';
import { randomArrayElement } from './ArrayUtils';

const defaultRecentCharactersSize = 5;

export class RandomCharacterGenerator {
  private characters: Character[];
  private recentCharacterIds: string[];

  constructor(characters: Character[]) {
    this.characters = characters;
    this.recentCharacterIds = [];
  }

  nextCharacter(): Character | undefined {
    if (this.characters.length === 0) {
      return undefined;
    }
    const next = randomArrayElement(this.characters.filter(el => !this.recentCharacterIds.includes(el.id)));
    this.recentCharacterIds.unshift(next.id);
    if (this.recentCharacterIds.length > this.getMaxRecentSize()) {
      this.recentCharacterIds.pop();
    }
    return next;
  }

  private getMaxRecentSize() {
    return Math.min(defaultRecentCharactersSize, Math.floor(this.characters.length / 2));
  }
}
