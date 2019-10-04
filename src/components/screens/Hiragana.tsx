import * as React from 'react';
import { connect } from 'react-redux';
import { match, Route } from 'react-router';

import { routes } from '../../config/constants';
import { hiragana } from '../../resources/hiragana';
import { hiraganaActions } from '../../store/actions';
import { RootState } from '../../store/reducers';
import { CharacterList } from '../organisms/CharacterList';
import { FlashCards } from '../organisms/FlashCards';

interface Props {
  selected: string[];
  match: match<any>;
  setSelected: (p: string[]) => void;
}

class HiraganaRaw extends React.Component<Props> {
  onSelect = (id: string) => {
    this.props.setSelected(
      !this.props.selected.includes(id)
        ? [...this.props.selected, id]
        : this.props.selected.filter((el: string) => el !== id),
    );
  };

  overview = () => <CharacterList characters={hiragana} onSelect={this.onSelect} selected={this.props.selected} />;
  flashCards = () => <FlashCards />;

  render() {
    const { path } = this.props.match;
    return (
      <div>
        <Route path={`${path}${routes.hiragana.subpathFlashCards}`} render={this.flashCards} />
        <Route exact path={`${path}`} render={this.overview} />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  selected: state.hiragana.selected,
});

export const Hiragana = connect(
  mapStateToProps,
  { setSelected: hiraganaActions.actions.setSelected },
)(HiraganaRaw);
