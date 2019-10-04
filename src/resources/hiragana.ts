import { CharacterGroup } from '../types';

const hiraganaRaw = [
  {
    characters: [
      { kanji: 'あ', roumaji: 'a' },
      { kanji: 'い', roumaji: 'i' },
      { kanji: 'う', roumaji: 'u' },
      { kanji: 'え', roumaji: 'e' },
      { kanji: 'お', roumaji: 'o' },
    ],
    name: 'vowels',
  },
  {
    characters: [
      { kanji: 'か', roumaji: 'ka' },
      { kanji: 'き', roumaji: 'ki' },
      { kanji: 'く', roumaji: 'ku' },
      { kanji: 'け', roumaji: 'ke' },
      { kanji: 'こ', roumaji: 'ko' },
    ],
    name: 'k',
  },
  {
    characters: [
      { kanji: 'さ', roumaji: 'sa' },
      { kanji: 'し', roumaji: 'shi' },
      { kanji: 'す', roumaji: 'su' },
      { kanji: 'せ', roumaji: 'se' },
      { kanji: 'そ', roumaji: 'so' },
    ],
    name: 's',
  },
  {
    characters: [
      { kanji: 'た', roumaji: 'ta' },
      { kanji: 'ち', roumaji: 'chi' },
      { kanji: 'つ', roumaji: 'tsu' },
      { kanji: 'て', roumaji: 'te' },
      { kanji: 'と', roumaji: 'to' },
    ],
    name: 't',
  },
  {
    characters: [
      { kanji: 'な', roumaji: 'na' },
      { kanji: 'に', roumaji: 'ni' },
      { kanji: 'ぬ', roumaji: 'nu' },
      { kanji: 'ね', roumaji: 'ne' },
      { kanji: 'の', roumaji: 'no' },
    ],
    name: 'n',
  },
  {
    characters: [
      { kanji: 'は', roumaji: 'ha' },
      { kanji: 'ひ', roumaji: 'hi' },
      { kanji: 'ふ', roumaji: 'fu' },
      { kanji: 'へ', roumaji: 'he' },
      { kanji: 'ほ', roumaji: 'ho' },
    ],
    name: 'h',
  },
  {
    characters: [
      { kanji: 'ま', roumaji: 'ma' },
      { kanji: 'み', roumaji: 'mi' },
      { kanji: 'む', roumaji: 'mu' },
      { kanji: 'め', roumaji: 'me' },
      { kanji: 'も', roumaji: 'mo' },
    ],
    name: 'm',
  },
  {
    characters: [{ kanji: 'や', roumaji: 'ya' }, { kanji: 'ゆ', roumaji: 'yu' }, { kanji: 'よ', roumaji: 'yo' }],
    name: 'y',
  },
  {
    characters: [
      { kanji: 'ら', roumaji: 'ra' },
      { kanji: 'り', roumaji: 'ri' },
      { kanji: 'る', roumaji: 'ru' },
      { kanji: 'れ', roumaji: 're' },
      { kanji: 'ろ', roumaji: 'ro' },
    ],
    name: 'r',
  },
  {
    characters: [{ kanji: 'わ', roumaji: 'wa' }, { kanji: 'を', roumaji: '(w)o' }],
    name: 'w',
  },
  {
    characters: [{ kanji: 'ん', roumaji: 'n' }],
    name: 'particle-n',
  },
];

export const hiragana: CharacterGroup[] = hiraganaRaw.map(group => ({
  ...group,
  characters: group.characters.map(character => ({
    ...character,
    id: `${group.name}-${character.roumaji}-${character.kanji}`,
  })),
}));

export const hiraganaIds: string[] = ([] as string[]).concat(
  ...hiragana.map(group => group.characters.map(character => character.id)),
);
