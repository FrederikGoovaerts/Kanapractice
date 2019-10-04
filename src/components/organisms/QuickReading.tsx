import './QuickReading.scss';

import { Button, TextField, Typography } from '@material-ui/core';
import * as moment from 'moment';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../config/constants';
import { Character } from '../../types';
import { alphanumericEquals } from '../../util/CharacterUtils';
import { RandomCharacterGenerator } from '../../util/RandomCharacterGenerator';

interface Props {
  characters: Character[];
}

interface State {
  character: Character | undefined;
  done: number;
  averageTime: number | undefined;
  input: string;
}

const noCharactersPlaceHolder = (
  <div className="quickReading-noCharacters">
    <h2>
      No characters selected. Please choose the characters to practice in the{' '}
      <Link to={routes.hiragana.path}>overview</Link>.
    </h2>
  </div>
);

export class QuickReading extends React.Component<Props, State> {
  private randomCharacterGenerator: RandomCharacterGenerator;
  private startMoment: moment.Moment;

  constructor(props: Props) {
    super(props);

    this.randomCharacterGenerator = new RandomCharacterGenerator(props.characters);
    this.startMoment = moment();

    this.state = {
      averageTime: undefined,
      character: this.randomCharacterGenerator.nextCharacter(),
      done: 0,
      input: '',
    };
  }

  onCorrect = () => {
    const { done, averageTime } = this.state;
    const thisTime: number = moment().diff(this.startMoment);
    const newAverage: number = averageTime !== undefined ? (thisTime + averageTime * done) / (done + 1) : thisTime;
    this.setState(
      {
        averageTime: newAverage,
        character: this.randomCharacterGenerator.nextCharacter(),
        done: done + 1,
        input: '',
      },
      () => {
        this.startMoment = moment();
      },
    );
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { character } = this.state;
    const input = event.target.value;
    if (character && alphanumericEquals(input, character.roumaji)) {
      this.onCorrect();
    } else {
      this.setState({ input });
    }
  };

  render() {
    const { character, averageTime, done, input } = this.state;
    if (this.props.characters.length === 0) {
      return noCharactersPlaceHolder;
    }
    return (
      character && (
        <div className="quickReading-container">
          <Typography variant="h1">{character.kanji}</Typography>
          <TextField onChange={this.onChange} value={input} label="Roumaji version" />
          <div className="quickReading-resultsOuter">
            {averageTime && (
              <div className="quickReading-resultsInner">
                <Typography variant="body1">{`Characters done: ${done}`}</Typography>
                <Typography variant="body1">{`Average time per character: ${Math.round(averageTime)}ms`}</Typography>
              </div>
            )}
          </div>
        </div>
      )
    );
  }
}
