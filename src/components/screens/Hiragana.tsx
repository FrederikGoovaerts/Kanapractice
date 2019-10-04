import * as React from 'react';
import { connect } from 'react-redux';
import { match, Redirect, Route, Switch } from 'react-router';

import { routes } from '../../config/constants';
import { hiragana } from '../../resources/hiragana';
import { hiraganaActions } from '../../store/actions';
import { RootState } from '../../store/reducers';
import { getSelectedHiragana } from '../../store/selectors/hiragana.selectors';
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

class HiraganaRaw extends React.Component<Props> {
  onSelect = (id: string) => {
    this.props.setSelected(
      !this.props.selectedIds.includes(id)
        ? [...this.props.selectedIds, id]
        : this.props.selectedIds.filter((el: string) => el !== id),
    );
  };

  overview = () => <CharacterList characters={hiragana} onSelect={this.onSelect} selected={this.props.selectedIds} />;
  flashCards = () => <FlashCards characters={this.props.selectedCharacters} />;
  quickReading = () => <QuickReading characters={this.props.selectedCharacters} />;

  render() {
    const { path } = this.props.match;
    return (
      <div>
        <Switch>
          <Route path={`${path}${routes.hiragana.subpathFlashCards}`} render={this.flashCards} />
          <Route path={`${path}${routes.hiragana.subpathQuickReading}`} render={this.quickReading} />
          <Route exact path={`${path}`} render={this.overview} />
          <Redirect to={path} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  selectedCharacters: getSelectedHiragana(state),
  selectedIds: state.hiragana.selected,
});

export const Hiragana = connect(
  mapStateToProps,
  { setSelected: hiraganaActions.actions.setSelected },
)(HiraganaRaw);
