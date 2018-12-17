import { CharacterGroup, BaseCharacter, RawCharacterGroup } from '../types';

const hiraganaRaw: RawCharacterGroup[] = [
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
      {
        derived: [{ kanji: 'が', roumaji: 'ga' }],
        kanji: 'か',
        roumaji: 'ka',
      },
      {
        derived: [{ kanji: 'ぎ', roumaji: 'gi' }],
        kanji: 'き',
        roumaji: 'ki',
      },
      {
        derived: [{ kanji: 'ぐ', roumaji: 'gu' }],
        kanji: 'く',
        roumaji: 'ku',
      },
      {
        derived: [{ kanji: 'げ', roumaji: 'ge' }],
        kanji: 'け',
        roumaji: 'ke',
      },
      {
        derived: [{ kanji: 'ご', roumaji: 'go' }],
        kanji: 'こ',
        roumaji: 'ko',
      },
    ],
    name: 'k',
  },
  {
    characters: [
      {
        derived: [{ kanji: 'ざ', roumaji: 'za' }],
        kanji: 'さ',
        roumaji: 'sa',
      },
      {
        derived: [{ kanji: 'じ', roumaji: 'ji' }],
        kanji: 'し',
        roumaji: 'shi',
      },
      {
        derived: [{ kanji: 'ず', roumaji: 'zu' }],
        kanji: 'す',
        roumaji: 'su',
      },
      {
        derived: [{ kanji: 'ぜ', roumaji: 'ze' }],
        kanji: 'せ',
        roumaji: 'se',
      },
      {
        derived: [{ kanji: 'ぞ', roumaji: 'zo' }],
        kanji: 'そ',
        roumaji: 'so',
      },
    ],
    name: 's',
  },
  {
    characters: [
      {
        derived: [{ kanji: 'だ', roumaji: 'da' }],
        kanji: 'た',
        roumaji: 'ta',
      },
      {
        derived: [{ kanji: 'ぢ', roumaji: 'ji' }],
        kanji: 'ち',
        roumaji: 'chi',
      },
      {
        derived: [{ kanji: 'づ', roumaji: 'du' }],
        kanji: 'つ',
        roumaji: 'tsu',
      },
      {
        derived: [{ kanji: 'で', roumaji: 'de' }],
        kanji: 'て',
        roumaji: 'te',
      },
      {
        derived: [{ kanji: 'ど', roumaji: 'do' }],
        kanji: 'と',
        roumaji: 'to',
      },
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
      {
        derived: [{ kanji: 'ば', roumaji: 'ba' }, { kanji: 'ぱ', roumaji: 'pa' }],
        kanji: 'は',
        roumaji: 'ha',
      },
      {
        derived: [{ kanji: 'び', roumaji: 'bi' }, { kanji: 'ぴ', roumaji: 'pi' }],
        kanji: 'ひ',
        roumaji: 'hi',
      },
      {
        derived: [{ kanji: 'ぶ', roumaji: 'bu' }, { kanji: 'ぷ', roumaji: 'pu' }],
        kanji: 'ふ',
        roumaji: 'fu',
      },
      {
        derived: [{ kanji: 'べ', roumaji: 'be' }, { kanji: 'ぺ', roumaji: 'pe' }],
        kanji: 'へ',
        roumaji: 'he',
      },
      {
        derived: [{ kanji: 'ぼ', roumaji: 'bo' }, { kanji: 'ぽ', roumaji: 'po' }],
        kanji: 'ほ',
        roumaji: 'ho',
      },
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
    ...addIdToCharacter(character),
    derived: character.derived && character.derived.map(derivedChar => addIdToCharacter(derivedChar)),
  })),
}));

export const hiraganaIds: string[] = ([] as string[]).concat(
  ...hiragana.map(group => group.characters.map(character => character.id)),
);

function addIdToCharacter(prototypeCharacter: { kanji: string; roumaji: string }): BaseCharacter {
  return {
    ...prototypeCharacter,
    id: `${prototypeCharacter.roumaji}-${prototypeCharacter.kanji}`,
  };
}
