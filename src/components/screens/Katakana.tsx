import * as React from 'react';
import { connect } from 'react-redux';
import { match, Redirect, Route, Switch } from 'react-router';

import { routes } from '../../config/constants';
import { katakana } from '../../resources/katakana';
import { katakanaActions } from '../../store/actions';
import { RootState } from '../../store/reducers';
import { getSelectedAndDerivedKatakana } from '../../store/selectors/katakana.selectors';
import { Character } from '../../types';
import { CharacterList } from '../organisms/CharacterList';
import { FlashCards } from '../organisms/FlashCards';
import { QuickReading } from '../organisms/QuickReading';

interface Props {
  selectedIds: string[];
  selectedCharacters: Character[];
  match: match<any>;
  setSelected: (p: string[]) => void;
}

class KatakanaRaw extends React.Component<Props> {
  onSelect = (id: string) => {
    this.props.setSelected(
      !this.props.selectedIds.includes(id)
        ? [...this.props.selectedIds, id]
        : this.props.selectedIds.filter((el: string) => el !== id),
    );
  };

  overview = () => <CharacterList characters={katakana} onSelect={this.onSelect} selected={this.props.selectedIds} />;
  flashCards = () => <FlashCards characters={this.props.selectedCharacters} />;
  quickReading = () => <QuickReading characters={this.props.selectedCharacters} />;

  render() {
    const { path } = this.props.match;
    return (
      <div>
        <Switch>
          <Route path={`${path}${routes.katakana.subpathFlashCards}`} render={this.flashCards} />
          <Route path={`${path}${routes.katakana.subpathQuickReading}`} render={this.quickReading} />
          <Route exact path={`${path}`} render={this.overview} />
          <Redirect to={path} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  selectedCharacters: getSelectedAndDerivedKatakana(state),
  selectedIds: state.katakana.selected,
});

export const Katakana = connect(
  mapStateToProps,
  { setSelected: katakanaActions.actions.setSelected },
)(KatakanaRaw);
