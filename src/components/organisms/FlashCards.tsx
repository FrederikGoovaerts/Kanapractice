import './FlashCards.scss';

import { Switch, Typography } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../config/constants';
import { Character } from '../../types';
import { RandomCharacterGenerator } from '../../util/RandomCharacterGenerator';
import { FlashCard } from '../molecules/FlashCard';

interface Props {
  characters: Character[];
}

interface State {
  currentCharacter: Character | undefined;
  answerShown: boolean;
  inverse: boolean;
}

const noCharactersPlaceHolder = (
  <div className="flashCards-noCharacters">
    <Typography variant="h5">
      No characters selected. Please choose the characters to practice in the{' '}
      <Link to={routes.hiragana.path}>overview</Link>.
    </Typography>
  </div>
);

export class FlashCards extends React.Component<Props, State> {
  private randomCharacterGenerator: RandomCharacterGenerator;

  constructor(props: Props) {
    super(props);
    this.randomCharacterGenerator = new RandomCharacterGenerator(props.characters);
    this.state = {
      answerShown: false,
      currentCharacter: this.randomCharacterGenerator.nextCharacter(),
      inverse: false,
    };
  }

  onShowAnswer = () => {
    this.setState({ answerShown: true });
  };

  onNext = () => {
    this.setState({ currentCharacter: this.randomCharacterGenerator.nextCharacter(), answerShown: false });
  };

  toggleInverse = () => {
    this.setState({ inverse: !this.state.inverse });
  };

  render() {
    const { answerShown, inverse, currentCharacter } = this.state;
    if (this.props.characters.length === 0) {
      return noCharactersPlaceHolder;
    }
    return (
      currentCharacter && (
        <div>
          <div className="flashCards-toggleContainer">
            <Switch checked={!this.state.inverse} onChange={this.toggleInverse} />
            <Typography>To roumaji</Typography>
          </div>
          <div className="flashCards-card">
            <FlashCard
              answerShown={answerShown}
              character={currentCharacter}
              inverse={inverse}
              onNext={this.onNext}
              onShowAnswer={this.onShowAnswer}
            />
          </div>
        </div>
      )
    );
  }
}
