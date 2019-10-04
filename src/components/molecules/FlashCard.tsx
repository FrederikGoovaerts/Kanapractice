import './FlashCard.scss';

import { Button, Card, Typography } from '@material-ui/core';
import * as React from 'react';

import { Character } from '../../types';

interface Props {
  character: Character;
  onShowAnswer: () => void;
  onNext: () => void;
  answerShown: boolean;
  inverse: boolean;
}

const buttonAction = (shown: boolean, next: () => void, show: () => void) => () => (shown ? next() : show());

export const FlashCard = ({ character, onShowAnswer, onNext, answerShown, inverse }: Props) => {
  const roumajiElement = <div className="flashCard-roumaji">{character.roumaji}</div>;
  const kanjiElement = <div className="flashCard-kanji">{character.kanji}</div>;
  const question = inverse ? roumajiElement : kanjiElement;
  const answer = inverse ? kanjiElement : roumajiElement;
  return (
    <Card className="flashCard-card">
      <div className="flashCard-contents">
        <Typography variant="h1">
          <div>{question}</div>
        </Typography>
        {answerShown && (
          <Typography variant="h1">
            <div className="flashCard-answer">{answer}</div>
          </Typography>
        )}
        <Button onClick={buttonAction(answerShown, onNext, onShowAnswer)}>
          {answerShown ? 'Next' : 'Show answer'}
        </Button>
      </div>
    </Card>
  );
};
