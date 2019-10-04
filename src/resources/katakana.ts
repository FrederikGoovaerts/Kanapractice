import { BaseCharacter, CharacterGroup, RawCharacterGroup } from '../types';

const katakanaRaw: RawCharacterGroup[] = [
  {
    characters: [
      { kanji: 'ア', roumaji: 'a' },
      { kanji: 'イ', roumaji: 'i' },
      { kanji: 'ウ', roumaji: 'u' },
      { kanji: 'エ', roumaji: 'e' },
      { kanji: 'オ', roumaji: 'o' },
    ],
    name: 'vowels',
  },
  {
    characters: [
      {
        derived: [{ kanji: 'ガ', roumaji: 'ga' }],
        kanji: 'カ',
        roumaji: 'ka',
      },
      {
        derived: [{ kanji: 'ギ', roumaji: 'gi' }],
        kanji: 'キ',
        roumaji: 'ki',
      },
      {
        derived: [{ kanji: 'グ', roumaji: 'gu' }],
        kanji: 'ク',
        roumaji: 'ku',
      },
      {
        derived: [{ kanji: 'ゲ', roumaji: 'ge' }],
        kanji: 'ケ',
        roumaji: 'ke',
      },
      {
        derived: [{ kanji: 'ゴ', roumaji: 'go' }],
        kanji: 'コ',
        roumaji: 'ko',
      },
    ],
    name: 'k',
  },
  {
    characters: [
      {
        derived: [{ kanji: 'ザ', roumaji: 'za' }],
        kanji: 'サ',
        roumaji: 'sa',
      },
      {
        derived: [{ kanji: 'ジ', roumaji: 'ji' }],
        kanji: 'シ',
        roumaji: 'shi',
      },
      {
        derived: [{ kanji: 'ズ', roumaji: 'zu' }],
        kanji: 'ス',
        roumaji: 'su',
      },
      {
        derived: [{ kanji: 'ゼ', roumaji: 'ze' }],
        kanji: 'セ',
        roumaji: 'se',
      },
      {
        derived: [{ kanji: 'ゾ', roumaji: 'zo' }],
        kanji: 'ソ',
        roumaji: 'so',
      },
    ],
    name: 's',
  },
  {
    characters: [
      {
        derived: [{ kanji: 'ダ', roumaji: 'da' }],
        kanji: 'タ',
        roumaji: 'ta',
      },
      {
        derived: [{ kanji: 'ヂ', roumaji: 'di' }],
        kanji: 'チ',
        roumaji: 'chi',
      },
      {
        derived: [{ kanji: 'ヅ', roumaji: 'du' }],
        kanji: 'ツ',
        roumaji: 'tsu',
      },
      {
        derived: [{ kanji: 'デ', roumaji: 'de' }],
        kanji: 'テ',
        roumaji: 'te',
      },
      {
        derived: [{ kanji: 'ド', roumaji: 'do' }],
        kanji: 'ト',
        roumaji: 'to',
      },
    ],
    name: 't',
  },
  {
    characters: [
      { kanji: 'ナ', roumaji: 'na' },
      { kanji: 'ニ', roumaji: 'ni' },
      { kanji: 'ヌ', roumaji: 'nu' },
      { kanji: 'ネ', roumaji: 'ne' },
      { kanji: 'ノ', roumaji: 'no' },
    ],
    name: 'n',
  },
  {
    characters: [
      {
        derived: [{ kanji: 'バ', roumaji: 'ba' }, { kanji: 'パ', roumaji: 'pa' }],
        kanji: 'ハ',
        roumaji: 'ha',
      },
      {
        derived: [{ kanji: 'ビ', roumaji: 'bi' }, { kanji: 'ピ', roumaji: 'pi' }],
        kanji: 'ヒ',
        roumaji: 'hi',
      },
      {
        derived: [{ kanji: 'ブ', roumaji: 'bu' }, { kanji: 'プ', roumaji: 'pu' }],
        kanji: 'フ',
        roumaji: 'fu',
      },
      {
        derived: [{ kanji: 'ベ', roumaji: 'be' }, { kanji: 'ペ', roumaji: 'pe' }],
        kanji: 'ヘ',
        roumaji: 'he',
      },
      {
        derived: [{ kanji: 'ボ', roumaji: 'bo' }, { kanji: 'ポ', roumaji: 'po' }],
        kanji: 'ホ',
        roumaji: 'ho',
      },
    ],
    name: 'h',
  },
  {
    characters: [
      { kanji: 'マ', roumaji: 'ma' },
      { kanji: 'ミ', roumaji: 'mi' },
      { kanji: 'ム', roumaji: 'mu' },
      { kanji: 'メ', roumaji: 'me' },
      { kanji: 'モ', roumaji: 'mo' },
    ],
    name: 'm',
  },
  {
    characters: [{ kanji: 'ヤ', roumaji: 'ya' }, { kanji: 'ユ', roumaji: 'yu' }, { kanji: 'ヨ', roumaji: 'yo' }],
    name: 'y',
  },
  {
    characters: [
      { kanji: 'ラ', roumaji: 'ra' },
      { kanji: 'リ', roumaji: 'ri' },
      { kanji: 'ル', roumaji: 'ru' },
      { kanji: 'レ', roumaji: 're' },
      { kanji: 'ロ', roumaji: 'ro' },
    ],
    name: 'r',
  },
  {
    characters: [{ kanji: 'ワ', roumaji: 'wa' }, { kanji: 'ヲ', roumaji: '(w)o' }],
    name: 'w',
  },
  {
    characters: [{ kanji: 'ン', roumaji: 'n' }],
    name: 'particle-n',
  },
];

export const katakana: CharacterGroup[] = katakanaRaw.map(group => ({
  ...group,
  characters: group.characters.map(character => ({
    ...addIdToCharacter(character),
    derived: character.derived && character.derived.map(derivedChar => addIdToCharacter(derivedChar)),
  })),
}));

export const baseKatakanaIds: string[] = ([] as string[]).concat(
  ...katakana.map(group => group.characters.map(character => character.id)),
);

function addIdToCharacter(prototypeCharacter: { kanji: string; roumaji: string }): BaseCharacter {
  return {
    ...prototypeCharacter,
    id: `${prototypeCharacter.roumaji}-${prototypeCharacter.kanji}`,
  };
}
