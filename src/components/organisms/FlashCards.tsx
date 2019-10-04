import './FlashCards.scss';

import { Switch, Typography } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { routes } from '../../config/constants';
import { RootState } from '../../store/reducers';
import { getSelectedHiragana } from '../../store/selectors/hiragana.selectors';
import { Character } from '../../types';
import { randomArrayElement } from '../../util/ArrayUtils';
import { FlashCard } from '../molecules/FlashCard';

const defaultRecentCharactersSize = 5;

interface Props {
  characters: Character[];
}

interface State {
  currentCharacter: Character;
  recentCharacterIds: string[];
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

class FlashCardsRaw extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const firstCharacter = randomArrayElement(this.props.characters);
    this.state = { currentCharacter: firstCharacter, recentCharacterIds: [], answerShown: false, inverse: false };
  }

  getRecentCharacterSize() {
    return Math.min(defaultRecentCharactersSize, Math.floor(this.props.characters.length / 2));
  }

  nextCharacter() {
    return randomArrayElement(this.props.characters.filter(el => !this.state.recentCharacterIds.includes(el.id)));
  }

  onShowAnswer = () => {
    this.setState({ answerShown: true });
  };

  onNext = () => {
    const { currentCharacter, recentCharacterIds } = this.state;
    const newRecentCharacterIds = [currentCharacter.id, ...recentCharacterIds];
    if (newRecentCharacterIds.length > this.getRecentCharacterSize()) {
      newRecentCharacterIds.pop();
    }
    this.setState({ recentCharacterIds: newRecentCharacterIds }, () =>
      this.setState({ currentCharacter: this.nextCharacter(), answerShown: false }),
    );
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
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  characters: getSelectedHiragana(state),
});

export const FlashCards = connect(mapStateToProps)(FlashCardsRaw);
